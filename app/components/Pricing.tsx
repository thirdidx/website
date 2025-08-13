import PricingCard from './PricingCard';
import RetainerPricingCard from './RetainerPricingCard';

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 md:py-40">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-2xl font-bold">Pricing &amp; Engagement</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Have an idea? Let's scope it out.
          </p>
          <a href="#contact" className="mt-4 inline-block text-xs font-semibold uppercase">
            Get in Touch
          </a>
        </div>

        {/* Bento-style pricing grid */}
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

              <RetainerPricingCard
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
                price="$175/hour"
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
    </section>
  );
}
