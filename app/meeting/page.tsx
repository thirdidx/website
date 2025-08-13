'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';

export default function MeetingPage() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Header */}
      <header className="bg-background/80 fixed top-0 right-0 left-0 z-50 flex items-center justify-between p-6 backdrop-blur-sm md:p-8">
        <Link
          href="/"
          className="text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="text-sm font-medium">Back</span>
        </Link>
        <Link
          href="/contact"
          className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
        >
          Send a message instead →
        </Link>
      </header>

      {/* Main Content */}
      <main className="container mx-auto max-w-6xl px-6 pt-32 pb-16 md:px-8">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-6xl lg:text-7xl">Schedule a call</h1>
          <p className="text-muted-foreground mx-auto text-lg md:text-xl">
            Let's discuss your project. Book a 15-minute discovery call to explore how we can help.
          </p>
        </div>

        {/* Calendly Embed */}
        <div className="bg-muted/5 border-foreground/10 overflow-hidden rounded-lg border">
          <div
            className="calendly-inline-widget"
            data-url="https://cal.com/thirdindex/15min?hide_event_type_details=1&hide_gdpr_banner=1"
            style={{ minWidth: '320px', height: '700px' }}
          />
        </div>

        {/* Alternative booking info */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Prefer email?{' '}
            <Link href="/contact" className="text-foreground underline hover:no-underline">
              Send us a message
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
