'use client';

import { useEffect, useState } from 'react';
import { X, UtensilsCrossed, Loader2, Check, AlertCircle } from 'lucide-react';

interface MenuCategoryOption {
  title: string;
  tagline: string;
  itemCount: number;
}

interface AddToMenuModalProps {
  open: boolean;
  onClose: () => void;
  image: { url: string; name: string; previewUrl?: string } | null;
}

export default function AddToMenuModal({ open, onClose, image }: AddToMenuModalProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [categoryTitle, setCategoryTitle] = useState('');
  const [categories, setCategories] = useState<MenuCategoryOption[]>([]);
  const [loadingCategories, setLoadingCategories] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Fetch the category list whenever the modal opens for a new image
  useEffect(() => {
    if (!open || !image) return;

    const pretty = image.name
      .replace(/\.(jpg|jpeg|png|gif|webp|svg)$/i, '')
      .replace(/[-_]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/\b\w/g, (c) => c.toUpperCase());
    setName(pretty);
    setDescription('');
    setError('');
    setSuccess('');
    setSaving(false);

    let cancelled = false;
    (async () => {
      setLoadingCategories(true);
      try {
        const response = await fetch('/api/power-hub/menu');
        const data = await response.json();
        if (cancelled) return;
        if (!response.ok) {
          setError(data.error || 'Failed to load menu categories');
          setCategories([]);
        } else {
          setCategories(data.categories || []);
          // Default to first category so the user always has a selection
          if ((data.categories || []).length > 0) {
            setCategoryTitle(data.categories[0].title);
          }
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Failed to load categories');
          setCategories([]);
        }
      } finally {
        if (!cancelled) setLoadingCategories(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [open, image]);

  if (!open || !image) return null;

  const handleSubmit = async () => {
    setError('');
    setSuccess('');

    if (!categoryTitle) {
      setError('Please pick a menu category.');
      return;
    }
    if (!name.trim()) {
      setError('Please enter an item name.');
      return;
    }
    if (!description.trim()) {
      setError('Please enter a short description.');
      return;
    }

    setSaving(true);
    try {
      const response = await fetch('/api/power-hub/menu', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          categoryTitle,
          name: name.trim(),
          description: description.trim(),
          image: image.url,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to add to menu');
      }

      setSuccess(data.message || 'Added to menu!');
      setTimeout(() => onClose(), 1800);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add to menu');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget && !saving) onClose();
      }}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 sticky top-0 bg-white rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#FAAA44]/10 flex items-center justify-center">
              <UtensilsCrossed className="w-5 h-5 text-[#FAAA44]" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Add to Menu</h2>
              <p className="text-sm text-gray-500">
                This will publish a new item to the public Menus page.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            disabled={saving}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          {/* Image preview */}
          <div className="flex gap-4 items-start bg-gray-50 rounded-xl p-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image.previewUrl || image.url}
              alt={image.name}
              className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
            />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-gray-900 truncate">{image.name}</p>
              <p className="text-xs text-gray-500 mt-1 break-all font-mono">{image.url}</p>
            </div>
          </div>

          {/* Category picker */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Menu Category <span className="text-red-500">*</span>
            </label>
            {loadingCategories ? (
              <div className="flex items-center gap-2 text-gray-500 text-sm py-2">
                <Loader2 size={16} className="animate-spin" />
                Loading categories...
              </div>
            ) : categories.length === 0 ? (
              <p className="text-sm text-gray-500">No categories available.</p>
            ) : (
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => {
                  const active = categoryTitle === cat.title;
                  return (
                    <button
                      key={cat.title}
                      type="button"
                      onClick={() => setCategoryTitle(cat.title)}
                      className={`px-4 py-2.5 rounded-xl text-sm font-medium border-2 transition-all text-left ${
                        active
                          ? 'bg-[#FAAA44] text-white border-[#FAAA44]'
                          : 'bg-white text-gray-700 border-gray-200 hover:border-[#FAAA44]'
                      }`}
                    >
                      <div className="flex items-center gap-1.5">
                        {active && <Check size={14} />}
                        {cat.title}
                      </div>
                      <div
                        className={`text-[11px] mt-0.5 ${active ? 'text-white/80' : 'text-gray-500'}`}
                      >
                        {cat.itemCount} item{cat.itemCount === 1 ? '' : 's'} &middot; {cat.tagline}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Item name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Item Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Classic Hogie Sandwiches"
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FAAA44]/20 focus:border-[#FAAA44] text-gray-900"
            />
            <p className="text-xs text-gray-500 mt-1">
              Shown as the item heading on the Menus page.
            </p>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Short Description <span className="text-red-500">*</span>
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g. Fresh-baked hoagies with deli meats, cheeses, and garden vegetables."
              rows={3}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FAAA44]/20 focus:border-[#FAAA44] text-gray-900 resize-y"
            />
            <p className="text-xs text-gray-500 mt-1">
              1&ndash;2 sentences describing what&apos;s on the plate.
            </p>
          </div>

          {/* Error / success */}
          {error && (
            <div className="flex items-center gap-3 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              <AlertCircle size={18} className="flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {success && (
            <div className="flex items-center gap-3 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
              <Check size={18} className="flex-shrink-0" />
              <span>{success}</span>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
          <button
            onClick={onClose}
            disabled={saving}
            className="px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={saving || !!success || loadingCategories || categories.length === 0}
            className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#FAAA44] to-[#E89A35] text-white rounded-lg hover:from-[#E89A35] hover:to-[#D48A25] transition-all shadow-lg disabled:opacity-50"
          >
            {saving ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Adding...
              </>
            ) : success ? (
              <>
                <Check size={18} />
                Added!
              </>
            ) : (
              <>
                <UtensilsCrossed size={18} />
                Add to Menu
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
