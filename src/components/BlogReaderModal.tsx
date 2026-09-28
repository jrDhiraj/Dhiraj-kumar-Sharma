import React, { useEffect, useState } from 'react';
import { X, Calendar, Clock, BookOpen, Share2, Check, Tag } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogReaderModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export const BlogReaderModal: React.FC<BlogReaderModalProps> = ({ post, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (post) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [post, onClose]);

  if (!post) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-9 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Actions */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
          <div className="flex items-center gap-2 text-xs text-blue-400 font-mono font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{post.category}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-1.5 text-slate-400 hover:text-white bg-slate-800 rounded-md transition-colors text-xs flex items-center gap-1.5 px-2.5 cursor-pointer"
              title="Copy link"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-sans">Copied</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span className="font-sans">Share</span>
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white bg-slate-800 rounded-md transition-colors cursor-pointer"
              aria-label="Close article"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Title & Metadata */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight mb-4 [text-wrap:balance]">
            {post.title}
          </h1>

          {/* Zero Pill Metadata Line */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 font-mono">
            <span>By {post.author}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>{post.date}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Key Takeaways Box */}
        {post.keyTakeaways && post.keyTakeaways.length > 0 && (
          <div className="p-4 bg-slate-950/70 border border-slate-800 rounded-xl mb-8">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-3 font-mono">
              Key Engineering Takeaways
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {post.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Article Body */}
        <div className="space-y-5 text-sm sm:text-base text-slate-300 leading-relaxed font-sans mb-8">
          {post.content.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Tags Footer */}
        <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400 font-mono">
            <span className="text-slate-500">Related Tags:</span>
            {post.tags.map((tag, idx) => (
              <span key={tag} className="text-slate-300">
                #{tag}
                {idx < post.tags.length - 1 ? ' ·' : ''}
              </span>
            ))}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
          >
            Back to Articles
          </button>
        </div>
      </div>
    </div>
  );
};
