'use client';

import { useEffect, useState } from 'react';
import { X, ImagePlus, Loader2, Check, AlertCircle } from 'lucide-react';

const CATEGORIES = [
  { id: 'grazing', label: 'Grazing Boards' },
  { id: 'breakfast', label: 'Breakfast' },
  { id: 'lunch', label: 'Lunch' },
  { id: 'holiday', label: 'Holiday' },
  { id: 'desserts', label: 'Desserts' },
];

interface AddToGalleryModalProps {
  open: boolean;
  onClose: () => void;
  image: { url: string; name: string; previewUrl?: string } | null;
}

export default function AddToGalleryModal({
  open,
  onClose,
  image,
}: AddToGalleryModalProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [tall, setTall] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Reset form whenever a new image is opened
  useEffect(() => {
    if (open && image) {
      const pretty = image.name
        .replace(/\.(jpg|jpeg|png|gif|webp|svg)$/i, '')
        .replace(/[-_]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .replace(/\b\w/g, (c) => c.toUpperCase());
      setTitle(pretty);
      setDescription('');
      setSelectedCategories([]);
      setTall(false);
      setError('');
      setSuccess('');
      setSaving(false);
    }
  }, [open, image]);

  if (!open || !image) return null;

  const toggleCategory = (id: string) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id],
    );
  };

  const handleSubmit = async () => {
    setError('');
    setSuccess('');

    if (!title.trim()) {
      setError('Please enter a title.');
      return;
    }
    if (!description.trim()) {
      setError('Please enter a short description.');
      return;
    }
    if (selectedCategories.length === 0) {
      setError('Pick at least one category.');
      return;
    }

    setSaving(true);
    try {
      const response = await fetch('/api/power-hub/gallery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          src: image.url,
          alt: title.trim(),
          title: title.trim(),
          description: description.trim(),
          category: selectedCategories,
          tall,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to add to gallery');
      }

      setSuccess(data.message || 'Added to gallery!');
      // Auto-close after a short pause so the user sees the success state
      setTimeout(() => {
        onClose();
      }, 1600);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add to gallery');
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
              <ImagePlus className="w-5 h-5 text-[#FAAA44]" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Add to Gallery</h2>
              <p className="text-sm text-gray-500">
                This will publish the image to the public gallery page.
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

          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Classic Hogie Sandwiches"
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FAAA44]/20 focus:border-[#FAAA44] text-gray-900"
            />
            <p className="text-xs text-gray-500 mt-1">
              Shown on hover over the image in the gallery.
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
              placeholder="e.g. Fresh-made hogies with deli meats, cheeses, and garden vegetables."
              rows={3}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FAAA44]/20 focus:border-[#FAAA44] text-gray-900 resize-y"
            />
          </div>

          {/* Categories */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Categories <span className="text-red-500">*</span>
              <span className="text-xs text-gray-500 font-normal ml-2">
                (pick one or more)
              </span>
            </label>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => {
                const active = selectedCategories.includes(cat.id);
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => toggleCategory(cat.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition-all ${
                      active
                        ? 'bg-[#FAAA44] text-white border-[#FAAA44]'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-[#FAAA44]'
                    }`}
                  >
                    {active && <Check size={14} className="inline mr-1 -mt-0.5" />}
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tall toggle */}
          <div className="flex items-center justify-between bg-gray-50 rounded-xl p-4">
            <div>
              <p className="text-sm font-medium text-gray-900">Tall layout</p>
              <p className="text-xs text-gray-500 mt-0.5">
                Makes the image span two rows in the masonry grid. Best for portrait photos.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setTall(!tall)}
              className={`relative inline-flex h-6 w-11 flex-shrink-0 rounded-full transition-colors ${
                tall ? 'bg-[#FAAA44]' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-5 w-5 rounded-full bg-white shadow transform transition-transform mt-0.5 ${
                  tall ? 'translate-x-5' : 'translate-x-0.5'
                }`}
              />
            </button>
          </div>

          {/* Error / Success */}
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
            disabled={saving || !!success}
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
                <ImagePlus size={18} />
                Add to Gallery
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
