import TimeDisplay from './components/TimeDisplay';
import Logo from './components/Logo';
// import Wordmark from './components/Wordmark';

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      {/* <div
        className="bg-background/60 pointer-events-none fixed inset-0 z-[-1] flex h-full min-h-screen w-full flex-col bg-cover bg-center bg-blend-lighten"
        style={{
          backgroundImage: 'url(/bg.jpg)',
        }}
      /> */}
      <header className="grid grid-cols-12 gap-4 p-4 py-8">
        <div className="col-span-8">
          <div className="w-[32px] translate-y-px">
            <Logo />
          </div>
        </div>
        <div className="col-span-4 flex flex-col justify-between md:flex-row">
          <nav className="flex gap-2 text-xs">
            {/* <div>
              <a href="#">About</a>
            </div>
            <div>
              <a href="#">Services</a>
            </div>
            <div>
              <a href="#">Contact</a>
            </div> */}
          </nav>
          {/* <p className="flex items-center gap-2 text-right text-xs md:text-left">
            <a href="https://cal.com/thirdindex/15min">book a call</a>—
            <a href="mailto:info@thirdindex.co">info@thirdindex.co</a>
          </p> */}
          <div className="flex items-center justify-end gap-px text-xs">
            e:
            <a href="mailto:info@thirdindex.co">info@thirdindex.co</a>
          </div>
        </div>
      </header>
      <main className="flex flex-1 flex-col justify-end">
        <div className="flex flex-col gap-4 gap-y-12 self-end px-4 pb-[20dvh] md:grid md:grid-cols-12">
          <div className="col-span-12 flex flex-col justify-end bg-transparent select-none md:col-span-6 lg:col-span-8">
            <h1 className="w-full translate-y-3 font-sans text-[clamp(2rem,8vw,10.5dvw)] leading-none font-bold">
              thirdindex
            </h1>
          </div>
          <div className="col-span-12 flex flex-col justify-end gap-2 md:col-span-6 lg:col-span-4">
            <div className="bg-primary h-1.5 w-1.5">&nbsp;</div>
            <p className="text-sm tracking-tight text-balance">
              a digital studio by <a href="https://hael.cc">michael ciccarelli</a>. we build
              thoughtful web apps with a focus on clean design and solid engineering. our work spans
              publishing, commerce, creative projects, and decentralized platforms.
            </p>
            {/* <p className="flex items-center gap-2 text-sm tracking-tight">
              <a href="#">learn more </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-3 opacity-80"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z"
                  clip-rule="evenodd"
                />
              </svg>
            </p> */}
            {/* <a
              className="hover:text-primary transition-colors"
              href="https://cal.com/thirdindex/15min"
            >
              <span>book a call</span>
            </a> */}

            {/* <p className="text-sm leading-tight font-medium tracking-tight text-balance mix-blend-difference">
              we build thoughtful web applications with a focus on clean design and solid
              engineering. our work spans publishing, commerce, creative projects, and decentralized
              platforms.
            </p> */}
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
      <footer className="flex items-center justify-between gap-2 p-4 text-xs">
        <div className="flex items-center">© {new Date().getFullYear()} thirdindex, llc.</div>
        <div className="flex items-center gap-2 text-xs">
          <TimeDisplay />
        </div>
      </footer>
    </div>
  );
}
