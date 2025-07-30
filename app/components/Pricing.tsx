import PricingCard from './PricingCard';

export default function Pricing() {
  return (
    <section id="pricing" className="flex min-h-screen items-center py-16 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          <div className="col-span-12 flex flex-col gap-y-4 md:col-span-4">
            <div>
              <h2 className="mb-6 text-2xl font-bold">Pricing &amp; Engagement</h2>
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
                title="Web Applications"
                price="$12k–$35k | 6-10 weeks"
                paymentUrl="https://buy.stripe.com/aFafZh7nA4sA44M7DC0Ba01"
                description="Complete product from concept to launch"
                features={[
                  'Full-stack development',
                  'Design-driven user interfaces',
                  'Dashboard UI & core features',
                  'User authentication & management',
                  'Database design & API development',
                  'Deployment & hosting setup',
                ]}
                className="md:col-span-3"
              />

              <PricingCard
                title="Monthly Retainer"
                price="$5,500/month | ~25 hours"
                paymentUrl="https://buy.stripe.com/3cI6oH37k7EMeJq9LK0Ba03"
                description="Ongoing development & optimization"
                features={[
                  'Includes ~25 hours/month of dedicated development',
                  'Feature development & technical improvements',
                  'Design system maintenance & updates',
                  'Code reviews & architecture guidance',
                  'Performance monitoring & optimization',
                  'Security updates & maintenance',
                  'Priority support & weekly planning calls',
                  'Perfect for post-launch iteration and growth',
                ]}
                className="md:col-span-3 md:row-span-2"
              />

              <PricingCard
                title="Marketing Sites"
                price="$5k–$15k | 3-5 weeks"
                paymentUrl="https://buy.stripe.com/8x24gzeQ29MU44Mf640Ba02"
                description="High-converting sites with CMS"
                features={[
                  'Product launch pages & campaign microsites',
                  'Publishing platforms & portfolio sites',
                  'Headless CMS integration (Sanity, Contentful)',
                  'E-commerce & payment systems (Stripe, Shopify)',
                  'SEO optimization & performance tuning',
                  'Analytics & conversion tracking',
                ]}
                className="md:col-span-3"
              />

              <PricingCard
                title="Strategy Session"
                price="$700"
                paymentUrl="https://buy.stripe.com/8x214n23g0ck0SAaPO0Ba00"
                description="Applied as credit toward projects over $10k"
                features={[
                  'Technical feasibility analysis',
                  'Complete architecture roadmap',
                  'Timeline & budget estimation',
                  'Technology stack recommendations',
                ]}
                className="md:col-span-2"
              />

              <PricingCard
                title="Technical Consulting"
                price="$225/hour"
                description="Architecture reviews & guidance"
                features={[
                  'Frontend architecture & development',
                  'Design systems & component libraries',
                  'Web3/blockchain integration consulting',
                  'Performance optimization and scaling',
                ]}
                className="md:col-span-2"
              />

              <PricingCard
                title="Equity Partnerships"
                price="For early-stage startups"
                description="Reduced costs + 2-5% equity stake"
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
