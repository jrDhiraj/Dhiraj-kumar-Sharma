import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  BookOpen,
  Search,
  PenLine,
  Lock,
  Unlock,
  Trash2,
  Edit3,
  Calendar,
  Clock,
  Tag,
  Share2,
  Check,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  RotateCcw,
  Images,
  Maximize2,
  X,
  ChevronLeft,
  Plus,
  AlertTriangle
} from 'lucide-react';
import { INITIAL_BLOG_POSTS, PERSONAL_INFO } from '../data/portfolioData';
import { BlogPost } from '../types';
import { AuthorAuthModal } from './AuthorAuthModal';
import { BlogWriterModal } from './BlogWriterModal';

interface BlogPageProps {
  onBackToPortfolio: () => void;
  initialPostSlug?: string | null;
}

export const BlogPage: React.FC<BlogPageProps> = ({
  onBackToPortfolio,
  initialPostSlug,
}) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isWriterOpen, setIsWriterOpen] = useState(false);
  const [postToEdit, setPostToEdit] = useState<BlogPost | null>(null);
  const [postToDelete, setPostToDelete] = useState<BlogPost | null>(null);
  const [showResetModal, setShowResetModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  // Check auth state
  useEffect(() => {
    const auth = sessionStorage.getItem('dhiraj_author_authenticated');
    setIsAuthenticated(auth === 'true');
  }, []);

  // Initialize unified blog storage so ALL articles are editable and deletable
  const loadPosts = () => {
    try {
      const stored = localStorage.getItem('dhiraj_blog_posts_v3');
      if (stored) {
        const parsed: BlogPost[] = JSON.parse(stored);
        if (parsed.length > 0) {
          setPosts(parsed);
          return;
        }
      }
      // If first run, seed with INITIAL_BLOG_POSTS
      localStorage.setItem('dhiraj_blog_posts_v3', JSON.stringify(INITIAL_BLOG_POSTS));
      setPosts(INITIAL_BLOG_POSTS);
    } catch {
      setPosts(INITIAL_BLOG_POSTS);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  // Sync initialPostSlug
  useEffect(() => {
    if (initialPostSlug && posts.length > 0) {
      const found = posts.find((p) => p.slug === initialPostSlug || p.id === initialPostSlug);
      if (found) {
        setSelectedPost(found);
      }
    }
  }, [initialPostSlug, posts]);

  const handleSavePost = (savedPost: BlogPost) => {
    try {
      const existing = [...posts];
      const index = existing.findIndex((p) => p.id === savedPost.id);

      let updated: BlogPost[];
      if (index >= 0) {
        updated = [...existing];
        updated[index] = savedPost;
      } else {
        updated = [savedPost, ...existing];
      }

      localStorage.setItem('dhiraj_blog_posts_v3', JSON.stringify(updated));
      setPosts(updated);
      if (selectedPost && selectedPost.id === savedPost.id) {
        setSelectedPost(savedPost);
      }
    } catch (e) {
      console.error('Failed to save blog post to localStorage:', e);
    }
  };

  const requestDeletePost = (post: BlogPost, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();

    if (!isAuthenticated) {
      setIsAuthModalOpen(true);
      return;
    }

    setPostToDelete(post);
  };

  const confirmDeletePost = () => {
    if (!postToDelete) return;
    try {
      const filtered = posts.filter((p) => p.id !== postToDelete.id);
      localStorage.setItem('dhiraj_blog_posts_v3', JSON.stringify(filtered));
      setPosts(filtered);
      if (selectedPost && selectedPost.id === postToDelete.id) {
        setSelectedPost(null);
      }
    } catch (err) {
      console.error('Error deleting post:', err);
    }
    setPostToDelete(null);
  };

  const handleOpenWriter = (post?: BlogPost) => {
    if (!isAuthenticated) {
      setIsAuthModalOpen(true);
      return;
    }
    setPostToEdit(post || null);
    setIsWriterOpen(true);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('dhiraj_author_authenticated');
    setIsAuthenticated(false);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const confirmResetDefaults = () => {
    localStorage.setItem('dhiraj_blog_posts_v3', JSON.stringify(INITIAL_BLOG_POSTS));
    setPosts(INITIAL_BLOG_POSTS);
    setSelectedPost(null);
    setShowResetModal(false);
  };

  // Filter posts
  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      activeCategory === 'all' ||
      post.category.toLowerCase().includes(activeCategory.toLowerCase());

    const matchesSearch =
      searchQuery.trim() === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'production', label: 'Production Analytics' },
    { id: 'data', label: 'Data Science & Python' },
    { id: 'bi', label: 'BI & Reporting' },
  ];

  // Helper to get all images for an article
  const getPostImages = (post: BlogPost): string[] => {
    if (post.images && post.images.length > 0) return post.images;
    if (post.coverImage) return [post.coverImage];
    return [];
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 w-full bg-black/90 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left: Back to Portfolio */}
            <button
              onClick={onBackToPortfolio}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-300 hover:text-white transition-colors cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 text-cyan-400 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Portfolio</span>
            </button>

            {/* Brand Title */}
            <div className="hidden md:flex items-center gap-2">
              <span className="text-sm font-extrabold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-neutral-600">/</span>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                Industrial Engineering &amp; Data Publication
              </span>
            </div>

            {/* Right: Author Controls */}
            <div className="flex items-center gap-3">
              {isAuthenticated ? (
                <div className="flex items-center gap-2">
                  <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-950/60 border border-emerald-800/80 text-[11px] font-mono text-emerald-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Author Mode (Dhiraj)</span>
                  </div>

                  <button
                    onClick={() => handleOpenWriter()}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer shadow-sm shadow-blue-900/40"
                  >
                    <PenLine className="w-3.5 h-3.5" />
                    <span>Write Article</span>
                  </button>

                  <button
                    onClick={handleLogout}
                    className="px-2.5 py-1.5 text-xs font-medium text-neutral-400 hover:text-neutral-200 bg-neutral-900 border border-neutral-800 rounded-lg transition-colors cursor-pointer"
                    title="Log out from Author session"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-neutral-200 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/80 rounded-lg transition-colors cursor-pointer"
                >
                  <Lock className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Author Login</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {selectedPost ? (
          /* ================= FULL PAGE ARTICLE VIEW ================= */
          <article className="max-w-4xl mx-auto py-4">
            {/* Breadcrumb Navigation & Controls */}
            <div className="flex items-center justify-between pb-6 border-b border-neutral-800 mb-8">
              <button
                onClick={() => setSelectedPost(null)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>All Articles &amp; Field Notes</span>
              </button>

              <div className="flex items-center gap-2.5">
                {isAuthenticated && (
                  <>
                    <button
                      onClick={() => handleOpenWriter(selectedPost)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-300 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-lg transition-colors cursor-pointer"
                      title="Edit article prose and media"
                    >
                      <Edit3 className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Edit Post &amp; Photos</span>
                    </button>

                    <button
                      onClick={() => requestDeletePost(selectedPost)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-rose-400 bg-rose-950/40 hover:bg-rose-900/60 border border-rose-800/80 rounded-lg transition-colors cursor-pointer"
                      title="Delete this article"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Delete</span>
                    </button>
                  </>
                )}

                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-300 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-lg transition-colors cursor-pointer"
                >
                  {copiedLink ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Link Copied</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5" />
                      <span>Share</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Article Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3">
                <span className="font-semibold">{selectedPost.category}</span>
                <span aria-hidden="true" className="text-neutral-600">·</span>
                <span>{selectedPost.readTime}</span>
                <span aria-hidden="true" className="text-neutral-600">·</span>
                <span>{selectedPost.date}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-6 [text-wrap:balance]">
                {selectedPost.title}
              </h1>

              {/* Author Strip */}
              <div className="flex items-center gap-3 py-4 border-y border-neutral-800">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-md shrink-0">
                  DKS
                </div>
                <div>
                  <div className="text-sm font-bold text-white leading-tight">
                    {selectedPost.author}
                  </div>
                  <div className="text-xs text-neutral-400 mt-0.5">
                    Graduate Engineer Trainee @ Pioneer · B.Tech Data Analytics (CGPA 8.04)
                  </div>
                </div>
              </div>
            </div>

            {/* Primary Hero Cover Image */}
            {getPostImages(selectedPost).length > 0 && (
              <div className="w-full h-64 sm:h-96 rounded-2xl overflow-hidden mb-8 border border-neutral-800 shadow-2xl bg-[#0c0c0e] relative group">
                <img
                  src={getPostImages(selectedPost)[0]}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setActiveLightboxIndex(0)}
                  className="absolute bottom-4 right-4 p-2 rounded-lg bg-black/80 text-white border border-neutral-700/80 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer flex items-center gap-1.5 text-xs font-mono"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Enlarge Photo</span>
                </button>
              </div>
            )}

            {/* Multi-Photo Gallery Showcase (if post has multiple images) */}
            {getPostImages(selectedPost).length > 1 && (
              <div className="mb-10 p-5 bg-[#0c0c0e] border border-neutral-800 rounded-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xs font-mono uppercase text-cyan-400 font-bold flex items-center gap-2">
                    <Images className="w-4 h-4" />
                    <span>Photo Gallery ({getPostImages(selectedPost).length} Images Attached)</span>
                  </div>
                  <span className="text-[11px] text-neutral-400 font-mono">
                    Click any photo to enlarge
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {getPostImages(selectedPost).map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => setActiveLightboxIndex(idx)}
                      className="group relative h-28 sm:h-32 rounded-xl overflow-hidden border border-neutral-800 bg-black cursor-pointer hover:border-cyan-500/60 transition-all shadow-md"
                    >
                      <img
                        src={img}
                        alt={`Gallery photo ${idx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                      <div className="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 rounded bg-black/80 text-[10px] font-mono text-neutral-300 border border-neutral-800">
                        #{idx + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Executive Summary Excerpt */}
            <div className="p-5 sm:p-6 bg-[#0c0c0e] border-l-4 border-cyan-500 rounded-r-xl mb-10 text-neutral-200 text-base leading-relaxed italic">
              "{selectedPost.excerpt}"
            </div>

            {/* Key Engineering Takeaways */}
            {selectedPost.keyTakeaways && selectedPost.keyTakeaways.length > 0 && (
              <div className="p-6 bg-[#0c0c0e] border border-neutral-800 rounded-2xl mb-10">
                <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-4 font-mono flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Key Practical Engineering Takeaways</span>
                </h3>
                <ul className="space-y-3 text-sm text-neutral-300">
                  {selectedPost.keyTakeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                      <span className="leading-relaxed">{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Full Body Prose */}
            <div className="space-y-6 text-base sm:text-lg text-neutral-300 leading-relaxed font-sans mb-12">
              {selectedPost.content.map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Tags & Return Footer */}
            <div className="pt-8 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-400">
                <span className="text-neutral-500 font-medium">Topic Tags:</span>
                {selectedPost.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-neutral-900 border border-neutral-800 rounded-md text-neutral-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setSelectedPost(null)}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-neutral-200 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/80 rounded-lg transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Blog Hub</span>
              </button>
            </div>
          </article>
        ) : (
          /* ================= MAIN BLOG LISTING PAGE ================= */
          <div>
            {/* Hero Header */}
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-cyan-400 mb-3 font-mono">
                <BookOpen className="w-3.5 h-3.5" />
                <span className="uppercase tracking-wider">Industrial Engineering &amp; Data Insights</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
                Shop-Floor Analytics, SAP &amp; Data Science Field Notes
              </h1>
              <p className="text-sm sm:text-base text-neutral-300 mt-3 leading-relaxed">
                Authored by <strong className="text-white">Dhiraj Kumar Sharma</strong>. Real-world accounts of OEE modeling, shift downtime categorization, 100k+ row data sanitization pipelines, and executive Power BI dashboards.
              </p>
            </div>

            {/* Search and Filters Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-neutral-800">
              {/* Category buttons */}
              <div className="flex items-center gap-1.5 p-1 bg-[#0c0c0e] border border-neutral-800 rounded-xl overflow-x-auto no-scrollbar">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                      activeCategory === cat.id
                        ? 'bg-blue-600 text-white shadow-sm shadow-blue-900/40'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Search Bar & Write Shortcut */}
              <div className="flex items-center gap-3">
                <div className="relative w-full sm:w-72">
                  <Search className="w-3.5 h-3.5 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search SAP, OEE, SQL, Power BI..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-1.5 bg-[#0c0c0e] border border-neutral-800 rounded-lg text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <button
                  onClick={() => handleOpenWriter()}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer shrink-0 shadow-md shadow-blue-900/40"
                >
                  <PenLine className="w-3.5 h-3.5" />
                  <span>Write Post</span>
                </button>
              </div>
            </div>

            {/* Articles Grid with Photo Covers & Multiple Image Badges */}
            {filteredPosts.length === 0 ? (
              <div className="text-center py-20 bg-[#0c0c0e] border border-neutral-800 rounded-2xl p-8">
                <p className="text-sm text-neutral-400 mb-3">
                  No articles matched your search query "{searchQuery}".
                </p>
                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      setActiveCategory('all');
                      setSearchQuery('');
                    }}
                    className="text-xs text-cyan-400 hover:underline cursor-pointer"
                  >
                    Clear search filters
                  </button>
                  <button
                    onClick={() => setShowResetModal(true)}
                    className="text-xs text-neutral-400 hover:text-white underline cursor-pointer"
                  >
                    Restore default sample articles
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {filteredPosts.map((post) => {
                  const postImages = getPostImages(post);
                  return (
                    <article
                      key={post.id}
                      onClick={() => setSelectedPost(post)}
                      className="group bg-[#0c0c0e] hover:bg-[#121216] border border-neutral-800 hover:border-neutral-700 rounded-2xl overflow-hidden transition-all duration-300 shadow-xl cursor-pointer flex flex-col justify-between"
                    >
                      <div>
                        {/* Cover Photo */}
                        {postImages.length > 0 && (
                          <div className="w-full h-52 sm:h-60 overflow-hidden bg-black relative border-b border-neutral-800">
                            <img
                              src={postImages[0]}
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                            />
                            <div className="absolute top-3 left-3 flex items-center gap-2">
                              <span className="px-2.5 py-1 text-[11px] font-mono font-semibold bg-black/85 backdrop-blur-md text-cyan-400 border border-neutral-800 rounded-md uppercase tracking-wider">
                                {post.category}
                              </span>
                            </div>

                            {/* Multi-Image Badge */}
                            {postImages.length > 1 && (
                              <div className="absolute top-3 right-3">
                                <span className="px-2 py-0.5 text-[11px] font-mono font-medium bg-black/85 backdrop-blur-md text-emerald-400 border border-neutral-800 rounded-md flex items-center gap-1">
                                  <Images className="w-3 h-3 text-cyan-400" />
                                  <span>{postImages.length} Photos</span>
                                </span>
                              </div>
                            )}
                          </div>
                        )}

                        <div className="p-6 sm:p-7">
                          {/* Metadata line & Author Edit/Delete buttons */}
                          <div className="flex items-center justify-between text-xs text-neutral-400 mb-3 font-mono">
                            <div className="flex items-center gap-2">
                              <span>{post.readTime}</span>
                              <span aria-hidden="true" className="text-neutral-600">·</span>
                              <span>{post.date}</span>
                            </div>

                            {/* Authenticated Author Actions (Direct Edit & Delete for EVERY post) */}
                            {isAuthenticated && (
                              <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
                                <button
                                  onClick={() => handleOpenWriter(post)}
                                  className="p-1.5 text-neutral-400 hover:text-cyan-400 hover:bg-neutral-800 rounded-md transition-colors"
                                  title="Edit Post & Photos"
                                >
                                  <Edit3 className="w-3.5 h-3.5" />
                                </button>
                                <button
                                  onClick={(e) => requestDeletePost(post, e)}
                                  className="p-1.5 text-neutral-400 hover:text-rose-400 hover:bg-rose-950/50 rounded-md transition-colors"
                                  title="Delete Post"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            )}
                          </div>

                          {/* Title */}
                          <h2 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug mb-3">
                            {post.title}
                          </h2>

                          {/* Excerpt */}
                          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed line-clamp-3 mb-6">
                            {post.excerpt}
                          </p>
                        </div>
                      </div>

                      {/* Card Footer */}
                      <div className="px-6 pb-6 pt-2 border-t border-neutral-800 flex items-center justify-between">
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-neutral-400 font-mono">
                          {post.tags.slice(0, 3).map((tag, i) => (
                            <React.Fragment key={tag}>
                              <span>#{tag}</span>
                              {i < Math.min(post.tags.length, 3) - 1 && (
                                <span aria-hidden="true" className="text-neutral-700">·</span>
                              )}
                            </React.Fragment>
                          ))}
                        </div>

                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform shrink-0">
                          <span>Read Full Article</span>
                          <ChevronRight className="w-4 h-4" />
                        </span>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}

            {/* Bottom Publishing Reset Strip */}
            <div className="mt-14 pt-8 border-t border-neutral-800 flex flex-wrap items-center justify-between text-xs text-neutral-400 font-mono">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Author Portal: Protected by User ID &amp; Password</span>
              </div>

              <button
                onClick={() => setShowResetModal(true)}
                className="flex items-center gap-1.5 text-neutral-500 hover:text-neutral-300 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Restore Default Articles</span>
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Lightbox Modal for Photo Gallery */}
      {selectedPost && activeLightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveLightboxIndex(null)}
        >
          <div
            className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex items-center justify-between pb-3 text-xs font-mono text-neutral-400">
              <span>Photo {activeLightboxIndex + 1} of {getPostImages(selectedPost).length}</span>
              <button
                onClick={() => setActiveLightboxIndex(null)}
                className="p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="relative w-full max-h-[78vh] flex items-center justify-center overflow-hidden rounded-2xl border border-neutral-800 bg-black">
              <img
                src={getPostImages(selectedPost)[activeLightboxIndex]}
                alt={`Photo ${activeLightboxIndex + 1}`}
                className="max-w-full max-h-[78vh] object-contain"
              />

              {/* Prev Button */}
              {getPostImages(selectedPost).length > 1 && (
                <button
                  onClick={() =>
                    setActiveLightboxIndex((prev) =>
                      prev === 0 ? getPostImages(selectedPost).length - 1 : (prev || 0) - 1
                    )
                  }
                  className="absolute left-3 p-2 rounded-full bg-black/80 text-white hover:bg-neutral-800 border border-neutral-700/80 transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              )}

              {/* Next Button */}
              {getPostImages(selectedPost).length > 1 && (
                <button
                  onClick={() =>
                    setActiveLightboxIndex((prev) =>
                      prev === getPostImages(selectedPost).length - 1 ? 0 : (prev || 0) + 1
                    )
                  }
                  className="absolute right-3 p-2 rounded-full bg-black/80 text-white hover:bg-neutral-800 border border-neutral-700/80 transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Custom In-App Delete Confirmation Modal (solves iframe alert/confirm issues) */}
      {postToDelete && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setPostToDelete(null)}
        >
          <div
            className="bg-[#0c0c0e] border border-neutral-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 text-rose-400">
              <div className="p-2.5 rounded-xl bg-rose-950/60 border border-rose-800/80">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Delete Blog Post?</h3>
                <p className="text-xs text-neutral-400">This action cannot be undone.</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Are you sure you want to permanently delete{' '}
              <strong className="text-white">"{postToDelete.title}"</strong>?
              All associated photos and content will be removed from your portfolio publication.
            </p>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setPostToDelete(null)}
                className="px-4 py-2 text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={confirmDeletePost}
                className="px-4 py-2 text-xs font-semibold text-white bg-rose-600 hover:bg-rose-500 rounded-lg transition-colors cursor-pointer shadow-md shadow-rose-900/40"
              >
                Permanently Delete Post
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Restore Defaults Confirmation Modal */}
      {showResetModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setShowResetModal(false)}
        >
          <div
            className="bg-[#0c0c0e] border border-neutral-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 text-amber-400">
              <div className="p-2.5 rounded-xl bg-amber-950/60 border border-amber-800/80">
                <RotateCcw className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Restore Sample Articles?</h3>
                <p className="text-xs text-neutral-400">Reset default article library</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              This will reload the initial articles written for Dhiraj Kumar Sharma (OEE manufacturing, 100K+ Pandas pipeline, Power BI plant floor, and SAP planning).
            </p>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowResetModal(false)}
                className="px-4 py-2 text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={confirmResetDefaults}
                className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
              >
                Restore Defaults
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Author Auth Modal */}
      <AuthorAuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onSuccess={() => {
          setIsAuthenticated(true);
        }}
      />

      {/* Blog Writer / Editor Modal */}
      <BlogWriterModal
        isOpen={isWriterOpen}
        onClose={() => {
          setIsWriterOpen(false);
          setPostToEdit(null);
        }}
        onSavePost={handleSavePost}
        postToEdit={postToEdit}
      />
    </div>
  );
};
