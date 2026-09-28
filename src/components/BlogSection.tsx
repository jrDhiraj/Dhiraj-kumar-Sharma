import React, { useState, useEffect } from 'react';
import { BookOpen, ArrowRight, ExternalLink, PenLine, ShieldCheck } from 'lucide-react';
import { INITIAL_BLOG_POSTS } from '../data/portfolioData';
import { BlogPost } from '../types';

interface BlogSectionProps {
  onNavigateToBlog: (postSlug?: string) => void;
  onOpenWriter: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({
  onNavigateToBlog,
  onOpenWriter,
}) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('dhiraj_blog_posts_v3');
      if (stored) {
        const parsed: BlogPost[] = JSON.parse(stored);
        if (parsed.length > 0) {
          setPosts(parsed);
          return;
        }
      }
      setPosts(INITIAL_BLOG_POSTS);
    } catch {
      setPosts(INITIAL_BLOG_POSTS);
    }
  }, []);

  return (
    <section id="blog" className="py-24 bg-black border-b border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-cyan-400 mb-3 font-mono">
              <BookOpen className="w-3.5 h-3.5" />
              <span className="uppercase tracking-wider">Engineering Field Notes &amp; Insights</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
              Technical Blog &amp; Industrial Analysis
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 mt-3 max-w-2xl leading-relaxed">
              Explore deep dives on OEE calculations, SAP production scheduling, shop-floor data pipelines, and predictive analytics.
            </p>
          </div>

          {/* Quick Action to open dedicated full Blog Page */}
          <div className="mt-6 md:mt-0 flex items-center gap-3">
            <button
              onClick={() => onNavigateToBlog()}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors shadow-lg shadow-blue-900/40 cursor-pointer"
            >
              <span>Explore All Articles on Blog Hub</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Featured Posts Grid with Cover Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {posts.slice(0, 2).map((post) => (
            <article
              key={post.id}
              onClick={() => onNavigateToBlog(post.slug)}
              className="group bg-[#0c0c0e] hover:bg-[#121216] border border-neutral-800 hover:border-neutral-700 rounded-2xl overflow-hidden transition-all duration-300 shadow-xl cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Photo Banner */}
                {post.coverImage && (
                  <div className="w-full h-52 overflow-hidden bg-black relative border-b border-neutral-800">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-2.5 py-1 text-[11px] font-mono font-semibold bg-black/85 backdrop-blur-md text-cyan-400 border border-neutral-800 rounded-md uppercase tracking-wider">
                        {post.category}
                      </span>
                      {post.images && post.images.length > 1 && (
                        <span className="px-2 py-0.5 text-[10px] font-mono font-medium bg-black/85 backdrop-blur-md text-emerald-400 border border-neutral-800 rounded-md">
                          📷 {post.images.length} Photos
                        </span>
                      )}
                    </div>
                  </div>
                )}

                <div className="p-6 sm:p-7">
                  {/* Zero Pill Unboxed Metadata */}
                  <div className="flex items-center gap-2 text-xs text-neutral-400 mb-3 font-mono">
                    <span>{post.readTime}</span>
                    <span aria-hidden="true" className="text-neutral-600">·</span>
                    <span>{post.date}</span>
                    <span aria-hidden="true" className="text-neutral-600">·</span>
                    <span>By {post.author}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug mb-3">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-neutral-800 flex items-center justify-between">
                <div className="flex flex-wrap items-center gap-1.5 text-xs text-neutral-400 font-mono">
                  {post.tags.slice(0, 3).map((tag, i) => (
                    <React.Fragment key={tag}>
                      <span>#{tag}</span>
                      {i < Math.min(post.tags.length, 3) - 1 && (
                        <span aria-hidden="true" className="text-neutral-700">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform">
                  <span>Read on Blog Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Dedicated Page Prompt Banner */}
        <div className="bg-[#0c0c0e] border border-neutral-800 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-cyan-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                Dedicated Publication Hub &amp; Protected Author Studio
              </h4>
              <p className="text-xs text-neutral-400 mt-0.5">
                Full-page editorial reader with multi-image gallery support, markdown rendering, and password-protected authoring.
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigateToBlog()}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-neutral-200 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/80 rounded-xl transition-colors cursor-pointer shrink-0"
          >
            <span>Open Dedicated Blog Page</span>
            <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>
      </div>
    </section>
  );
};
