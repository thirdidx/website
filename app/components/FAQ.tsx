import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQItemProps {
  value: string;
  question: string;
  answer: string | React.ReactNode;
}

function FAQItem({ value, question, answer }: FAQItemProps) {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger className="font-display text-left text-xl">{question}</AccordionTrigger>
      <AccordionContent className="text-muted-foreground pr-4 font-mono text-sm">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-32 md:py-40">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-8 text-center">
          <h2 className="mb-4 font-mono text-2xl md:text-4xl">FAQ</h2>
          <p className="text-muted-foreground mx-auto max-w-lg text-sm leading-relaxed">
            Quick answers to common questions. Don't see yours? Just ask.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            <FAQItem
              value="item-1"
              question="What's your development process?"
              answer="We start with strategic discovery to understand your goals, then move into weekly sprints with regular demos. You'll see progress every week and can provide feedback throughout the build."
            />
            <FAQItem
              value="item-2"
              question="What technologies do you use?"
              answer={
                <>
                  Frontend: React, Next.js, TypeScript, Tailwind CSS, Framer Motion, GSAP
                  <br />
                  Backend: Node.js, Python, PostgreSQL, Supabase, Redis
                  <br />
                  Design: Figma, Adobe Creative Suite, Photoshop, Lightroom
                  <br />
                  CMS: Sanity, Contentful, Strapi
                  <br />
                  E-commerce: Stripe, Shopify, BigCommerce
                  <br />
                  Infrastructure: Vercel, AWS, Docker, CI/CD
                  <br />
                  Analytics: Google Analytics, Mixpanel, PostHog
                  <br />
                  AI Tools: Claude Code, Midjourney, ChatGPT
                  <br />
                </>
              }
            />
            <FAQItem
              value="item-3"
              question="How do you handle project timelines and budgets?"
              answer="Projects are scoped with fixed timelines and budgets upfront. Web apps typically take 6-10 weeks, marketing sites 3-5 weeks. We include a 20% buffer for scope adjustments and stick to our commitments."
            />
            <FAQItem
              value="item-4"
              question="Do you provide ongoing support?"
              answer="Yes, through monthly retainer agreements starting at $10k/month. This covers bug fixes, feature additions, performance optimization, and strategic consulting as your business grows."
            />
            <FAQItem
              value="item-5"
              question="Can you work with our existing team?"
              answer="Absolutely. We can integrate with your internal team, provide technical leadership, or work independently based on your preferences. We're experienced in collaborative environments."
            />
            <FAQItem
              value="item-6"
              question="What makes you different from other agencies?"
              answer="We're not an agency—we're a strategic consultancy. This means deeper business understanding, technical leadership, and long-term partnerships rather than just project delivery."
            />
            <FAQItem
              value="item-7"
              question="Do you handle design and development?"
              answer="Yes, we offer full-service capability from strategy to design to development. We can also work with your existing designs or collaborate with your design team."
            />
            <FAQItem
              value="item-8"
              question="Who's behind thirdindex?"
              answer={
                <>
                  Michael Ciccarelli leads the consultancy. He's a software engineer and designer
                  with 20+ years building for the web, from startups to enterprise. More at{' '}
                  <a
                    href="https://hael.cc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground underline transition-colors"
                  >
                    hael.cc
                  </a>
                  .
                </>
              }
            />
          </Accordion>
        </div>
      </div>
    </section>
  );
}
