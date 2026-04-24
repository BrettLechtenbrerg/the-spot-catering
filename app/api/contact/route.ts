import { NextRequest, NextResponse } from 'next/server';

//==============================================================================
// CONTACT FORM — Webhook Relay
// Receives submissions from the /contact page and forwards them to the
// Go High Level webhook defined in GHL_WEBHOOK_URL.
//
// Keeping this server-side keeps the webhook URL out of the browser bundle
// and sidesteps CORS. Fields match what was mapped in GHL during setup.
//==============================================================================

const GHL_WEBHOOK_URL = process.env.GHL_WEBHOOK_URL;

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  eventType?: string;
  eventDate?: string;
  guestCount?: string;
  budget?: string;
  message?: string;
};

// Split "First Last" into firstName / lastName.
// Everything after the first space becomes the last name (handles "Mary Anne Smith").
function splitName(fullName: string): { firstName: string; lastName: string } {
  const trimmed = fullName.trim().replace(/\s+/g, ' ');
  if (!trimmed) return { firstName: '', lastName: '' };

  const firstSpace = trimmed.indexOf(' ');
  if (firstSpace === -1) {
    return { firstName: trimmed, lastName: '' };
  }

  return {
    firstName: trimmed.slice(0, firstSpace),
    lastName: trimmed.slice(firstSpace + 1),
  };
}

export async function POST(request: NextRequest) {
  try {
    if (!GHL_WEBHOOK_URL) {
      console.error('GHL_WEBHOOK_URL is not configured');
      return NextResponse.json(
        { error: 'Contact form is not configured. Please call or email us directly.' },
        { status: 500 },
      );
    }

    const body = (await request.json()) as ContactPayload;

    // Basic validation — match the `required` fields on the form.
    const name = (body.name ?? '').trim();
    const email = (body.email ?? '').trim();
    const eventType = (body.eventType ?? '').trim();
    const message = (body.message ?? '').trim();

    if (!name || !email || !eventType || !message) {
      return NextResponse.json(
        { error: 'Missing required fields.' },
        { status: 400 },
      );
    }

    // Light email sanity check.
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 },
      );
    }

    const { firstName, lastName } = splitName(name);

    const payload = {
      firstName,
      lastName,
      fullName: name,
      email,
      phone: (body.phone ?? '').trim(),
      company: (body.company ?? '').trim(),
      eventType,
      eventDate: (body.eventDate ?? '').trim(),
      guestCount: (body.guestCount ?? '').trim(),
      budget: (body.budget ?? '').trim(),
      message,
      source: 'the-spot-catering.vercel.app',
      formName: 'Request A Quote',
      pageUrl: request.headers.get('referer') ?? 'https://the-spot-catering.vercel.app/contact',
      submittedAt: new Date().toISOString(),
    };

    const ghlResponse = await fetch(GHL_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      // GHL is fast but not instant — give it a reasonable window.
      signal: AbortSignal.timeout(15_000),
    });

    if (!ghlResponse.ok) {
      const text = await ghlResponse.text().catch(() => '');
      console.error('GHL webhook failed', ghlResponse.status, text);
      return NextResponse.json(
        { error: 'We could not submit your request right now. Please try again or call us.' },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again or call us directly.' },
      { status: 500 },
    );
  }
}
