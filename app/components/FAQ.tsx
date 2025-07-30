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
      <AccordionTrigger className="text-left font-mono font-bold">{question}</AccordionTrigger>
      <AccordionContent className="text-muted-foreground pr-4 font-mono text-sm">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="flex min-h-screen items-center py-16 md:py-32">
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
              answer="Most web applications take 6-10 weeks. Marketing sites typically 3-5 weeks."
            />
            <FAQItem
              value="item-2"
              question="Do you work with startups?"
              answer="Yes, we specialize in early-stage companies needing technical leadership and rapid execution."
            />
            <FAQItem
              value="item-3"
              question="What's your tech stack?"
              answer="React/Next.js, Node.js, modern databases, and best-in-class tools for each project's needs."
            />
            <FAQItem
              value="item-4"
              question="Do you handle ongoing maintenance?"
              answer="Yes, through our monthly retainer program for continued development and optimization."
            />
            <FAQItem
              value="item-5"
              question="What's greenfield development?"
              answer="Building new applications from scratch with modern architecture and no legacy constraints."
            />
            <FAQItem
              value="item-6"
              question="What's in the strategy session?"
              answer="Technical feasibility analysis, architecture planning, timeline estimation, and tech stack recommendations."
            />
          </Accordion>
        </div>
      </div>
    </section>
  );
}
