import TimeDisplay from './components/TimeDisplay';
import Logo from './components/Logo';
import Wordmark from './components/Wordmark';

export default function Home() {
  return (
    <div
      className="bg-opacity-90 bg-foreground flex min-h-screen flex-col bg-cover bg-center bg-blend-darken"
      style={{
        backgroundImage: 'url(/bg.jpg)',
      }}
    >
      <header className="grid grid-cols-12 gap-2 p-4 py-8">
        <div className="text-foreground col-span-6">
          <div className="w-[32px] translate-y-px mix-blend-difference">
            <Logo />
          </div>
        </div>
        <div className="col-span-6 justify-end justify-self-end">
          {/* <nav className="grid grid-cols-3 gap-2 font-sans text-xs uppercase">
            <div>
              <a href="#">About</a>
            </div>
            <div>
              <a href="#">Services</a>
            </div>
            <div>
              <a href="#">Contact</a>
            </div>
          </nav> */}
          <a
            href="https://cal.com/thirdindex/15min"
            className="border-primary/20 bg-background/20 hover:bg-primary flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-[10px] tracking-wide text-white uppercase transition-all duration-300"
          >
            <span className="mix-blend-screen">Book a call</span>
          </a>
        </div>
      </header>
      <main className="flex flex-1 flex-col items-center pt-24 md:justify-end md:pb-52">
        <div className="flex flex-col gap-y-12 px-4 md:grid md:grid-cols-12 md:gap-4">
          <div className="col-span-12 mix-blend-difference md:col-span-6">
            {/* <h1 className="font-sans text-xl font-bold tracking-tight lowercase md:text-6xl xl:text-9xl">
              ThirdIndex
            </h1> */}
            <Wordmark />
          </div>
          <div className="col-span-12 flex flex-col place-items-baseline gap-2 md:col-span-4 md:col-start-10 md:-translate-y-2 md:justify-end">
            <div className="bg-primary h-2 w-2">&nbsp;</div>
            <p className="text-bal text-sm leading-tight font-medium tracking-tight mix-blend-difference">
              we build thoughtful web applications with a focus on clean design and solid
              engineering. our work spans publishing, commerce, creative projects, and decentralized
              platforms.
            </p>
          </div>
        </div>

        {/* <div className="flex w-full flex-col items-center justify-center gap-8 text-white mix-blend-difference md:gap-16">
          <h2 className="text-xl leading-tight font-bold text-balance lg:text-5xl lg:leading-[1.05] lg:font-extrabold">
            precision meets imagination
          </h2>
          <h2 className="text-xl leading-tight font-bold text-balance lg:text-5xl lg:leading-[1.05] lg:font-extrabold">
            we approach every project as a problem worth solving well. clean architecture.
            intentional design. no compromises on quality.
          </h2>
          <h2 className="text-xl leading-tight font-bold text-balance lg:text-5xl lg:leading-[1.05] lg:font-extrabold">
            what we build:
          </h2>
          <ul className="text-center">
            <li>publishing platforms that reshape how content lives online</li>
            <li>e-commerce experiences that convert visitors into believers</li>
            <li>creative projects that push boundaries</li>
            <li>decentralized systems built for tomorrow</li>
          </ul>
        </div> */}
      </main>
      <footer className="text-foreground md:items-center p-4 font-mono text-xs uppercase md:grid md:grid-cols-12 md:gap-4 flex flex-col">
        <div className="order-last md:order-first md:col-span-3">© {new Date().getFullYear()}</div>

        <div className="md:col-span-3">
          digital studio of{' '}
          <a className="hover:text-primary/80 transition-colors" href="https://hael.cc">
            michael ciccarelli
          </a>
        </div>
        <div className="md:col-span-4">
          E:{' '}
          <a className="hover:text-primary/80 transition-colors" href="mailto:info@thirdindex.co">
            info@thirdindex.co
          </a>
        </div>
        <div className="flex items-center gap-2 md:col-span-2 md:justify-end">
          <TimeDisplay />
        </div>
      </footer>
    </div>
  );
}
