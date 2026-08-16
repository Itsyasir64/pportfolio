/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { InteractivePlayground } from './components/InteractivePlayground';
import { Experience } from './components/Experience';
import { GitHubActivity } from './components/GitHubActivity';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [customAvatar, setCustomAvatar] = useState<string | null>(null);

  // Initialize or load saved avatar from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('yasir_portfolio_avatar');
    if (saved) {
      setCustomAvatar(saved);
    }
  }, []);

  const handleUploadAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setCustomAvatar(result);
          try {
            localStorage.setItem('yasir_portfolio_avatar', result);
          } catch {
            // Storage quota warning fallback
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-slate-950 text-slate-100' 
        : 'bg-slate-50 text-slate-900'
    }`}>
      
      {/* Navigation */}
      <Navbar 
        onOpenResume={() => setIsResumeOpen(true)}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Main Content Flow */}
      <main>
        <Hero 
          onOpenResume={() => setIsResumeOpen(true)}
          customAvatar={customAvatar}
          onUploadAvatar={handleUploadAvatar}
          darkMode={darkMode}
        />

        <About darkMode={darkMode} />

        <Skills darkMode={darkMode} />

        <Projects darkMode={darkMode} />

        <InteractivePlayground darkMode={darkMode} />

        <Experience darkMode={darkMode} />

        <GitHubActivity darkMode={darkMode} />

        <Contact darkMode={darkMode} />
      </main>

      {/* Footer */}
      <Footer 
        onOpenResume={() => setIsResumeOpen(true)}
        darkMode={darkMode}
      />

      {/* Interactive Printable Resume Modal */}
      <ResumeModal 
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

    </div>
  );
}
