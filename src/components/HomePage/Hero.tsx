"use client";

import heroimg from '@/assets/images/hero.png';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroBgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsLoaded(true);

    // Subtle parallax scrolling effect for background pattern
    const handleScroll = () => {
      if (heroBgRef.current) {
        const scrollPosition = window.scrollY;
        heroBgRef.current.style.transform = `translateY(${scrollPosition * 0.15}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full overflow-hidden">
      {/* Hero section with subtle background pattern */}
      <div className="relative bg-[#0a4b5c]">
        {/* Background pattern that moves on scroll */}
        <div 
          ref={heroBgRef}
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23e0f7fa\' fill-opacity=\'0.2\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: '60px 60px',
          }}
        />
        
        <div className="container mx-auto px-4 py-16 md:py-20 lg:py-24">
          {/* Hero content centered */}
          <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="mb-4 text-4xl font-bold leading-tight text-[#e0f7fa] md:text-5xl">
              Transforming Ideas Into 
              <span className="mt-2 block font-light italic text-[#a8e6cf]">Successful Ventures</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-base text-[#b2ebf2]">
              I'm a passionate entrepreneur dedicated to building innovative solutions that create value, 
              solve real problems, and make a positive impact on the world.
            </p>
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <button className="rounded-md bg-[#a8e6cf] px-6 py-3 font-medium text-[#0a4b5c] transition-colors hover:bg-[#88d4b8]">
                View My Projects
              </button>
              <button className="rounded-md border border-[#e0f7fa] px-6 py-3 font-medium text-[#e0f7fa] transition-colors hover:bg-[#e0f7fa]/10">
                Connect With Me
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Entrepreneur photo section */}
      <div className="relative w-full overflow-hidden">
        {/* Subtle dark overlay on sides for framing */}
        <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-[#0a4b5c]/80 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-[#0a4b5c]/80 to-transparent z-10"></div>
        
        <div className={`w-full transition-all duration-1000 delay-300 ${
          isLoaded ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
        }`}>
          <Image
            src={heroimg}
            alt="Entrepreneur Portrait"
            width={1920}
            height={600}
            className="w-full object-cover h-[500px]"
            priority
          />
          
          {/* Very subtle overlay for better text contrast if needed */}
          <div className="absolute inset-0 bg-[#0a4b5c]/10 z-5"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;