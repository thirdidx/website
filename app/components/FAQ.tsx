import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQItemProps {
  value: string;
  question: string;
  answer: string;
}

function FAQItem({ value, question, answer }: FAQItemProps) {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger className="text-left font-mono font-bold">
        {question}
      </AccordionTrigger>
      <AccordionContent className='text-sm font-mono text-muted-foreground pr-4'>
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="flex min-h-screen items-center py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-2xl font-bold">FAQ</h2>
          <p className="text-muted-foreground mx-auto max-w-lg text-sm leading-relaxed">
            Quick answers to common questions. Don't see yours? Just ask.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            <FAQItem
              value="item-1"
              question="How long do projects take?"
              answer="Simple sites: 2-4 weeks. Web apps: 6-12 weeks. We'll give you a timeline upfront and keep you posted weekly."
            />
            <FAQItem
              value="item-2"
              question="Do you work with startups?"
              answer="Absolutely! Most of our clients are early-stage startups building their MVP. We even offer equity partnerships for the right projects."
            />
            <FAQItem
              value="item-3"
              question="What tech do you use?"
              answer="Next.js, React, TypeScript, Node.js. PostgreSQL, Supabase for data. Stripe for payments. Deploy on Vercel or AWS."
            />
            <FAQItem
              value="item-4"
              question="Do you handle ongoing maintenance?"
              answer="Yep! Our monthly retainer covers bug fixes, updates, new features, and keeping everything running smooth."
            />
            <FAQItem
              value="item-5"
              question="Design and development?"
              answer="Both! We handle most UI/UX work ourselves. For complex design projects, we team up with trusted partners."
            />
            <FAQItem
              value="item-6"
              question="What's in the strategy session?"
              answer="We'll figure out what's possible, plan the tech stack, estimate timelines, and map out your roadmap. You'll know exactly what it takes to build your idea."
            />
          </Accordion>
        </div>
      </div>
    </section>
  );
}