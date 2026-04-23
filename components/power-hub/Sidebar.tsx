'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  LayoutDashboard,
  FileText,
  Image as ImageIcon,
  Settings,
  LogOut,
  Utensils,
  HelpCircle,
} from 'lucide-react';
import { useHelp } from './HelpContext';

const menuItems = [
  { name: 'Dashboard', href: '/power-hub/dashboard', icon: LayoutDashboard },
  { name: 'Content', href: '/power-hub/dashboard/content', icon: FileText },
  { name: 'Media', href: '/power-hub/dashboard/media', icon: ImageIcon },
  { name: 'Settings', href: '/power-hub/dashboard/settings', icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { open: openHelp } = useHelp();

  const handleLogout = () => {
    localStorage.removeItem('the_spot_power_hub_auth');
    router.push('/power-hub');
  };

  return (
    <aside className="w-64 bg-gradient-to-b from-[#262262] to-[#9E1F63] text-white min-h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-white/10">
        <Link href="/power-hub/dashboard" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg overflow-hidden bg-[#FAAA44] flex items-center justify-center">
            <Utensils className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-lg">Power Hub</h1>
            <p className="text-xs text-white/60">The Spot Catering</p>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(item.href + '/');
            const Icon = item.icon;

            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? 'bg-[#FAAA44] text-white shadow-lg'
                      : 'text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <Icon size={20} />
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}

          {/* Help — opens the shared help modal. Styled distinctly from the
              nav links (outlined pill) so it reads as an action, not a route. */}
          <li className="pt-3 mt-3 border-t border-white/10">
            <button
              type="button"
              onClick={openHelp}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-all font-medium border border-white/20"
              aria-label="Open help"
            >
              <HelpCircle size={20} />
              <span>Help</span>
              <kbd className="ml-auto text-[10px] px-1.5 py-0.5 bg-white/10 border border-white/20 rounded font-mono">
                ?
              </kbd>
            </button>
          </li>
        </ul>
      </nav>

      {/* User section */}
      <div className="p-4 border-t border-white/10">
        <div className="flex items-center gap-3 px-4 py-3">
          <div className="w-8 h-8 rounded-full bg-[#FAAA44] flex items-center justify-center">
            <span className="text-sm font-medium">TS</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">Admin</p>
            <p className="text-xs text-white/60">The Spot</p>
          </div>
          <button
            onClick={handleLogout}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            title="Sign Out"
          >
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </aside>
  );
}
