'use client'

import { useEffect } from 'react'

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoSrc: string
}

const VideoModal = ({ isOpen, onClose, videoSrc }: VideoModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300 transition-colors"
        >
          Close ×
        </button>
        
        <div className="aspect-video bg-black">
          <video 
            controls 
            autoPlay 
            className="w-full h-full"
            onEnded={onClose}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  )
}

export default VideoModal