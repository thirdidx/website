'use client';

import React from 'react';

interface WorkSampleCardProps {
  size?: 'small' | 'large';
  className?: string;
}

export default function WorkSampleCard({ size = 'small', className = '' }: WorkSampleCardProps) {
  const iconSize = size === 'large' ? 'w-8 h-8' : 'w-6 h-6';

  return (
    <div className={`group aspect-square cursor-pointer ${className}`}>
      <div className="border-foreground/20 bg-muted/30 group-hover:bg-muted/40 relative flex h-full items-center justify-center border transition-all duration-300">
        {/* Corner caps that elevate outward on hover - like raised eyebrows */}
        <div className="pointer-events-none absolute inset-0">
          {/* Top left corner cap */}
          <div className="border-foreground/90 absolute top-0 left-0 h-2 w-2 -translate-x-px -translate-y-px border-t border-l transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1"></div>

          {/* Top right corner cap */}
          <div className="border-foreground/90 absolute top-0 right-0 h-2 w-2 translate-x-px -translate-y-px border-t border-r transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"></div>

          {/* Bottom left corner cap */}
          <div className="border-foreground/90 absolute bottom-0 left-0 h-2 w-2 -translate-x-px translate-y-px border-b border-l transition-all duration-300 group-hover:-translate-x-1 group-hover:translate-y-1"></div>

          {/* Bottom right corner cap */}
          <div className="border-foreground/90 absolute right-0 bottom-0 h-2 w-2 translate-x-px translate-y-px border-r border-b transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
        </div>

        {/* Center icon */}
        <div
          className={`bg-muted group-hover:bg-primary/20 rounded transition-all duration-300 ${iconSize}`}
        ></div>
      </div>
    </div>
  );
}
