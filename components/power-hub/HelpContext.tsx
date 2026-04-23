'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { usePathname } from 'next/navigation';
import { HelpCircle, X, Lightbulb } from 'lucide-react';
import { getGuideForPath } from './helpContent';

//==============================================================================
// POWER HUB - Help Context
// Shared open-state + modal for every "Open Help" trigger in the dashboard.
// Wrap the dashboard in <HelpProvider>; anywhere inside, call `useHelp()` to
// get `{ open, close, isOpen }`.
//==============================================================================

interface HelpContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

const HelpContext = createContext<HelpContextValue | null>(null);

export function useHelp() {
  const ctx = useContext(HelpContext);
  if (!ctx) {
    // Fail loud in dev; callers should always be inside <HelpProvider>.
    throw new Error('useHelp() must be called inside <HelpProvider>.');
  }
  return ctx;
}

export function HelpProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || '';
  const [isOpen, setOpen] = useState(false);

  const open = useCallback(() => setOpen(true), []);
  const close = useCallback(() => setOpen(false), []);
  const toggle = useCallback(() => setOpen((v) => !v), []);

  const value = useMemo<HelpContextValue>(
    () => ({ isOpen, open, close, toggle }),
    [isOpen, open, close, toggle],
  );

  // Keyboard shortcut: "?" opens; "Esc" closes.
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const isTyping =
        !!target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT' ||
          target.isContentEditable);

      if (!isTyping && (e.key === '?' || (e.shiftKey && e.key === '/'))) {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const guide = getGuideForPath(pathname);

  return (
    <HelpContext.Provider value={value}>
      {children}

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="help-title"
        >
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 sticky top-0 bg-white rounded-t-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#FAAA44]/10 flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-[#FAAA44]" />
                </div>
                <div>
                  <h2
                    id="help-title"
                    className="text-lg font-semibold text-gray-900"
                  >
                    {guide.pageTitle}
                  </h2>
                  <p className="text-sm text-gray-500">{guide.intro}</p>
                </div>
              </div>
              <button
                onClick={close}
                aria-label="Close help"
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-5">
              <ol className="space-y-4">
                {guide.steps.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#FAAA44] to-[#E89A35] text-white font-bold flex items-center justify-center shadow-md">
                      {i + 1}
                    </div>
                    <div className="flex-1 pt-0.5">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {step.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              {guide.tips && guide.tips.length > 0 && (
                <div className="bg-[#FAAA44]/10 border border-[#FAAA44]/20 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Lightbulb size={18} className="text-[#FAAA44]" />
                    <h3 className="font-semibold text-gray-900">Good to know</h3>
                  </div>
                  <ul className="space-y-2">
                    {guide.tips.map((tip, i) => (
                      <li
                        key={i}
                        className="text-sm text-gray-700 leading-relaxed flex gap-2"
                      >
                        <span className="text-[#FAAA44] font-bold flex-shrink-0">
                          &bull;
                        </span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between gap-3 p-6 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
              <p className="text-xs text-gray-500">
                Tip: press{' '}
                <kbd className="px-1.5 py-0.5 bg-white border border-gray-300 rounded font-mono text-[11px]">
                  ?
                </kbd>{' '}
                anytime to reopen this panel.
              </p>
              <button
                onClick={close}
                className="px-5 py-2 bg-[#FAAA44] text-white rounded-lg hover:bg-[#E89A35] transition-colors font-medium"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </HelpContext.Provider>
  );
}
