'use client';

import { InfoIcon, CreditCardIcon } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '../../components/ui/popover';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '../../components/ui/tooltip';

interface PricingCardProps {
  title: string;
  price: string;
  description?: string;
  features: string[];
  className?: string;
  paymentUrl?: string;
}

export default function PricingCard({ 
  title, 
  price, 
  description, 
  features, 
  className = '',
  paymentUrl
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

        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold">{title}</h3>
          <div className="flex items-center gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <button className="pointer-events-auto p-1 hover:bg-muted/20 rounded-full transition-colors">
                  <InfoIcon className="h-4 w-4 text-muted-foreground" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">{title}</h4>
                  {description && (
                    <p className="text-muted-foreground text-xs">
                      {description}
                    </p>
                  )}
                  <ul className="text-muted-foreground space-y-1 text-xs">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="bg-muted-foreground h-1 w-1 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        
        <div className="flex-1">
          <div className="font-bold text-xl">
            {price}
          </div>
          {description && (
            <p className="text-muted-foreground mt-2 text-xs">
              {description}
            </p>
          )}
        </div>

        {/* CTA Button at bottom */}
        {paymentUrl && (
          <div className="mt-4 pt-4">
            <a
              href={paymentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto inline-flex items-center gap-2 bg-foreground text-background px-4 py-2 text-xs font-medium hover:bg-foreground/90 transition-colors no-underline"
            >
              <CreditCardIcon className="h-3 w-3" />
              Buy now
            </a>
          </div>
        )}
      </div>
    </div>
  );
}