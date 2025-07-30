'use client';

import { useSetAtom } from 'jotai';
import { contactDialogOpenAtom, contactDialogTabAtom } from '@/app/lib/atoms';
import ContactDialog from './ContactDialog';

export default function CTA() {
  const setDialogOpen = useSetAtom(contactDialogOpenAtom);
  const setDialogTab = useSetAtom(contactDialogTabAtom);

  const handleContactClick = () => {
    setDialogTab('contact');
    setDialogOpen(true);
  };

  const handleMeetingClick = () => {
    window.open('https://cal.com/thirdindex/15min', '_blank');
  };

  return (
    <section id="contact" className="py-16 text-center md:py-32">
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-2xl font-bold">Ready to Build?</h2>
        <p className="text-muted-foreground mx-auto mb-8 max-w-lg text-sm leading-relaxed">
          Let's discuss your project and see if we're a good fit.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={handleMeetingClick}
            className="bg-foreground text-background hover:bg-primary focus:ring-primary inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
          >
            Schedule a Call
          </button>
          <button
            onClick={handleContactClick}
            className="border-foreground text-foreground hover:bg-primary hover:border-primary hover:text-background focus:ring-primary inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
          >
            Send Message
          </button>
        </div>
        <p className="text-muted-foreground mt-6 text-xs">
          Or email directly: {' '}
          <a href="mailto:info@thirdindex.co" className="hover:underline">
            info@thirdindex.co
          </a>
        </p>
        <ContactDialog showTrigger={false} />
      </div>
    </section>
  );
}
