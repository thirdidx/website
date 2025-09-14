'use client';

import InquiryModal from './InquiryModal';

/**
 * Pricing component displays three service offerings in a responsive grid
 * 
 * Features:
 * - Three service tiers: web applications, marketing sites, development retainer
 * - Interactive cards with hover effects and corner animations
 * - Integrated inquiry modals for each service
 * - Responsive 3-column grid layout
 * - Detailed feature lists and pricing information
 */

/**
 * Main Pricing component that renders the services section
 */
export default function Pricing() {
  return (
    <section id="pricing" className="py-32 md:py-40">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-mono text-2xl text-balance md:text-4xl">our services</h2>
          <p className="text-muted-foreground font-mono text-sm leading-relaxed text-balance">
            full-stack development and design services for modern web applications
          </p>
        </div>

        {/* Simplified 3-option pricing grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Web Applications */}
          <div className="group h-full">
            <div className="border-foreground/20 bg-muted/5 group-hover:bg-muted/10 relative flex h-full flex-col border p-8 transition-all duration-300">
              {/* Corner caps */}
              <div className="pointer-events-none absolute inset-0">
                <div className="border-foreground/90 absolute top-0 left-0 h-2 w-2 -translate-x-px -translate-y-px border-t border-l transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1"></div>
                <div className="border-foreground/90 absolute top-0 right-0 h-2 w-2 translate-x-px -translate-y-px border-t border-r transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"></div>
                <div className="border-foreground/90 absolute bottom-0 left-0 h-2 w-2 -translate-x-px translate-y-px border-b border-l transition-all duration-300 group-hover:-translate-x-1 group-hover:translate-y-1"></div>
                <div className="border-foreground/90 absolute right-0 bottom-0 h-2 w-2 translate-x-px translate-y-px border-r border-b transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
              </div>

              <h3 className="mb-2 font-mono text-2xl">web applications</h3>
              <div className="mb-4 font-mono text-3xl">$12k+</div>
              <p className="text-muted-foreground mb-6 flex-1 font-mono text-xs">
                complete product development from concept to production. modern web applications
                built with scalable architecture and intuitive user experiences.
              </p>
              <ul className="text-muted-foreground mb-8 space-y-2 font-mono text-xs">
                <li className="flex items-start gap-2">
                  <div className="bg-muted-foreground mt-1.5 h-1 w-1 flex-shrink-0 rounded-full"></div>
                  <span>full-stack development</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-muted-foreground mt-1.5 h-1 w-1 flex-shrink-0 rounded-full"></div>
                  <span>database design & api development</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-muted-foreground mt-1.5 h-1 w-1 flex-shrink-0 rounded-full"></div>
                  <span>ui/ux design & prototyping</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-muted-foreground mt-1.5 h-1 w-1 flex-shrink-0 rounded-full"></div>
                  <span>testing, deployment & hosting setup</span>
                </li>
              </ul>
              <InquiryModal
                title="web applications"
                price="$12k+"
                description="tell us about your web application project"
              />
            </div>
          </div>

          {/* Marketing Sites */}
          <div className="group h-full">
            <div className="border-foreground/20 bg-muted/5 group-hover:bg-muted/10 relative flex h-full flex-col border p-8 transition-all duration-300">
              {/* Corner caps */}
              <div className="pointer-events-none absolute inset-0">
                <div className="border-foreground/90 absolute top-0 left-0 h-2 w-2 -translate-x-px -translate-y-px border-t border-l transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1"></div>
                <div className="border-foreground/90 absolute top-0 right-0 h-2 w-2 translate-x-px -translate-y-px border-t border-r transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"></div>
                <div className="border-foreground/90 absolute bottom-0 left-0 h-2 w-2 -translate-x-px translate-y-px border-b border-l transition-all duration-300 group-hover:-translate-x-1 group-hover:translate-y-1"></div>
                <div className="border-foreground/90 absolute right-0 bottom-0 h-2 w-2 translate-x-px translate-y-px border-r border-b transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
              </div>

              <h3 className="mb-2 font-mono text-2xl">marketing sites</h3>
              <div className="mb-4 font-mono text-3xl">$5k+</div>
              <p className="text-muted-foreground mb-6 flex-1 font-mono text-xs">
                high-performance websites and landing pages built for conversion. modern frameworks
                with content management integration.
              </p>
              <ul className="text-muted-foreground mb-8 space-y-2 font-mono text-xs">
                <li className="flex items-start gap-2">
                  <div className="bg-muted-foreground mt-1.5 h-1 w-1 flex-shrink-0 rounded-full"></div>
                  <span>responsive design & development</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-muted-foreground mt-1.5 h-1 w-1 flex-shrink-0 rounded-full"></div>
                  <span>cms & api integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-muted-foreground mt-1.5 h-1 w-1 flex-shrink-0 rounded-full"></div>
                  <span>seo optimization & performance tuning</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-muted-foreground mt-1.5 h-1 w-1 flex-shrink-0 rounded-full"></div>
                  <span>analytics setup & conversion tracking</span>
                </li>
              </ul>
              <InquiryModal
                title="marketing sites"
                price="$5k+"
                description="tell us about your marketing site needs"
              />
            </div>
          </div>

          {/* Monthly Retainer */}
          <div className="group h-full">
            <div className="border-foreground/20 bg-muted/5 group-hover:bg-muted/10 relative flex h-full flex-col border p-8 transition-all duration-300">
              {/* Corner caps */}
              <div className="pointer-events-none absolute inset-0">
                <div className="border-foreground/90 absolute top-0 left-0 h-2 w-2 -translate-x-px -translate-y-px border-t border-l transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1"></div>
                <div className="border-foreground/90 absolute top-0 right-0 h-2 w-2 translate-x-px -translate-y-px border-t border-r transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"></div>
                <div className="border-foreground/90 absolute bottom-0 left-0 h-2 w-2 -translate-x-px translate-y-px border-b border-l transition-all duration-300 group-hover:-translate-x-1 group-hover:translate-y-1"></div>
                <div className="border-foreground/90 absolute right-0 bottom-0 h-2 w-2 translate-x-px translate-y-px border-r border-b transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
              </div>

              <h3 className="mb-2 font-mono text-2xl">development retainer</h3>
              <div className="mb-4 font-mono text-3xl">$10k+</div>
              <p className="text-muted-foreground mb-6 flex-1 font-mono text-xs">
                ongoing development partnership for continuous product evolution. dedicated
                technical resources for your growing needs.
              </p>
              <ul className="text-muted-foreground mb-8 space-y-2 font-mono text-xs">
                <li className="flex items-start gap-2">
                  <div className="bg-muted-foreground mt-1.5 h-1 w-1 flex-shrink-0 rounded-full"></div>
                  <span>priority development & bug fixes</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-muted-foreground mt-1.5 h-1 w-1 flex-shrink-0 rounded-full"></div>
                  <span>feature development & technical consulting</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-muted-foreground mt-1.5 h-1 w-1 flex-shrink-0 rounded-full"></div>
                  <span>performance optimization & scaling</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-muted-foreground mt-1.5 h-1 w-1 flex-shrink-0 rounded-full"></div>
                  <span>flexible monthly hour allocation</span>
                </li>
              </ul>
              <InquiryModal
                title="development retainer"
                price="$10k+/month"
                description="let's discuss your ongoing development needs"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
