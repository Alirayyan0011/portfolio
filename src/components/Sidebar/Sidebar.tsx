// components/Sidebar/Sidebar.tsx
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    if (isMobile) setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger for mobile */}
      {isMobile && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-4 left-4 z-50 p-2 rounded-md bg-black text-white lg:hidden"
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      )}

      {/* Overlay for mobile */}
      {isMobile && isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-black text-white z-40 transition-all duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:static lg:z-auto`}
        style={{ width: isOpen ? '300px' : '0px' }}
      >
        <div className="h-full flex flex-col overflow-y-auto">
          {/* Logo */}
          <div className={`p-6 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
            <Link href="/" onClick={handleLinkClick}>
              <Image
                src="/images/logo.png"
                alt="Entrepreneur Portfolio Logo"
                width={200}
                height={70}
                className="transition-all duration-300"
                priority
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6">
            <ul className="space-y-5">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/services", label: "Services" },
                { href: "/testimonials", label: "Testimonials" },
                { href: "/contact", label: "Contact" },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="block px-4 py-3 rounded-lg text-white hover:bg-white/10 hover:text-[#a8e6cf] transition-colors duration-300 text-xl font-semibold"
                    onClick={handleLinkClick}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer Socials */}
         {/* Footer Socials */}
<div className="p-6 border-t border-white/20">
  <div className="grid grid-cols-4 gap-4 justify-items-center mb-6">
    {/* Facebook */}
    <a href="#" className="hover:text-blue-500 transition-colors">
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12a10 10 0 10-11.6 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.2l-.4 3h-1.8v7A10 10 0 0022 12z"/></svg>
    </a>
    {/* Instagram */}
    <a href="#" className="hover:text-pink-500 transition-colors">
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.9a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0z"/></svg>
    </a>
    {/* LinkedIn */}
    <a href="#" className="hover:text-blue-400 transition-colors">
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v15H0V8zm7.5 0h4.8v2h.1c.7-1.3 2.5-2.7 5.1-2.7 5.4 0 6.4 3.6 6.4 8.3V23h-5v-7.7c0-1.9-.03-4.3-2.7-4.3-2.7 0-3.1 2.1-3.1 4.2V23h-5V8z"/></svg>
    </a>
    {/* Pinterest */}
    <a href="#" className="hover:text-red-600 transition-colors">
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2C6.5 2 2 6.48 2 12c0 4.1 2.53 7.61 6.1 9.1-.08-.77-.15-1.96.03-2.8.16-.68 1.06-4.53 1.06-4.53s-.27-.54-.27-1.34c0-1.26.73-2.2 1.64-2.2.77 0 1.15.58 1.15 1.27 0 .77-.49 1.93-.75 3-.21.89.45 1.61 1.33 1.61 1.6 0 2.83-1.69 2.83-4.13 0-2.16-1.55-3.68-3.76-3.68-2.56 0-4.07 1.92-4.07 3.9 0 .77.3 1.59.68 2.04.08.1.09.2.07.31-.07.34-.23 1.09-.26 1.24-.04.16-.13.2-.3.12-1.13-.53-1.83-2.2-1.83-3.54 0-2.88 2.09-5.52 6.02-5.52 3.16 0 5.62 2.25 5.62 5.27 0 3.14-1.98 5.67-4.73 5.67-.92 0-1.78-.48-2.07-1.04l-.56 2.13c-.2.77-.75 1.75-1.12 2.34.85.26 1.74.4 2.67.4 5.54 0 10.04-4.48 10.04-10S17.58 2 12.04 2z"/></svg>
    </a>
    {/* YouTube */}
    <a href="#" className="hover:text-red-500 transition-colors">
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.6 3.2H4.4C2.5 3.2 1 4.7 1 6.6v10.8c0 1.9 1.5 3.4 3.4 3.4h15.2c1.9 0 3.4-1.5 3.4-3.4V6.6c0-1.9-1.5-3.4-3.4-3.4zM10 15.5v-7l6 3.5-6 3.5z"/></svg>
    </a>
    {/* Snapchat */}
    <a href="#" className="hover:text-yellow-400 transition-colors">
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C7.03 2 3 6.03 3 11c0 3.84 2.42 7.09 5.82 8.39-.08-.62-.15-1.47.03-2.1.16-.5 1.06-3.34 1.06-3.34s-.27-.4-.27-.99c0-.93.73-1.62 1.64-1.62.77 0 1.15.42 1.15.93 0 .56-.49 1.41-.75 2.2-.21.65.45 1.17 1.33 1.17 1.6 0 2.83-1.23 2.83-3.01 0-1.56-1.55-2.66-3.76-2.66-2.56 0-4.07 1.39-4.07 2.82 0 .56.3 1.15.68 1.48.08.07.09.15.07.23-.07.25-.23.79-.26.9-.04.12-.13.14-.3.08-1.13-.39-1.83-1.59-1.83-2.56 0-2.08 2.09-3.98 6.02-3.98 3.16 0 5.62 1.62 5.62 3.82 0 2.28-1.98 4.12-4.73 4.12-.92 0-1.78-.35-2.07-.76l-.56 1.54c-.2.56-.75 1.26-1.12 1.68.85.18 1.74.28 2.67.28 4.97 0 9-4.03 9-9S16.97 2 12 2z"/></svg>
    </a>
    {/* Discord */}
    <a href="#" className="hover:text-indigo-400 transition-colors">
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 0H4C1.8 0 0 1.8 0 4v16c0 2.2 1.8 4 4 4h14l-1.3-4.6 3.3 3c.8-.1 1.5-.8 1.5-1.7V4c0-2.2-1.8-4-4-4zM8.5 15c-.8 0-1.5-.7-1.5-1.5S7.7 12 8.5 12s1.5.7 1.5 1.5S9.3 15 8.5 15zm7 0c-.8 0-1.5-.7-1.5-1.5S14.7 12 15.5 12s1.5.7 1.5 1.5S16.3 15 15.5 15z"/></svg>
    </a>
    {/* TikTok */}
    <a href="#" className="hover:text-pink-400 transition-colors">
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2zm2.6 7.2c.5.3 1.2.5 1.9.5V8c-.3-.1-.6-.1-.9-.3s-.6-.5-.8-.8h-1.1v8.6c-.1.3-.4.5-.8.5-1.1 0-2-.9-2-2 0-.5.2-1 .5-1.3.3-.3.7-.5 1.1-.5h.3V9.7c-.7 0-1.3.2-1.9.6-.6.4-1 .9-1.3 1.5-.3.6-.5 1.3-.5 2.1 0 2.4 1.9 4.4 4.3 4.4 1 0 2-.3 2.8-1 .8-.6 1.3-1.5 1.5-2.5.1-.6.1-1.2.1-1.7v-2.9c-.6-.2-1.2-.4-1.7-.6z"/></svg>
    </a>
    {/* Threads */}
    <a href="#" className="hover:text-white transition-colors">
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm2.8 17.1c-.9.6-2 .9-3.2.9-2.7 0-4.9-2.2-4.9-4.9 0-2.6 2.1-4.8 4.8-4.9 1.3 0 2.6.3 3.6.9l.8-1.3c-1.3-.8-2.8-1.2-4.4-1.2-3.8 0-6.9 3.1-6.9 6.9S7.9 20.4 11.7 20.4c1.6 0 3.1-.5 4.3-1.3l-.8-1.3z"/></svg>
    </a>
    {/* GitHub */}
    <a href="#" className="hover:text-gray-400 transition-colors">
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.6.5.5 5.6.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.6 1.1 1.6 1.1 1 1.6 2.7 1.1 3.3.9.1-.7.4-1.1.7-1.3-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.4 1.2 1-.3 2-.4 3.1-.4s2.1.1 3.1.4c2.4-1.5 3.4-1.2 3.4-1.2.6 1.7.2 3 .1 3.3.7.8 1.2 1.9 1.2 3.2 0 4.4-2.8 5.3-5.4 5.6.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A10.8 10.8 0 0023.5 12C23.5 5.6 18.4.5 12 .5z"/></svg>
    </a>
    {/* Twitter/X */}
    <a href="#" className="hover:text-sky-400 transition-colors">
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23 4.6c-.8.3-1.7.5-2.6.6a4.5 4.5 0 002-2.5c-.9.5-1.9.8-2.9 1a4.5 4.5 0 00-7.7 4c-3.8-.2-7.2-2-9.4-4.7a4.5 4.5 0 001.4 6 4.5 4.5 0 01-2-.5v.1a4.5 4.5 0 003.6 4.4c-.5.1-1 .2-1.5.2-.4 0-.7 0-1-.1a4.5 4.5 0 004.2 3.1A9 9 0 012 19.6 12.7 12.7 0 008.3 21c7.5 0 11.6-6.2 11.6-11.6v-.5a8.4 8.4 0 002-2.3z"/></svg>
    </a>
  </div>
  <p className="text-sm text-center text-gray-400">
    © {new Date().getFullYear()} Entrepreneur Portfolio
  </p>
</div>

        </div>
      </aside>
    </>
  );
};

export default Sidebar;
