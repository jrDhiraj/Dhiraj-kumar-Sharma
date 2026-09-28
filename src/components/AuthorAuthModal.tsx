import React, { useState } from 'react';
import { X, Lock, KeyRound, User, CheckCircle2, AlertCircle, ShieldCheck } from 'lucide-react';

interface AuthorAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const AuthorAuthModal: React.FC<AuthorAuthModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanId = userId.trim().toLowerCase();
    const cleanPass = password.trim();

    // Valid author credentials
    const validIds = ['dhiraj', 'jdhirajkumar7762@gmail.com', 'admin'];
    const validPasswords = ['dhiraj@123', 'pioneer2026', 'admin123'];

    if (validIds.includes(cleanId) && validPasswords.includes(cleanPass)) {
      sessionStorage.setItem('dhiraj_author_authenticated', 'true');
      setError(null);
      onSuccess();
      onClose();
    } else {
      setError('Invalid Author Credentials. Use User ID: dhiraj | Password: dhiraj@123');
    }
  };

  const handleQuickFill = () => {
    setUserId('dhiraj');
    setPassword('dhiraj@123');
    setError(null);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-[#0c0c0e] border border-neutral-800 rounded-2xl max-w-md w-full p-6 sm:p-8 relative shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle decorative glow */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-cyan-400">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white leading-tight">
                Author Verification
              </h3>
              <p className="text-[11px] text-neutral-400">
                Authorized publishing for Dhiraj Kumar Sharma
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {error && (
          <div className="p-3 bg-rose-950/40 border border-rose-800/80 rounded-lg text-xs text-rose-300 flex items-start gap-2 mb-4">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1.5">
              Author User ID
            </label>
            <div className="relative">
              <User className="w-3.5 h-3.5 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="dhiraj or jdhirajkumar7762@gmail.com"
                className="w-full pl-9 pr-3 py-2.5 bg-black border border-neutral-800 rounded-lg text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-cyan-500 font-mono"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1.5">
              Secure Password
            </label>
            <div className="relative">
              <KeyRound className="w-3.5 h-3.5 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full pl-9 pr-3 py-2.5 bg-black border border-neutral-800 rounded-lg text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-cyan-500 font-mono"
              />
            </div>
          </div>

          {/* Quick Demo Access Hint */}
          <div className="p-3 bg-black/80 border border-neutral-800 rounded-xl text-[11px] text-neutral-400 flex items-center justify-between">
            <div>
              <span className="text-neutral-300 font-medium">Default Credentials:</span>{' '}
              <span className="font-mono text-cyan-400">dhiraj</span> /{' '}
              <span className="font-mono text-cyan-400">dhiraj@123</span>
            </div>
            <button
              type="button"
              onClick={handleQuickFill}
              className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 underline cursor-pointer"
            >
              Fill In
            </button>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer shadow-md shadow-blue-900/40"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Authenticate &amp; Unlock Editor</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
