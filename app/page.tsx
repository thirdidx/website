import TimeDisplay from "./components/TimeDisplay"

export default function Home() {
  return (
    <div className="min-h-screen p-4 md:p-8 flex flex-col">
      <header className="flex gap-8 justify-between items-center">
        <div className="flex items-center gap-2">
          <svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5181 16.8928C10.5181 16.0801 11.2036 15.4255 12.0206 15.4255C12.8377 15.4255 13.4958 16.0801 13.4958 16.8928C13.4958 17.7055 12.8377 18.3601 12.0206 18.3601C11.2036 18.3601 10.5181 17.7055 10.5181 16.8928Z" fill="currentColor" fillOpacity="0.8"/>
            <path d="M15.5248 16.8928C15.5248 16.0801 16.1828 15.4255 16.9999 15.4255C17.817 15.4255 18.5025 16.0801 18.5025 16.8928C18.5025 17.7055 17.817 18.3601 16.9999 18.3601C16.1828 18.3601 15.5248 17.7055 15.5248 16.8928Z" fill="currentColor" fillOpacity="0.8"/>
            <path d="M20.5098 16.8928C20.5098 16.0801 21.1952 15.4255 22.0123 15.4255C22.8294 15.4255 23.4875 16.0801 23.4875 16.8928C23.4875 17.7055 22.8294 18.3601 22.0123 18.3601C21.1952 18.3601 20.5098 17.7055 20.5098 16.8928Z" fill="currentColor"/>
            <path d="M29.6128 22.1727H31.8612V1.82727H29.6128V0H33.9999V24H29.6128V22.1727Z" fill="currentColor" fillOpacity="0.8"/>
            <path d="M4.3871 1.82727H2.13871V22.1727H4.3871V24H0V0H4.3871V1.82727Z" fill="currentColor" fillOpacity="0.8"/>
          </svg>
        </div>
        <div className="flex gap-4 items-center">
          <div className="hidden md:block">
            <TimeDisplay />
          </div>
          <a href="mailto:info@thirdindex.co" className="px-4 py-2.5 bg-white/5 hover:bg-white text-gray-200 hover:text-gray-900 rounded-full transition-colors text-xs uppercase font-mono whitespace-nowrap">
            Get in touch
          </a>
        </div>
      </header>
      <main className="flex-1 flex flex-col gap-4 justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
          <div className="lg:col-span-3 lg:col-start-2">
            <h2 className="text-xl md:text-4xl max-w-[560px]">We build thoughtful web applications with a focus on clean design and solid engineering. Our work spans publishing, e-commerce, creative projects, and decentralized platforms</h2>
          </div>
        </div>
      </main>
      {/* <footer className="border-t border-neutral-700 py-12">
        <p className="font-mono text-xs text-neutral-400">© 2025 Third Index LLC. Brooklyn, NY.</p>
      </footer> */}
    </div>
  )
}
