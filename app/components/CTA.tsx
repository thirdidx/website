import Link from 'next/link';

export default function CTA() {
  return (
    <section id="contact" className="py-32 text-center md:py-40">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="mb-4 text-2xl font-bold">Ready to Build?</h2>
        <p className="text-muted-foreground mx-auto mb-6 max-w-lg text-sm leading-relaxed">
          Let's discuss your project and see if we're a good fit.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/meeting"
            className="bg-foreground text-background hover:bg-primary focus:ring-primary inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
          >
            Schedule a Call
          </Link>
          <Link
            href="/contact"
            className="border-foreground text-foreground hover:bg-primary hover:border-primary hover:text-background focus:ring-primary inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
          >
            Send Message
          </Link>
        </div>
        <p className="text-muted-foreground mt-4 text-xs">
          Or email directly: {' '}
          <a href="mailto:info@thirdindex.co" className="hover:underline">
            info@thirdindex.co
          </a>
        </p>
      </div>
    </section>
  );
}