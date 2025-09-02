// components/HomePage/Hero.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import VideoModal from '@/components/Video/Videomodal'

const HeroSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  const handleVideoPlay = () => {
    setIsVideoOpen(true)
  }

  return (
    <>
      <section className="mb-16">
        <div className="flex flex-col md:flex-row items-start gap-12">
          {/* Profile Picture with Video Play Button */}
          <div className="relative">
            <div className="w-80 h-80 md:w-96 md:h-96 bg-gray-200 rounded-full overflow-hidden border-4 border-[#0a4b5c] shadow-xl">
              <Image
                src="/images/sheikh-nabeel.jpg"
                alt="Sheikh Nabeel"
                width={384}
                height={384}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            
            {/* Video Play Button */}
            <button 
              onClick={handleVideoPlay}
              className="absolute -bottom-4 -right-4 bg-[#a8e6cf] rounded-full p-5 hover:bg-[#8fdbb6] transition-all shadow-lg hover:scale-110"
            >
              <svg className="w-10 h-10 text-[#0a4b5c]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>

          {/* Name and Title */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-bold mb-2 text-[#e0f7fa]">
              Entrepreneur & Digital Growth Expert
            </h1>
            <h2 className="text-3xl md:text-5xl font-light mb-6 text-[#a8e6cf]">SHEIKH NABEEL</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl uppercase tracking-wider text-[#e0f7fa] mb-2">
                SERIAL ENTREPRENEUR, FOUNDER & CEO OF
              </p>
              <p className="text-xl uppercase tracking-wider text-[#e0f7fa] mb-2">
                EUROSHUB, BUSINESS STRATEGIST,
              </p>
              <p className="text-xl uppercase tracking-wider text-[#e0f7fa]">
                & DIGITAL TRANSFORMATION EXPERT
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal 
        isOpen={isVideoOpen} 
        onClose={() => setIsVideoOpen(false)} 
        videoSrc="/videos/intro-video.mp4"
      />
    </>
  )
}

export default HeroSection
