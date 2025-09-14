'use client';

import CalendarModal from './CalendarModal';
import GeneralInquiryModal from './GeneralInquiryModal';

export default function CTA() {
  return (
    <section id="contact" className="py-32 text-center md:py-40">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="mb-4 text-2xl italic md:text-4xl lg:text-6xl">Ready to Build?</h2>
        <p className="text-muted-foreground mx-auto mb-6 max-w-lg text-sm leading-relaxed">
          Let's discuss your project and see if we're a good fit.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CalendarModal />
          <GeneralInquiryModal />
        </div>
        <p className="text-muted-foreground mt-4 text-xs">
          Or email directly: <a href="mailto:info@thirdindex.co">info@thirdindex.co</a>
        </p>
      </div>
    </section>
  );
}
