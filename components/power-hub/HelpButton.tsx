'use client';

import { HelpCircle } from 'lucide-react';
import { useHelp } from './HelpContext';

// Floating orange Help pill, fixed to the bottom-right of every dashboard page.
// Uses HelpContext so it shares open-state with the sidebar + header triggers.
export default function HelpButton() {
  const { open } = useHelp();

  return (
    <button
      type="button"
      aria-label="Open help"
      onClick={open}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-[#FAAA44] to-[#E89A35] text-white rounded-full shadow-2xl hover:shadow-[#FAAA44]/40 hover:scale-105 transition-all ring-4 ring-[#FAAA44]/20"
    >
      <HelpCircle size={22} />
      <span className="font-semibold">Help</span>
    </button>
  );
}
