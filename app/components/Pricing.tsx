import PricingCard from './PricingCard';

export default function Pricing() {
  return (
    <section id="pricing" className="flex min-h-screen items-center py-16 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          <div className="col-span-12 flex flex-col gap-y-4 md:col-span-4">
            <div>
              <h2 className="mb-6 text-2xl font-bold">Pricing & Engagement</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Have an idea? Let's scope it out.
              </p>
            </div>
            <a href="#contact" className="text-xs font-semibold uppercase">
              Get in Touch
            </a>
          </div>

          {/* Bento-style pricing grid */}
          <div className="col-span-12 md:col-span-8">
            <div className="grid gap-4 md:grid-cols-6 md:grid-rows-3">
              <PricingCard
                title="Custom Web Apps"
                price="$10k–$40k+"
                description="Complete digital product from concept to launch. 6-10 week timeline."
                features={[
                  'Modern frontend architecture (Next.js, React)',
                  'Design-driven user interfaces',
                  'Dashboard UI & core features',
                  'User authentication & management',
                  'Database design & API development',
                  'Deployment & hosting setup',
                ]}
                className="md:col-span-3"
              />

              <div className="group h-full cursor-pointer md:col-span-3 md:row-span-2">
                <div className="border-foreground/20 bg-muted/5 group-hover:bg-muted/10 relative flex h-full flex-col border p-6 transition-all duration-300">
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

                  {/* Availability indicator */}
                  <div className="mb-4 flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="text-muted-foreground text-xs">1 of 2 slots available</span>
                  </div>

                  <h3 className="mb-2 font-semibold">Monthly Development Retainer</h3>
                  <div className="mb-4 text-2xl font-bold">$5,500/month</div>
                  <p className="text-muted-foreground mb-4 text-xs text-balance">
                    For teams needing continuous development support. Many clients start with a
                    scoped project, then move to a retainer for ongoing growth.
                  </p>
                  <ul className="text-muted-foreground flex-1 space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="bg-muted-foreground h-1 w-1 rounded-full"></div>
                      <span>Includes ~25 hours/month of dedicated development</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="bg-muted-foreground h-1 w-1 rounded-full"></div>
                      <span>Feature development & technical improvements</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="bg-muted-foreground h-1 w-1 rounded-full"></div>
                      <span>Design system maintenance & updates</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="bg-muted-foreground h-1 w-1 rounded-full"></div>
                      <span>Code reviews & architecture guidance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="bg-muted-foreground h-1 w-1 rounded-full"></div>
                      <span>Performance monitoring & optimization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="bg-muted-foreground h-1 w-1 rounded-full"></div>
                      <span>Security updates & maintenance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="bg-muted-foreground h-1 w-1 rounded-full"></div>
                      <span>Priority support & weekly planning calls</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="bg-muted-foreground h-1 w-1 rounded-full"></div>
                      <span>Perfect for post-launch iteration and growth</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Website + CMS */}
              <PricingCard
                title="Marketing & E-commerce Sites"
                price="$5k–$20k"
                description="High-converting sites with CMS integration. 3-5 week timeline."
                features={[
                  'Product launch pages & campaign microsites',
                  'Publishing platforms & portfolio sites',
                  'Headless CMS (Sanity) + Stripe payments',
                  'E-commerce storefronts (Shopify, BigCommerce, etc.)',
                  'Affiliate marketing & lead generation',
                  'SEO, LLM, & performance optimized',
                ]}
                className="md:col-span-3"
              />

              {/* Strategy Session */}
              <PricingCard
                title="Strategy & Scoping Session"
                price="$700"
                description="Applied as credit toward any project over $10,000"
                features={[
                  'Technical feasibility analysis',
                  'Complete architecture roadmap',
                  'Timeline & budget estimation',
                  'Technology stack recommendations',
                ]}
                className="md:col-span-2"
              />

              {/* Hourly Consulting */}
              <PricingCard
                title="Technical Consulting"
                price="$225/hour"
                description="For quick reviews, audits, or strategic guidance"
                features={[
                  'Frontend architecture & development',
                  'Design systems & component libraries',
                  'Web3/blockchain integration consulting',
                  'Performance optimization and scaling',
                ]}
                className="md:col-span-2"
              />

              {/* Co-Founder Partnerships */}
              <PricingCard
                title="Co-Founder Partnerships"
                price="Reduced rate + equity"
                description="Equity partnership for early-stage startups"
                features={['Significantly reduced costs + 2-5% equity for long-term partnership']}
                className="md:col-span-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
