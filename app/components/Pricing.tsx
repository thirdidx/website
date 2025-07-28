import PricingCard from './PricingCard';

export default function Pricing() {
  return (
    <section id="pricing" className="flex min-h-screen items-center py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          <div className="col-span-12 md:col-span-4">
            <h2 className="mb-6 text-2xl font-bold">Pricing & Engagement</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Have an idea? Let's scope it out.
            </p>
          </div>

          {/* Bento-style pricing grid */}
          <div className="col-span-12 md:col-span-8">
            <div className="grid gap-4 md:grid-cols-6 md:grid-rows-3">
              {/* Monthly Retainer - single plan */}
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
                  {/* <div className="mb-4 flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="text-muted-foreground text-xs">
                      1 of 2 slots available
                    </span>
                  </div> */}

                  <h3 className="mb-2 font-semibold">Monthly Retainer</h3>
                  <div className="mb-4 text-2xl font-bold">$8,500/month</div>
                  <p className="text-muted-foreground mb-4 text-xs">
                    {/* For startups that need consistent velocity and technical leadership. */}
                    Ideal for teams post-MVP or with growing tech needs.
                  </p>
                  <ul className="text-muted-foreground flex-1 space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="bg-muted-foreground h-1 w-1 rounded-full"></div>
                      <span>Feature design & full-stack development</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="bg-muted-foreground h-1 w-1 rounded-full"></div>
                      <span>UI/UX improvements & maintenance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="bg-muted-foreground h-1 w-1 rounded-full"></div>
                      <span>Technical strategy & architecture guidance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="bg-muted-foreground h-1 w-1 rounded-full"></div>
                      <span>Code reviews & performance optimization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="bg-muted-foreground h-1 w-1 rounded-full"></div>
                      <span>Bug fixes & security updates</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="bg-muted-foreground h-1 w-1 rounded-full"></div>
                      <span>Weekly progress reviews & planning</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="bg-muted-foreground h-1 w-1 rounded-full"></div>
                      <span>Priority support & same-day responses</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* MVP Development */}
              <PricingCard
                title="Web Application"
                price="$12,500–$25,000"
                description="Full-stack SaaS product ready for launch"
                features={[
                  'User authentication & management',
                  'Database design & API development',
                  'Dashboard UI & core features',
                ]}
                className="md:col-span-3"
              />

              {/* Website + CMS */}
              <PricingCard
                //title="Website + Headless Stack"
                title="Headless Marketing Site"
                price="$4,000–$12,000"
                description="Marketing sites with CMS, payments, ecom"
                features={[
                  'Sanity CMS + Stripe payments',
                  'E-commerce & content management',
                  'SEO & performance optimized',
                ]}
                className="md:col-span-3"
              />

              {/* Strategy Session */}
              <PricingCard
                title="Strategy Session"
                price="$700"
                description="Rolls into retainer or project"
                features={['Technical feasibility analysis & complete architecture roadmap']}
                className="md:col-span-2"
              />

              {/* Hourly Consulting */}
              <PricingCard
                title="Hourly Consulting"
                price="$225/hour"
                description="For quick turnarounds, second opinions, or deep technical insight without long-term commitment."
                features={['Architecture review, code audits, and ad-hoc development support']}
                className="md:col-span-2"
              />

              {/* Technical Co-Founder - bottom row */}
              <PricingCard
                title="Technical Co-Founder"
                price="Reduced rate + equity"
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
