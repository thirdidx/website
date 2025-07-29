'use client';


interface ProcessCardProps {
  number: string;
  title: string;
  description: string;
  className?: string;
}

export default function ProcessCard({ number, title, description, className = '' }: ProcessCardProps) {
  return (
    <div className={`group cursor-pointer h-full ${className}`}>
      <div className="border-foreground/20 bg-muted/5 group-hover:bg-muted/10 relative border p-6 transition-all duration-300 h-full flex flex-col">
        {/* Corner caps that elevate outward on hover */}
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

        <div className="mb-4 flex items-center gap-3">
          <div className="bg-primary text-background rounded px-2 py-1 font-mono text-xs">
            {number}
          </div>
          <h3 className="font-semibold">{title}</h3>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}