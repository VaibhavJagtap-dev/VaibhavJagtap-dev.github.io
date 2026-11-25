import React, { useState, useEffect } from 'react';
import { Header, NavScreen } from './components/Header.js';
import { Footer } from './components/Footer.js';
import { TerminalModal } from './components/TerminalModal.js';
import { ResumeModal } from './components/ResumeModal.js';
import { OverviewScreen } from './screens/OverviewScreen.js';
import { ProjectsScreen } from './screens/ProjectsScreen.js';
import { ExperienceScreen } from './screens/ExperienceScreen.js';
import { ContactScreen } from './screens/ContactScreen.js';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<NavScreen>('overview');
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Sync with window.location.hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (
        hash === 'overview' ||
        hash === 'projects-and-systems' ||
        hash === 'experience-and-stack' ||
        hash === 'contact-and-inquiries'
      ) {
        setCurrentScreen(hash as NavScreen);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Global keydown listener for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navigateTo = (screen: NavScreen) => {
    setCurrentScreen(screen);
    window.location.hash = screen;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-background min-h-screen font-body-md text-on-surface antialiased flex flex-col selection:bg-primary-container selection:text-on-primary-container">
      {/* Fixed Navigation Header */}
      <Header
        currentScreen={currentScreen}
        onNavigate={navigateTo}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Main Viewport Container */}
      <main className="w-full pt-16 bg-surface min-h-[calc(100vh-5rem)] flex-1 flex flex-col">
        {currentScreen === 'overview' && (
          <OverviewScreen
            onNavigate={navigateTo}
            onOpenResume={() => setIsResumeOpen(true)}
            onOpenTerminal={() => setIsTerminalOpen(true)}
          />
        )}

        {currentScreen === 'projects-and-systems' && (
          <ProjectsScreen
            onNavigate={navigateTo}
            onOpenResume={() => setIsResumeOpen(true)}
          />
        )}

        {currentScreen === 'experience-and-stack' && (
          <ExperienceScreen
            onNavigate={navigateTo}
            onOpenResume={() => setIsResumeOpen(true)}
          />
        )}

        {currentScreen === 'contact-and-inquiries' && (
          <ContactScreen onOpenResume={() => setIsResumeOpen(true)} />
        )}
      </main>

      {/* Footer */}
      <Footer onOpenTerminal={() => setIsTerminalOpen(true)} />

      {/* Interactive CLI Terminal Modal */}
      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onNavigate={navigateTo}
      />

      {/* Interactive High-Fidelity Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
