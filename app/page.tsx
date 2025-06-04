import TimeDisplay from './components/TimeDisplay';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col p-4 md:p-8">
      <header className="flex items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <svg
            width="35"
            height="25"
            viewBox="0 0 35 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.6859 16.6698C11.6859 16.0034 12.2491 15.4668 12.9203 15.4668C13.5916 15.4668 14.1323 16.0034 14.1323 16.6698C14.1323 17.3361 13.5916 17.8727 12.9203 17.8727C12.2491 17.8727 11.6859 17.3361 11.6859 16.6698ZM15.7992 16.6698C15.7992 16.0034 16.3398 15.4668 17.0111 15.4668C17.6824 15.4668 18.2455 16.0034 18.2455 16.6698C18.2455 17.3361 17.6824 17.8727 17.0111 17.8727C16.3398 17.8727 15.7992 17.3361 15.7992 16.6698ZM19.8944 16.6698C19.8944 16.0034 20.4576 15.4668 21.1289 15.4668C21.8001 15.4668 22.3408 16.0034 22.3408 16.6698C22.3408 17.3361 21.8001 17.8727 21.1289 17.8727C20.4576 17.8727 19.8944 17.3361 19.8944 16.6698Z"
              fill="currentColor"
            />
            <path
              d="M29.6504 22.2276H31.8933V1.83179H29.6504V0H34.0268V24.0593H29.6504V22.2276Z"
              fill="currentColor"
            />
            <path
              d="M4.48581 1.83179H2.24289V22.2276H4.48581V24.0594H0.109375V0H4.48581V1.83179Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <TimeDisplay />
          </div>
          <a
            href="mailto:info@thirdindex.co"
            className="rounded-full bg-white/5 px-4 py-2.5 font-mono text-xs whitespace-nowrap text-gray-200 uppercase transition-colors hover:bg-white hover:text-gray-900"
          >
            Get in touch
          </a>
        </div>
      </header>
      <main className="flex flex-1 flex-col justify-center gap-4">
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-6">
          <div className="flex flex-col gap-4 xl:col-span-3 xl:col-start-2">
            <h2 className="text-balace text-xl md:text-3xl lg:text-4xl">
              we build thoughtful web applications with a focus on clean design and solid
              engineering. our work spans publishing, e-commerce, creative projects, and
              decentralized platforms.
            </h2>
            <p className="text-sm">
              <a href="https://cal.com/thirdindex/15min">Start a project</a> or get in touch:{' '}
              <a href="mailto:info@thirdindex.co">info@thirdindex.co</a>
            </p>
          </div>
        </div>
      </main>
      {/* <footer className="border-t border-neutral-700 py-12">
        <p className="font-mono text-xs text-neutral-400">© 2025 kolumn LLC. Brooklyn, NY.</p>
      </footer> */}
    </div>
  );
}
