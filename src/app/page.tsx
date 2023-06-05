"use client"
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navbar';
import HeroSection from './components/HeroSection';
import Visions from './components/Visions';
import Timeline from './components/Timeline';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
import Offerings from './components/Offerings/Offerings';

export default function Home() {
  const [theme, setTheme] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const currentTheme = localStorage.getItem('Theme') || 'light';
    setTheme(currentTheme);
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
    setIsLoading(false); // Finished initial render
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('Theme', theme);
  }, [theme]);

  const themeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  if (isLoading) {
    return <div>...Loading</div>; // or you can render a loading indicator
  }

  return (
    <main className={theme === 'dark' ? 'dark bg-black text-white' : ''}>
      <Navigation theme={themeSwitch} isExpanded={setIsExpanded} />
      
      <div className={`page-content ${isExpanded ? 'hidden' : ''}`}>
        <HeroSection />
        <Offerings />
        <Timeline />
        <Visions />
        <Services />
        <ContactForm />
      </div>
    </main>
  );
}
