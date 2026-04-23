'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/power-hub/Header';
import {
  Save,
  Eye,
  EyeOff,
  Shield,
  Database,
  CheckCircle,
  AlertCircle,
  Loader2,
} from 'lucide-react';

export default function SettingsPage() {
  const [username, setUsername] = useState('thespot');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [credentialsSha, setCredentialsSha] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const [storedPassword, setStoredPassword] = useState('');

  useEffect(() => {
    async function loadCredentials() {
      try {
        const response = await fetch('/api/power-hub/credentials');
        if (response.ok) {
          const data = await response.json();
          setUsername(data.username || 'thespot');
          setStoredPassword(data.password || '');
          setCredentialsSha(data.sha);
          setLastUpdated(data.lastUpdated);
        }
      } catch (err) {
        console.error('Failed to load credentials:', err);
      } finally {
        setLoading(false);
      }
    }
    loadCredentials();
  }, []);

  const saveCredentials = async () => {
    setError('');
    setSaved(false);

    // If a new password was typed, validate before saving
    if (newPassword) {
      if (currentPassword !== storedPassword) {
        setError('Current password is incorrect');
        return;
      }
      if (newPassword !== confirmPassword) {
        setError('New passwords do not match');
        return;
      }
      if (newPassword.length < 6) {
        setError('Password must be at least 6 characters');
        return;
      }
    }

    setSaving(true);

    try {
      const passwordToSave = newPassword || storedPassword;

      const response = await fetch('/api/power-hub/credentials', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          password: passwordToSave,
          sha: credentialsSha,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to save credentials');
      }

      const data = await response.json();
      setCredentialsSha(data.newSha);
      setStoredPassword(passwordToSave);
      setLastUpdated(new Date().toISOString());

      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');

      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (err) {
      console.error('Save error:', err);
      setError(err instanceof Error ? err.message : 'Failed to save settings');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div>
        <Header title="Settings" subtitle="Configure your Power Hub" />
        <div className="p-8 flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-[#FAAA44]" />
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header title="Settings" subtitle="Configure your Power Hub" />

      <div className="p-8 max-w-3xl">
        {saved && (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-green-700">Settings saved successfully!</span>
          </div>
        )}

        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-red-600" />
            <span className="text-red-700">{error}</span>
          </div>
        )}

        {/* Security Settings */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[#FAAA44]/10 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-[#FAAA44]" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Security</h2>
              <p className="text-sm text-gray-500">Update your login credentials</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FAAA44]/20 focus:border-[#FAAA44]"
              />
            </div>

            <div className="border-t border-gray-100 pt-4 mt-4">
              <p className="text-sm text-gray-600 mb-4">
                To change your password, enter your current password and then your new password.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Current Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FAAA44]/20 focus:border-[#FAAA44] pr-10"
                  placeholder="Enter current password to change"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FAAA44]/20 focus:border-[#FAAA44]"
                placeholder="Enter new password"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm New Password
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FAAA44]/20 focus:border-[#FAAA44]"
                placeholder="Confirm new password"
              />
            </div>

            {lastUpdated && (
              <p className="text-xs text-gray-400 mt-2">
                Last updated: {new Date(lastUpdated).toLocaleDateString()} at{' '}
                {new Date(lastUpdated).toLocaleTimeString()}
              </p>
            )}
          </div>
        </div>

        {/* Data Storage */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Database className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Data Storage</h2>
              <p className="text-sm text-gray-500">Current storage configuration</p>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-4">
            <p className="text-sm text-green-700">
              <strong>Status:</strong> Connected to GitHub
            </p>
            <p className="text-sm text-green-600 mt-2">
              Content and credentials are stored in your GitHub repository. Every save is a commit
              that auto-deploys via Vercel.
            </p>
          </div>
        </div>

        <button
          onClick={saveCredentials}
          disabled={saving}
          className="flex items-center gap-2 px-6 py-3 bg-[#FAAA44] text-white rounded-lg hover:bg-[#E89A35] transition-colors disabled:opacity-50 shadow-lg"
        >
          {saving ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Saving...
            </>
          ) : (
            <>
              <Save size={18} />
              Save Settings
            </>
          )}
        </button>
      </div>
    </div>
  );
}
