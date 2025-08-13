'use client';

import { useState } from 'react';
import { InfoIcon, CreditCardIcon } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '../../components/ui/popover';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from '../../components/ui/tooltip';

const retainerPlans = {
  starter: {
    name: 'Starter',
    hours: '16 hours/month',
    price: '$2,625',
    description: 'Good for maintenance, small updates',
    paymentUrl: 'https://buy.stripe.com/7sY3cv7nA1go7gY2ji0Ba07',
    features: [
      '15 hours of dedicated development monthly',
      'Bug fixes and maintenance',
      'Small feature updates',
      'Monthly planning call',
      'Email support',
      'Perfect for maintaining existing applications',
    ],
  },
  growth: {
    name: 'Growth',
    hours: '30 hours/month',
    price: '$5,250',
    description: 'Solid ongoing development work',
    paymentUrl: 'https://buy.stripe.com/cNiaEX4bof7e9p61fe0Ba06',
    features: [
      '30 hours of dedicated development monthly',
      'Feature development & technical improvements',
      'Design system maintenance & updates',
      'Code reviews & architecture guidance',
      'Performance monitoring & optimization',
      'Security updates & maintenance',
      'Priority support & weekly planning calls',
      'Perfect for post-launch iteration and growth',
    ],
  },
  scale: {
    name: 'Scale',
    hours: '50 hours/month',
    price: '$8,750',
    description: 'Heavy development, new features',
    paymentUrl: 'https://buy.stripe.com/7sY6oH23g5wEgRy7DC0Ba08',
    features: [
      '50 hours of dedicated development monthly',
      'Major feature development',
      'System architecture and refactoring',
      'Performance optimization at scale',
      'Dedicated slack channel',
      'Twice-weekly sync calls',
      'Priority emergency support',
      'Perfect for rapid growth and expansion',
    ],
  },
};

export default function RetainerPricingCard({ className = '' }: { className?: string }) {
  const [selectedPlan, setSelectedPlan] = useState<'starter' | 'growth' | 'scale'>('growth');
  const plan = retainerPlans[selectedPlan];

  return (
    <div className={`group h-full cursor-pointer ${className}`}>
      <div className="border-foreground/20 bg-muted/5 group-hover:bg-muted/10 relative flex h-full flex-col border p-6 transition-all duration-300">
        {/* Corner caps that elevate outward on hover */}
        <div className="pointer-events-none absolute inset-0">
          <div className="border-foreground/90 absolute top-0 left-0 h-2 w-2 -translate-x-px -translate-y-px border-t border-l transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1"></div>
          <div className="border-foreground/90 absolute top-0 right-0 h-2 w-2 translate-x-px -translate-y-px border-t border-r transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"></div>
          <div className="border-foreground/90 absolute bottom-0 left-0 h-2 w-2 -translate-x-px translate-y-px border-b border-l transition-all duration-300 group-hover:-translate-x-1 group-hover:translate-y-1"></div>
          <div className="border-foreground/90 absolute right-0 bottom-0 h-2 w-2 translate-x-px translate-y-px border-r border-b transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
        </div>

        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-semibold">Monthly Retainer</h3>
          <div className="flex items-center gap-2">
            {plan.paymentUrl && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={plan.paymentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:bg-muted/20 pointer-events-auto rounded-full p-1 transition-colors"
                    >
                      <CreditCardIcon className="text-muted-foreground h-4 w-4" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Pay securely via Stripe</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
            <Popover>
              <PopoverTrigger asChild>
                <button className="hover:bg-muted/20 pointer-events-auto rounded-full p-1 transition-colors">
                  <InfoIcon className="text-muted-foreground h-4 w-4" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold">{plan.name} Retainer</h4>
                  <p className="text-muted-foreground text-xs">{plan.description}</p>
                  <ul className="text-muted-foreground space-y-1 text-xs">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="bg-muted-foreground mt-2 h-1 w-1 flex-shrink-0 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="bg-muted/10 relative mb-4 flex rounded p-1">
          {/* Sliding indicator */}
          <div
            className="bg-foreground absolute top-1 bottom-1 rounded transition-all duration-300 ease-out"
            style={{
              left:
                selectedPlan === 'starter'
                  ? '4px'
                  : selectedPlan === 'growth'
                    ? 'calc(33.33% + 4px)'
                    : 'calc(66.66% + 4px)',
              width: 'calc(33.33% - 8px)',
            }}
          />

          {/* Tab buttons */}
          {Object.entries(retainerPlans).map(([key, p]) => (
            <button
              key={key}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPlan(key as 'starter' | 'growth' | 'scale');
              }}
              className={`relative z-10 flex-1 rounded px-2 py-1 text-xs font-medium transition-colors duration-300 ${
                selectedPlan === key
                  ? 'text-background'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        {/* Plan Details */}
        <div className="flex-1">
          <div className="mb-1 text-xl font-bold">{plan.price}</div>
          <div className="text-muted-foreground mb-2 text-sm">{plan.hours}</div>
          <p className="text-muted-foreground text-xs">{plan.description}</p>
        </div>
      </div>
    </div>
  );
}
