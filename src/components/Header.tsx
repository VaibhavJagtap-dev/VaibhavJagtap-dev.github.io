import React, { useState } from 'react';

export type NavScreen = 'overview' | 'projects-and-systems' | 'experience-and-stack' | 'contact-and-inquiries';

interface HeaderProps {
  currentScreen: NavScreen;
  onNavigate: (screen: NavScreen) => void;
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  onNavigate,
  onOpenResume,
  onOpenTerminal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavScreen; label: string }[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'projects-and-systems', label: 'Projects & Systems' },
    { id: 'experience-and-stack', label: 'Experience & Stack' },
    { id: 'contact-and-inquiries', label: 'Contact & Inquiries' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#131315]/80 backdrop-blur-xl border-b border-[#201f21] shadow-[0_1px_8px_rgba(0,0,0,0.2)]">
      <div className="h-16 max-w-7xl mx-auto px-gutter flex items-center justify-between gap-space-md">
        {/* Logo & Brand Identity */}
        <div
          className="flex items-center gap-space-sm sm:gap-space-md min-w-0 cursor-pointer"
          onClick={() => onNavigate('overview')}
        >
          <div className="w-9 h-9 rounded-lg bg-surface-container-high border border-primary/40 flex items-center justify-center flex-shrink-0 shadow-[0_0_12px_rgba(78,222,163,0.2)]">
            <span className="font-label-mono text-primary font-bold text-[14px] tracking-tight">
              &gt;_
            </span>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-headline-md text-headline-md font-semibold text-on-surface truncate hover:text-primary transition-colors">
              Vaibhav Jagtap
            </span>
            <span className="font-label-mono text-label-mono text-on-surface-variant truncate uppercase">
              Full Stack Developer / Software Engineer
            </span>
          </div>
          <div className="hidden xl:flex items-center gap-space-xs px-space-sm py-0.5 rounded-full bg-surface-container-high border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="font-label-mono text-label-mono text-primary uppercase">
              Available for Q2 Contracts
            </span>
          </div>
        </div>

        {/* Desktop Navigation Bar */}
        <nav
          className="hidden lg:flex items-center gap-space-xs p-1 rounded-xl bg-surface-container-low border border-outline-variant/30"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => {
            const isActive = currentScreen === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`px-space-md py-1.5 rounded-lg font-label-ui text-label-ui transition-all ${
                  isActive
                    ? 'bg-surface-container text-on-surface font-semibold shadow-sm border border-outline-variant/40'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/50'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Controls & External Icons */}
        <div className="flex items-center gap-space-sm flex-shrink-0">
          <div className="hidden sm:flex items-center gap-1 px-space-xs py-1 rounded-lg bg-surface-container border border-outline-variant/20">
            <a
              aria-label="GitHub Repository Profile"
              className="p-1.5 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors"
              href="https://github.com/VaibhavJagtap-dev"
              rel="noreferrer"
              target="_blank"
              title="GitHub Profile"
            >
              <span className="material-symbols-outlined text-[18px]">terminal</span>
            </a>
            <a
              aria-label="LinkedIn Engineering Profile"
              className="p-1.5 rounded-lg text-on-surface-variant hover:text-secondary hover:bg-surface-container-high transition-colors"
              href="https://linkedin.com/in/vaibhav-jagtap-648a02244/"
              rel="noreferrer"
              target="_blank"
              title="LinkedIn Profile"
            >
              <span className="material-symbols-outlined text-[18px]">hub</span>
            </a>
            <button
              aria-label="Quick Launch Interactive Terminal"
              className="p-1.5 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors"
              onClick={onOpenTerminal}
              type="button"
              title="Open Terminal CLI [Cmd+K]"
            >
              <span className="material-symbols-outlined text-[18px]">code</span>
            </button>
          </div>

          <button
            type="button"
            onClick={onOpenResume}
            className="hidden md:flex items-center gap-1 px-2.5 py-1 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary border border-primary/30 font-label-mono text-[11px] transition-colors"
            title="Preview Resume PDF"
          >
            <span className="material-symbols-outlined text-[14px]">description</span>
            <span>Resume</span>
          </button>

          <img
            alt="Profile Avatar"
            className="w-8 h-8 rounded-full object-cover ring-2 ring-primary/40 cursor-pointer hover:ring-primary transition-all"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6MeULHfkUqDhESmVJPujm6rDfR6eE8fmddvSWeTDq4BHrqNQvIId4snE7BI7IcMmkvWuGwVtXJ0TkB7rvuyI4cn-mlCtr673VN-cVAqI_-FwuzL4eEhSDroUXgPpQYDx78yGlTgdTRbr5o8sPCXauIidtXpsxBAwXUvSUb9cMtg86DtetmyIWxK-zGy79srNjE6BG1Ka2Q08dqUEgisnN_nKSYcpSnEJG73pRVd4"
            onClick={() => onNavigate('experience-and-stack')}
            title="Vaibhav Jagtap"
          />

          {/* Mobile menu hamburger toggle */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
          >
            <span className="material-symbols-outlined text-[20px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-low border-b border-outline-variant/30 px-gutter py-space-md flex flex-col gap-space-xs animate-in fade-in duration-200">
          {navItems.map((item) => {
            const isActive = currentScreen === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-space-md py-2.5 rounded-lg font-label-ui text-label-ui transition-all ${
                  isActive
                    ? 'bg-surface-container text-primary font-semibold border-l-2 border-primary'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-space-xs mt-space-xs border-t border-outline-variant/20 flex items-center justify-between">
            <button
              type="button"
              onClick={() => {
                onOpenResume();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-1.5 px-space-md py-1.5 rounded-lg bg-primary-container text-on-primary-container font-label-ui text-label-ui font-semibold"
            >
              <span className="material-symbols-outlined text-[16px]">picture_as_pdf</span>
              <span>View Resume PDF</span>
            </button>
            <button
              type="button"
              onClick={() => {
                onOpenTerminal();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-1.5 px-space-md py-1.5 rounded-lg bg-surface-container text-secondary font-label-mono text-label-mono"
            >
              <span className="material-symbols-outlined text-[16px]">terminal</span>
              <span>CLI [Cmd+K]</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
