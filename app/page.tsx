import TimeDisplay from './components/TimeDisplay';
import Logo from './components/Logo';
import Wordmark from './components/Wordmark';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col p-4 md:p-8">
      <header className="grid grid-cols-8 gap-4">
        <div className="col-span-2">
          <Logo />
        </div>
        <div className="col-span-6 -translate-y-1 md:col-span-4 md:translate-y-0">
          <div className="flex flex-col gap-8 text-right md:grid md:grid-cols-2 md:gap-4 md:text-left">
            <nav className="flex flex-col md:gap-2">
              <span className="font-mono text-xs tracking-wide uppercase">Links</span>
              <div className="flex flex-col gap-1">
                <a
                  className="hover:text-primary/80 font-sans text-xs font-bold uppercase transition-colors"
                  href="mailto:info@thirdindex.co"
                >
                  Email
                </a>
                <a
                  className="group text-primary hover:text-primary/80 font-sans text-xs font-bold uppercase transition-colors"
                  href="https://cal.com/thirdindex/15min"
                >
                  Book a call{' '}
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </a>
              </div>
            </nav>
            <div className="order-first flex flex-col md:order-last md:gap-2">
              <span className="font-mono text-xs tracking-wide uppercase">
                independent practice of
              </span>
              <a
                className="hover:text-primary/80 font-sans text-xs font-bold uppercase transition-colors"
                href="https://hael.cc"
              >
                michael ciccarelli
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-2 hidden justify-end md:flex">
          <TimeDisplay />
        </div>
      </header>
      <main className="flex flex-1 flex-col justify-center gap-8 md:gap-16">
        {/* <h1 className="text-center text-2xl font-bold tracking-tighter md:text-[14dvw] xl:text-[17dvw] uppercase">
          thirdindex
        </h1> */}
        <Wordmark />

        <div className="grid grid-cols-8 gap-4">
          <div className="col-span-8 flex flex-col gap-4 xl:col-span-6 xl:col-start-2">
            <h2 className="text-xl leading-tight font-bold text-balance lg:indent-32 lg:text-5xl lg:leading-[1.05] lg:font-extrabold">
              we make thoughtful web apps with clean design and solid engineering
              <span className="lg:hidden">
                . projects span publishing, commerce, creative tools, and decentralized platforms.
              </span>
            </h2>
            <h2 className="hidden text-xl leading-none lg:block">
              projects span publishing, commerce, creative tools, and decentralized platforms.
            </h2>
          </div>
        </div>
      </main>
      <footer className="flex flex-col gap-2 md:flex-row md:justify-between">
        <p className="font-mono text-xs text-neutral-400">
          © {new Date().getFullYear()} ThirdIndex, LLC
        </p>
        <p className="font-mono text-xs text-neutral-400">
          systems that think. interfaces that breathe. code that lasts.
        </p>
      </footer>
    </div>
  );
}
