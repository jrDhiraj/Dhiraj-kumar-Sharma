import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  PenLine,
  Eye,
  Check,
  AlertCircle,
  Upload,
  Image as ImageIcon,
  Trash2,
  Sparkles,
  Layers,
  Plus,
  RefreshCw,
  Star,
  ArrowUp,
  ArrowDown
} from 'lucide-react';
import { BlogPost } from '../types';

interface BlogWriterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSavePost: (post: BlogPost) => void;
  postToEdit?: BlogPost | null;
}

export const BlogWriterModal: React.FC<BlogWriterModalProps> = ({
  isOpen,
  onClose,
  onSavePost,
  postToEdit,
}) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Production Analytics');
  const [readTime, setReadTime] = useState('5 min read');
  const [tagsInput, setTagsInput] = useState('Production, SAP, Analytics');
  const [excerpt, setExcerpt] = useState('');
  const [contentInput, setContentInput] = useState('');
  const [takeawaysInput, setTakeawaysInput] = useState('');
  const [images, setImages] = useState<string[]>([]);
  const [showPreview, setShowPreview] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const multipleFileInputRef = useRef<HTMLInputElement>(null);
  const replaceFileInputRef = useRef<HTMLInputElement>(null);
  const [replaceIndex, setReplaceIndex] = useState<number | null>(null);

  // Pre-fill if editing
  useEffect(() => {
    if (postToEdit) {
      setTitle(postToEdit.title);
      setCategory(postToEdit.category);
      setReadTime(postToEdit.readTime);
      setTagsInput(postToEdit.tags.join(', '));
      setExcerpt(postToEdit.excerpt);
      setContentInput(postToEdit.content.join('\n\n'));
      setTakeawaysInput(postToEdit.keyTakeaways.join('\n'));
      
      // Load existing images (merging coverImage if not already in images array)
      const existingImages = postToEdit.images && postToEdit.images.length > 0
        ? [...postToEdit.images]
        : postToEdit.coverImage
        ? [postToEdit.coverImage]
        : [];
      setImages(existingImages);
    } else {
      setTitle('');
      setCategory('Production Analytics');
      setReadTime('5 min read');
      setTagsInput('Production, SAP, Analytics');
      setExcerpt('');
      setContentInput('');
      setTakeawaysInput('');
      setImages([]);
    }
    setError(null);
    setShowPreview(false);
  }, [postToEdit, isOpen]);

  if (!isOpen) return null;

  // Handle uploading multiple files simultaneously
  const handleMultipleFilesUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setError(null);
    const newImages: string[] = [];
    let completed = 0;

    Array.from(files).forEach((file) => {
      if (!file.type.startsWith('image/')) {
        setError('Only valid image files (PNG, JPG, WebP, SVG) are accepted.');
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setError(`File "${file.name}" exceeds 5MB limit.`);
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          newImages.push(result);
        }
        completed++;
        if (completed === files.length) {
          setImages((prev) => [...prev, ...newImages]);
        }
      };
      reader.readAsDataURL(file);
    });

    // Reset input
    e.target.value = '';
  };

  // Handle replacing a specific image in the list
  const triggerReplaceImage = (index: number) => {
    setReplaceIndex(index);
    if (replaceFileInputRef.current) {
      replaceFileInputRef.current.click();
    }
  };

  const handleReplaceFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || replaceIndex === null) return;

    if (!file.type.startsWith('image/')) {
      setError('Only image files can replace photos.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        setImages((prev) => {
          const updated = [...prev];
          updated[replaceIndex] = result;
          return updated;
        });
      }
      setReplaceIndex(null);
      setError(null);
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  const handleRemoveImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSetCover = (index: number) => {
    if (index === 0) return;
    setImages((prev) => {
      const item = prev[index];
      const filtered = prev.filter((_, i) => i !== index);
      return [item, ...filtered];
    });
  };

  const handleMoveImage = (index: number, direction: 'up' | 'down') => {
    setImages((prev) => {
      const newArr = [...prev];
      const targetIndex = direction === 'up' ? index - 1 : index + 1;
      if (targetIndex < 0 || targetIndex >= newArr.length) return prev;
      const temp = newArr[index];
      newArr[index] = newArr[targetIndex];
      newArr[targetIndex] = temp;
      return newArr;
    });
  };

  const handleAddPreset = (type: string) => {
    let presetSvg = '';
    if (type === 'oee') {
      presetSvg = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%"><defs><linearGradient id="bgoee" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%23020617"/><stop offset="50%" stop-color="%230f172a"/><stop offset="100%" stop-color="%23064e3b"/></linearGradient></defs><rect width="800" height="450" fill="url(%23bgoee)"/><circle cx="400" cy="225" r="130" fill="none" stroke="%2310b981" stroke-width="20" stroke-dasharray="800" stroke-dashoffset="200"/><text x="400" y="225" font-family="monospace" font-size="42" font-weight="bold" fill="%23ffffff" text-anchor="middle">OEE 88.5%</text><text x="400" y="265" font-family="sans-serif" font-size="14" fill="%236ee7b7" text-anchor="middle">AVAILABILITY · PERFORMANCE · QUALITY</text></svg>';
    } else if (type === 'sales') {
      presetSvg = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%"><defs><linearGradient id="bgsales" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%23020617"/><stop offset="50%" stop-color="%230f172a"/><stop offset="100%" stop-color="%231e1b4b"/></linearGradient></defs><rect width="800" height="450" fill="url(%23bgsales)"/><path d="M 80 340 Q 200 330 320 230 T 520 160 T 720 90" fill="none" stroke="%233b82f6" stroke-width="6"/><circle cx="320" cy="230" r="7" fill="%2360a5fa"/><circle cx="520" cy="160" r="7" fill="%2338bdf8"/><circle cx="720" cy="90" r="7" fill="%23818cf8"/><text x="400" y="80" font-family="monospace" font-size="28" font-weight="bold" fill="%23ffffff" text-anchor="middle">100K+ DATA DISTRIBUTION</text></svg>';
    } else {
      presetSvg = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%"><defs><linearGradient id="bgbi" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%23020617"/><stop offset="50%" stop-color="%230f172a"/><stop offset="100%" stop-color="%23172554"/></linearGradient></defs><rect width="800" height="450" fill="url(%23bgbi)"/><rect x="140" y="110" width="520" height="230" rx="10" fill="%23090d16" stroke="%233b82f6" stroke-width="2"/><text x="400" y="210" font-family="monospace" font-size="26" font-weight="bold" fill="%2360a5fa" text-anchor="middle">SAP &amp; POWER BI PLANNING</text><text x="400" y="250" font-family="sans-serif" font-size="14" fill="%2394a3b8" text-anchor="middle">EXECUTIVE SHOP-FLOOR DASHBOARD</text></svg>';
    }
    setImages((prev) => [...prev, presetSvg]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Please provide a title for your blog post.');
      return;
    }
    if (!excerpt.trim()) {
      setError('Please enter a brief summary or excerpt.');
      return;
    }
    if (!contentInput.trim()) {
      setError('Please write at least one paragraph of content.');
      return;
    }

    const paragraphs = contentInput
      .split('\n\n')
      .map((p) => p.trim())
      .filter((p) => p.length > 0);

    const takeaways = takeawaysInput
      .split('\n')
      .map((t) => t.trim())
      .filter((t) => t.length > 0);

    const tags = tagsInput
      .split(',')
      .map((t) => t.trim().replace(/^#/, ''))
      .filter((t) => t.length > 0);

    const primaryCover = images.length > 0 ? images[0] : undefined;

    const post: BlogPost = {
      id: postToEdit ? postToEdit.id : `custom-blog-${Date.now()}`,
      title: title.trim(),
      slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      category,
      date: postToEdit ? postToEdit.date : 'Current Entry',
      readTime,
      excerpt: excerpt.trim(),
      content: paragraphs,
      keyTakeaways: takeaways.length > 0 ? takeaways : ['Key operational insight logged by author.'],
      tags: tags.length > 0 ? tags : ['Analytics', 'Engineering'],
      author: 'Dhiraj Kumar Sharma',
      coverImage: primaryCover,
      images: images,
      isCustom: true,
    };

    onSavePost(post);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-[#0c0c0e] border border-neutral-800 rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Hidden replacement file input */}
        <input
          type="file"
          ref={replaceFileInputRef}
          accept="image/*"
          onChange={handleReplaceFileChange}
          className="hidden"
        />

        {/* Hidden multiple file input */}
        <input
          type="file"
          ref={multipleFileInputRef}
          multiple
          accept="image/*"
          onChange={handleMultipleFilesUpload}
          className="hidden"
        />

        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-cyan-400">
              <PenLine className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white leading-tight">
                {postToEdit ? 'Edit Article & Manage Media' : 'Compose & Publish Engineering Article'}
              </h2>
              <p className="text-[11px] text-neutral-400">
                Author: Dhiraj Kumar Sharma (GET @ Pioneer)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setShowPreview(!showPreview)}
              className="px-3 py-1.5 text-xs font-semibold text-neutral-300 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5 text-cyan-400" />
              <span>{showPreview ? 'Edit Form' : 'Live Preview'}</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 rounded-md transition-colors cursor-pointer"
              aria-label="Close Editor"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {error && (
          <div className="p-3 bg-rose-950/40 border border-rose-800/80 rounded-lg text-xs text-rose-300 flex items-center gap-2 mb-4">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {showPreview ? (
          /* ================= LIVE PREVIEW MODE ================= */
          <div className="space-y-6">
            <div className="p-6 bg-black border border-neutral-800 rounded-2xl">
              {/* Cover Photo */}
              {images.length > 0 && (
                <div className="w-full h-56 sm:h-72 rounded-xl overflow-hidden mb-6 border border-neutral-800 bg-[#0c0c0e]">
                  <img
                    src={images[0]}
                    alt="Article Cover"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Multi-Photo Gallery Preview */}
              {images.length > 1 && (
                <div className="mb-6 p-4 bg-[#141418] border border-neutral-800 rounded-xl">
                  <div className="text-xs font-mono uppercase text-cyan-400 font-bold mb-3 flex items-center gap-2">
                    <ImageIcon className="w-3.5 h-3.5" />
                    <span>Attached Gallery ({images.length} Photos)</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {images.map((img, idx) => (
                      <div key={idx} className="h-24 rounded-lg overflow-hidden border border-neutral-800 bg-black">
                        <img src={img} alt={`Preview ${idx}`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
                {category} · {readTime} · By Dhiraj Kumar Sharma
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                {title || 'Untitled Post'}
              </h1>

              <p className="text-sm text-neutral-300 leading-relaxed mb-6 font-medium">
                {excerpt || 'No executive summary provided.'}
              </p>

              {takeawaysInput && (
                <div className="p-4 bg-[#141418] border border-neutral-800 rounded-xl mb-6">
                  <h4 className="text-xs font-mono uppercase text-cyan-400 font-bold mb-2">
                    Key Engineering Takeaways
                  </h4>
                  <ul className="space-y-1.5 text-xs text-neutral-300">
                    {takeawaysInput.split('\n').filter(Boolean).map((t, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="space-y-4 text-sm text-neutral-300 leading-relaxed">
                {contentInput ? (
                  contentInput.split('\n\n').map((p, i) => <p key={i}>{p}</p>)
                ) : (
                  <p className="italic text-neutral-500">No article body written yet.</p>
                )}
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowPreview(false)}
                className="px-4 py-2 text-xs font-semibold text-neutral-300 bg-neutral-900 border border-neutral-800 rounded-lg cursor-pointer"
              >
                Back to Editing
              </button>
            </div>
          </div>
        ) : (
          /* ================= EDIT FORM MODE ================= */
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Multi-Photo Manager Section */}
            <div className="p-4 sm:p-5 bg-black/80 border border-neutral-800 rounded-xl space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <label className="text-xs font-semibold text-white flex items-center gap-2">
                    <ImageIcon className="w-4 h-4 text-cyan-400" />
                    <span>Article Images &amp; Cover Media ({images.length} Uploaded)</span>
                  </label>
                  <p className="text-[11px] text-neutral-400 mt-0.5">
                    Upload multiple photos! Image #1 acts as the primary cover banner.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => multipleFileInputRef.current?.click()}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer shadow-sm shadow-blue-900/40"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Upload Photos</span>
                  </button>

                  {images.length > 0 && (
                    <button
                      type="button"
                      onClick={() => setImages([])}
                      className="px-2.5 py-1.5 text-xs text-rose-400 hover:text-rose-300 bg-rose-950/40 border border-rose-900/60 rounded-lg transition-colors cursor-pointer"
                      title="Clear all images"
                    >
                      Clear All
                    </button>
                  )}
                </div>
              </div>

              {/* Uploaded Images List with Replace / Reorder / Delete */}
              {images.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {images.map((img, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-xl border flex items-center gap-3 relative transition-all ${
                        idx === 0
                          ? 'bg-blue-950/20 border-cyan-500/50 shadow-sm shadow-cyan-900/20'
                          : 'bg-[#141418] border-neutral-800 hover:border-neutral-700'
                      }`}
                    >
                      {/* Image Thumbnail */}
                      <div className="w-20 h-16 rounded-lg overflow-hidden bg-black border border-neutral-800 shrink-0">
                        <img
                          src={img}
                          alt={`Uploaded #${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Info & Controls */}
                      <div className="flex-1 min-w-0 space-y-1">
                        <div className="flex items-center justify-between text-[11px] font-mono">
                          <span className={idx === 0 ? 'text-cyan-400 font-bold' : 'text-neutral-400'}>
                            {idx === 0 ? '★ Primary Cover' : `Photo #${idx + 1}`}
                          </span>
                        </div>

                        {/* Action buttons: Replace, Set Cover, Remove, Order */}
                        <div className="flex flex-wrap items-center gap-1.5 pt-1">
                          <button
                            type="button"
                            onClick={() => triggerReplaceImage(idx)}
                            className="inline-flex items-center gap-1 px-2 py-0.5 text-[10.5px] font-mono font-medium text-neutral-200 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/80 rounded cursor-pointer"
                            title="Replace this image with a new photo"
                          >
                            <RefreshCw className="w-3 h-3 text-cyan-400" />
                            <span>Change</span>
                          </button>

                          {idx !== 0 && (
                            <button
                              type="button"
                              onClick={() => handleSetCover(idx)}
                              className="inline-flex items-center gap-1 px-2 py-0.5 text-[10.5px] font-mono text-cyan-300 hover:text-white bg-cyan-950/60 hover:bg-cyan-900 border border-cyan-800 rounded cursor-pointer"
                              title="Make this photo the primary cover"
                            >
                              <Star className="w-3 h-3 text-amber-400" />
                              <span>Make Cover</span>
                            </button>
                          )}

                          <button
                            type="button"
                            onClick={() => handleRemoveImage(idx)}
                            className="p-1 text-neutral-400 hover:text-rose-400 transition-colors ml-auto cursor-pointer"
                            title="Delete this photo"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* Empty Upload Dropzone */
                <label className="border-2 border-dashed border-neutral-800 hover:border-cyan-500/60 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer bg-neutral-900/30 transition-colors">
                  <Upload className="w-6 h-6 text-cyan-400 mb-2" />
                  <span className="text-xs font-semibold text-white">
                    Click to select multiple photos from your computer
                  </span>
                  <span className="text-[11px] text-neutral-400 mt-1">
                    Hold Ctrl / Shift to select multiple images (PNG, JPG, WebP, SVG up to 5MB each)
                  </span>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleMultipleFilesUpload}
                    className="hidden"
                  />
                </label>
              )}

              {/* Add Pre-designed High Resolution Diagram Presets */}
              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                <span className="text-[11px] text-neutral-400">Add technical vector preset:</span>
                <button
                  type="button"
                  onClick={() => handleAddPreset('oee')}
                  className="px-2.5 py-1 text-[11px] font-mono bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 rounded-md cursor-pointer"
                >
                  + OEE Gauge
                </button>
                <button
                  type="button"
                  onClick={() => handleAddPreset('sales')}
                  className="px-2.5 py-1 text-[11px] font-mono bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 rounded-md cursor-pointer"
                >
                  + Data Curve
                </button>
                <button
                  type="button"
                  onClick={() => handleAddPreset('bi')}
                  className="px-2.5 py-1 text-[11px] font-mono bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 rounded-md cursor-pointer"
                >
                  + SAP Dashboard
                </button>
              </div>
            </div>

            {/* Article Title */}
            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                Article Title *
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Real-Time Production Scheduling using SAP ERP & Advanced Excel"
                className="w-full bg-black border border-neutral-800 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-cyan-500 font-medium"
              />
            </div>

            {/* Category & Read Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-black border border-neutral-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value="Production Analytics">Production Analytics</option>
                  <option value="Data Analytics">Data Analytics</option>
                  <option value="BI & Reporting">BI & Reporting</option>
                  <option value="Manufacturing Insights">Manufacturing Insights</option>
                  <option value="Artificial Intelligence">Artificial Intelligence &amp; ML</option>
                  <option value="Career & Engineering">Career &amp; Engineering</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                  Estimated Read Time
                </label>
                <input
                  type="text"
                  value={readTime}
                  onChange={(e) => setReadTime(e.target.value)}
                  placeholder="e.g. 5 min read"
                  className="w-full bg-black border border-neutral-800 rounded-lg px-3.5 py-2 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-cyan-500 font-mono"
                />
              </div>
            </div>

            {/* Tags */}
            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                Topic Tags (comma-separated)
              </label>
              <input
                type="text"
                value={tagsInput}
                onChange={(e) => setTagsInput(e.target.value)}
                placeholder="e.g. SAP, Excel, Production Planning, OEE, SQL"
                className="w-full bg-black border border-neutral-800 rounded-lg px-3.5 py-2 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-cyan-500 font-mono"
              />
            </div>

            {/* Excerpt */}
            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                Executive Excerpt / Short Summary *
              </label>
              <textarea
                required
                rows={2}
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                placeholder="A concise 2-sentence summary of the operational challenge and outcomes..."
                className="w-full bg-black border border-neutral-800 rounded-lg px-3.5 py-2 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-cyan-500"
              />
            </div>

            {/* Full Body */}
            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                Full Article Prose (Separate paragraphs with double enter) *
              </label>
              <textarea
                required
                rows={7}
                value={contentInput}
                onChange={(e) => setContentInput(e.target.value)}
                placeholder="Write your in-depth technical analysis here. Use double line breaks between paragraphs..."
                className="w-full bg-black border border-neutral-800 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-cyan-500 font-sans leading-relaxed"
              />
            </div>

            {/* Key Takeaways */}
            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                Key Engineering Takeaways (1 bullet per line)
              </label>
              <textarea
                rows={3}
                value={takeawaysInput}
                onChange={(e) => setTakeawaysInput(e.target.value)}
                placeholder="1. OEE tracks Availability, Performance, and Quality.&#10;2. SAP Master Data synchronizes with Excel formulas.&#10;3. Pareto analysis isolates 80% of machine downtime causes."
                className="w-full bg-black border border-neutral-800 rounded-lg px-3 py-2 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-cyan-500 font-mono"
              />
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
              <span className="text-[11px] text-neutral-500 font-mono">
                Persisted to browser local storage
              </span>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer shadow-md shadow-blue-900/40"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>{postToEdit ? 'Save Changes' : 'Publish Article'}</span>
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
