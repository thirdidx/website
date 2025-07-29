'use client';


interface PricingCardProps {
  title: string;
  price: string;
  description?: string;
  features: string[];
  className?: string;
}

export default function PricingCard({ 
  title, 
  price, 
  description, 
  features, 
  className = ''
}: PricingCardProps) {
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

        <h3 className="mb-2 font-semibold">{title}</h3>
        <div className="mb-4 font-bold text-xl">
          {price}
        </div>
        {description && (
          <p className="text-muted-foreground mb-4 text-xs">
            {description}
          </p>
        )}
        <ul className="text-muted-foreground space-y-2 text-sm flex-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              {features.length > 1 && <div className="bg-muted-foreground h-1 w-1 rounded-full"></div>}
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}