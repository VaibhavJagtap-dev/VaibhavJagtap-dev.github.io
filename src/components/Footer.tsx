import React from 'react';

interface FooterProps {
  onOpenTerminal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerminal }) => {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/20 mt-auto">
      <div className="max-w-7xl mx-auto px-gutter py-space-xl flex flex-col md:flex-row items-center justify-between gap-space-lg">
        {/* Left Side: Copyright & Built-with info */}
        <div className="flex flex-col items-center md:items-start gap-space-xs">
          <span className="font-label-mono text-label-mono text-on-surface-variant">
            © 2024 Vaibhav Jagtap. All rights reserved.
          </span>
          <div className="flex items-center gap-space-xs font-code-inline text-code-inline text-outline">
            <span className="material-symbols-outlined text-[14px] text-secondary">memory</span>
            <span>Built with Next.js 14, React, Tailwind, TypeScript &amp; Postgres</span>
          </div>
        </div>

        {/* Right Side: Online Status & Terminal Trigger */}
        <div className="flex flex-wrap items-center justify-center gap-space-md">
          <div className="flex items-center gap-space-xs px-space-sm py-1 rounded bg-surface-container-low font-label-mono text-label-mono text-on-surface-variant border border-outline-variant/30">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            <span>UTC+05:30 (IST) • ONLINE</span>
          </div>
          <button
            className="flex items-center gap-space-xs px-space-md py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high border border-outline-variant/30 font-label-mono text-label-mono text-on-surface transition-all hover:border-primary/50 cursor-pointer shadow-sm"
            type="button"
            onClick={onOpenTerminal}
            aria-label="Quick Launch Interactive Terminal"
          >
            <span className="material-symbols-outlined text-[16px] text-primary">terminal</span>
            <span>Quick Launch [Cmd+K]</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
