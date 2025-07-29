'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface WorkSampleCardProps {
  size?: 'small' | 'large';
  className?: string;
  imageSrc?: string;
  alt?: string;
  projectName?: string;
  projectDescription?: string;
  liveUrl?: string;
}

export default function WorkSampleCard({ 
  size = 'small', 
  className = '', 
  imageSrc, 
  alt = 'Work sample',
  projectName,
  projectDescription,
  liveUrl
}: WorkSampleCardProps) {
  const iconSize = size === 'large' ? 'w-8 h-8' : 'w-6 h-6';

  const handleClick = () => {
    if (liveUrl) {
      if (liveUrl.startsWith('#')) {
        // Handle anchor links (smooth scroll to section)
        const element = document.querySelector(liveUrl);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Handle external URLs (open in new tab)
        window.open(liveUrl, '_blank');
      }
    }
  };

  return (
    <div className={`group aspect-square cursor-pointer ${className}`} onClick={handleClick}>
      <div className="border-foreground/20 bg-black relative flex h-full items-center justify-center border transition-all duration-300 overflow-hidden">
        {/* Corner caps that elevate outward on hover - like raised eyebrows */}
        <div className="pointer-events-none absolute inset-0 z-20">
          {/* Top left corner cap */}
          <div className="border-foreground/90 absolute top-0 left-0 h-2 w-2 -translate-x-px -translate-y-px border-t border-l transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1"></div>

          {/* Top right corner cap */}
          <div className="border-foreground/90 absolute top-0 right-0 h-2 w-2 translate-x-px -translate-y-px border-t border-r transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"></div>

          {/* Bottom left corner cap */}
          <div className="border-foreground/90 absolute bottom-0 left-0 h-2 w-2 -translate-x-px translate-y-px border-b border-l transition-all duration-300 group-hover:-translate-x-1 group-hover:translate-y-1"></div>

          {/* Bottom right corner cap */}
          <div className="border-foreground/90 absolute right-0 bottom-0 h-2 w-2 translate-x-px translate-y-px border-r border-b transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
        </div>

        {/* Image or placeholder icon */}
        {imageSrc ? (
          <div className="relative w-full h-full z-10">
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={imageSrc}
                alt={alt}
                fill
                className="object-cover object-left-top transition-opacity duration-300 group-hover:opacity-30"
              />
              
              {/* Hover overlay with project details */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 z-10 bg-black/50">
                {projectName && (
                  <h3 className={`font-mono font-bold text-white text-center mb-2 ${size === 'large' ? 'text-lg' : 'text-sm'}`}>
                    {projectName}
                  </h3>
                )}
                {projectDescription && size === 'large' && (
                  <p className="text-xs text-white/80 text-center mb-4 line-clamp-3">
                    {projectDescription}
                  </p>
                )}
                {liveUrl && (
                  <div className="flex items-center gap-2 text-white">
                    {liveUrl.startsWith('#') ? (
                      <svg className={`${size === 'large' ? 'w-4 h-4' : 'w-3 h-3'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    ) : (
                      <svg className={`${size === 'large' ? 'w-4 h-4' : 'w-3 h-3'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    )}
                    <span className={`font-mono ${size === 'large' ? 'text-xs' : 'text-[10px]'}`}>
                      {liveUrl.startsWith('#') ? 'Get in Touch' : 'View Live'}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="relative w-full h-full z-10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
            <div className="flex flex-col items-center justify-center text-center">
              <ArrowRight className={`${size === 'large' ? 'w-12 h-12' : 'w-8 h-8'} text-muted-foreground group-hover:text-white transition-all duration-300 mb-2 group-hover:rotate-90`} />
              <span className={`font-mono font-bold text-muted-foreground group-hover:text-white transition-colors duration-300 ${size === 'large' ? 'text-sm' : 'text-xs'}`}>
                Start Your Project
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
