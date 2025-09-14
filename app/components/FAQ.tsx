import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

/**
 * FAQ component displays frequently asked questions in an accordion format
 * 
 * Features:
 * - Expandable accordion with single-item selection
 * - Covers development process, technologies, pricing, and company info
 * - Rich content with links and formatted lists
 * - Responsive layout with centered content
 */

interface FAQItemProps {
  /** Unique identifier for the accordion item */
  value: string;
  /** Question text to display in the trigger */
  question: string;
  /** Answer content - can be string or JSX for rich content */
  answer: string | React.ReactNode;
}

/**
 * Individual FAQ item component
 */
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

/**
 * Main FAQ component that renders the questions and answers section
 */
export default function FAQ() {
  return (
    <section id="faq" className="py-32 md:py-40">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-8 text-center">
          <h2 className="mb-4 font-mono text-2xl md:text-4xl">faq</h2>
          <p className="text-muted-foreground mx-auto max-w-lg text-sm leading-relaxed">
            quick answers to common questions. don't see yours? just ask.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            <FAQItem
              value="item-1"
              question="what's your development process?"
              answer="we start with strategic discovery to understand your goals, then move into weekly sprints with regular demos. you'll see progress every week and can provide feedback throughout the build."
            />
            <FAQItem
              value="item-2"
              question="what technologies do you use?"
              answer={
                <>
                  frontend: react, next.js, typescript, tailwind css, framer motion, gsap
                  <br />
                  backend: node.js, python, postgresql, supabase, redis
                  <br />
                  design: figma, adobe creative suite, photoshop, lightroom
                  <br />
                  cms: sanity, contentful, strapi
                  <br />
                  e-commerce: stripe, shopify, bigcommerce
                  <br />
                  infrastructure: vercel, aws, docker, ci/cd
                  <br />
                  analytics: google analytics, mixpanel, posthog
                  <br />
                  ai tools: claude code, midjourney, chatgpt
                  <br />
                </>
              }
            />
            <FAQItem
              value="item-3"
              question="how do you handle project timelines and budgets?"
              answer="projects are scoped with fixed timelines and budgets upfront. web apps typically take 6-10 weeks, marketing sites 3-5 weeks. we include a 20% buffer for scope adjustments and stick to our commitments."
            />
            <FAQItem
              value="item-4"
              question="do you provide ongoing support?"
              answer="yes, through monthly retainer agreements starting at $10k/month. this covers bug fixes, feature additions, performance optimization, and strategic consulting as your business grows."
            />
            <FAQItem
              value="item-5"
              question="can you work with our existing team?"
              answer="absolutely. we can integrate with your internal team, provide technical leadership, or work independently based on your preferences. we're experienced in collaborative environments."
            />
            <FAQItem
              value="item-6"
              question="what makes you different from other agencies?"
              answer="we're not an agency—we're a strategic consultancy. this means deeper business understanding, technical leadership, and long-term partnerships rather than just project delivery."
            />
            <FAQItem
              value="item-7"
              question="do you handle design and development?"
              answer="yes, we offer full-service capability from strategy to design to development. we can also work with your existing designs or collaborate with your design team."
            />
            <FAQItem
              value="item-8"
              question="who's behind thirdindex?"
              answer={
                <>
                  michael ciccarelli leads the consultancy. he's a software engineer and designer
                  with 20+ years building for the web, from startups to enterprise. more at{' '}
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
