'use client';

import { ExternalLink, HelpCircle } from 'lucide-react';
import { useHelp } from './HelpContext';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
  const { open: openHelp } = useHelp();

  return (
    <header className="bg-white border-b border-gray-200 px-8 py-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          {subtitle && <p className="text-gray-500 mt-1">{subtitle}</p>}
        </div>
        <div className="flex items-center gap-3">
          {/* Help trigger — purple so it's visually distinct from the orange
              "View Live Site" CTA and the orange floating Help pill. */}
          <button
            type="button"
            onClick={openHelp}
            className="flex items-center gap-2 px-4 py-2 bg-[#9E1F63] text-white rounded-lg hover:bg-[#B82573] transition-colors shadow-sm"
            aria-label="Open help"
          >
            <HelpCircle size={16} />
            Help
          </button>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-[#FAAA44] text-white rounded-lg hover:bg-[#E89A35] transition-colors shadow-sm"
          >
            <ExternalLink size={16} />
            View Live Site
          </a>
        </div>
      </div>
    </header>
  );
}
