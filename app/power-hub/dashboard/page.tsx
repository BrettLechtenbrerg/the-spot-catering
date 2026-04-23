'use client';

import Header from '@/components/power-hub/Header';
import Link from 'next/link';
import {
  FileText,
  Image as ImageIcon,
  Settings,
  TrendingUp,
  ExternalLink,
  Utensils,
  Users,
  Star,
  Crown,
  Building2,
  Sparkles,
  PartyPopper,
  Shield,
  ScrollText,
} from 'lucide-react';

const stats = [
  { name: 'Website Pages', value: '11', icon: FileText, change: 'All Active', color: 'text-blue-600' },
  { name: 'Editable Sections', value: '13', icon: Sparkles, change: 'JSON-powered', color: 'text-purple-600' },
  { name: 'Media Library', value: 'Ready', icon: ImageIcon, change: 'Upload images', color: 'text-green-600' },
];

const quickActions = [
  { name: 'Edit Content', href: '/power-hub/dashboard/content', icon: FileText, color: 'bg-blue-500', description: 'Update website text' },
  { name: 'Upload Media', href: '/power-hub/dashboard/media', icon: ImageIcon, color: 'bg-purple-500', description: 'Add images & photos' },
  { name: 'Settings', href: '/power-hub/dashboard/settings', icon: Settings, color: 'bg-gray-500', description: 'Change your password' },
];

const websitePages = [
  { name: 'Home', path: '/', icon: Utensils },
  { name: 'About', path: '/about', icon: Crown },
  { name: 'Services', path: '/services', icon: Star },
  { name: 'Corporate', path: '/corporate', icon: Building2 },
  { name: 'Themed Events', path: '/themes', icon: PartyPopper },
  { name: 'Gallery', path: '/gallery', icon: ImageIcon },
  { name: 'Menus', path: '/menus', icon: FileText },
  { name: 'Contact', path: '/contact', icon: Users },
  { name: 'Crock Spot', path: '/crock-spot', icon: Sparkles },
  { name: 'Privacy', path: '/privacy', icon: Shield },
  { name: 'Terms', path: '/terms', icon: ScrollText },
];

export default function Dashboard() {
  return (
    <div>
      <Header title="Dashboard" subtitle="Welcome to The Spot Power Hub" />

      <div className="p-8">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-[#FAAA44] to-[#9E1F63] rounded-2xl p-6 mb-8 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">The Spot Power Hub</h2>
              <p className="text-white/80 mt-1">Edit your website content, upload images, and publish — all without code.</p>
            </div>
            <div className="text-6xl opacity-20">
              <Utensils className="w-16 h-16" />
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.name} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">{stat.name}</p>
                    <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
                    <p className={`text-xs ${stat.color} mt-2 flex items-center gap-1`}>
                      <TrendingUp size={12} />
                      {stat.change}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-[#FAAA44]/10 rounded-xl flex items-center justify-center">
                    <Icon className="text-[#FAAA44]" size={24} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Link
                key={action.name}
                href={action.href}
                className="bg-white rounded-xl border border-gray-200 p-5 hover:border-[#FAAA44] hover:shadow-lg transition-all group"
              >
                <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <Icon className="text-white" size={20} />
                </div>
                <h4 className="font-semibold text-gray-900">{action.name}</h4>
                <p className="text-xs text-gray-500 mt-1">{action.description}</p>
              </Link>
            );
          })}
        </div>

        {/* Website Pages */}
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Website Pages</h3>
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="divide-y divide-gray-100">
            {websitePages.map((page) => {
              const Icon = page.icon;
              return (
                <div key={page.name} className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#FAAA44]/10 rounded-lg flex items-center justify-center">
                      <Icon className="text-[#FAAA44]" size={16} />
                    </div>
                    <span className="font-medium text-gray-900">{page.name}</span>
                    <span className="text-xs text-gray-400">{page.path}</span>
                  </div>
                  <a
                    href={page.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-[#FAAA44] hover:text-[#E89A35] transition-colors"
                  >
                    <ExternalLink size={14} />
                    View
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>The Spot Catering &middot; Denver&apos;s Corporate Catering Queen</p>
        </div>
      </div>
    </div>
  );
}
