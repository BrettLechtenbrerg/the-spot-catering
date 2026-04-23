'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, LogIn, Utensils, Loader2 } from 'lucide-react';

// Default credentials (fallback if GitHub fetch fails)
const DEFAULT_USERNAME = 'thespot';
const DEFAULT_PASSWORD = 'thespot2026';

export default function PowerHubLogin() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/power-hub/credentials');
      let validUsername = DEFAULT_USERNAME;
      let validPassword = DEFAULT_PASSWORD;

      if (response.ok) {
        const data = await response.json();
        validUsername = data.username || DEFAULT_USERNAME;
        validPassword = data.password || DEFAULT_PASSWORD;
      }

      if (username === validUsername && password === validPassword) {
        localStorage.setItem('the_spot_power_hub_auth', 'true');
        router.push('/power-hub/dashboard');
      } else {
        setError('Invalid username or password');
        setLoading(false);
      }
    } catch (err) {
      console.error('Login error:', err);
      if (username === DEFAULT_USERNAME && password === DEFAULT_PASSWORD) {
        localStorage.setItem('the_spot_power_hub_auth', 'true');
        router.push('/power-hub/dashboard');
      } else {
        setError('Invalid username or password');
        setLoading(false);
      }
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#FAAA44] via-[#9E1F63] to-[#262262] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-[#FAAA44] to-[#9E1F63] rounded-2xl flex items-center justify-center shadow-lg">
                <Utensils className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">The Spot Power Hub</h1>
            <p className="text-gray-500 mt-2">Content Management System</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FAAA44]/20 focus:border-[#FAAA44] transition-all text-gray-900"
                placeholder="Enter your username"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FAAA44]/20 focus:border-[#FAAA44] transition-all pr-12 text-gray-900"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#FAAA44] to-[#9E1F63] hover:from-[#E89A35] hover:to-[#B82573] text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-all disabled:opacity-50 shadow-lg"
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  <LogIn size={18} />
                  Sign In
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-xs text-gray-400">
              The Spot Catering &middot; Denver&apos;s Corporate Catering Queen
            </p>
          </div>
        </div>

        <p className="text-center text-white/80 text-sm mt-6">
          We know what hits the spot!
        </p>
      </div>
    </div>
  );
}
