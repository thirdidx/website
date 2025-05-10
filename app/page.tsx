import TimeDisplay from "./components/TimeDisplay"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-24 flex flex-col">
      <header className="flex flex-col md:flex-row gap-8 justify-between items-center">
        <svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.5181 16.8928C10.5181 16.0801 11.2036 15.4255 12.0206 15.4255C12.8377 15.4255 13.4958 16.0801 13.4958 16.8928C13.4958 17.7055 12.8377 18.3601 12.0206 18.3601C11.2036 18.3601 10.5181 17.7055 10.5181 16.8928Z" fill="#FBFAFA" fillOpacity="0.8"/>
          <path d="M15.5248 16.8928C15.5248 16.0801 16.1828 15.4255 16.9999 15.4255C17.817 15.4255 18.5025 16.0801 18.5025 16.8928C18.5025 17.7055 17.817 18.3601 16.9999 18.3601C16.1828 18.3601 15.5248 17.7055 15.5248 16.8928Z" fill="#FBFAFA" fillOpacity="0.8"/>
          <path d="M20.5098 16.8928C20.5098 16.0801 21.1952 15.4255 22.0123 15.4255C22.8294 15.4255 23.4875 16.0801 23.4875 16.8928C23.4875 17.7055 22.8294 18.3601 22.0123 18.3601C21.1952 18.3601 20.5098 17.7055 20.5098 16.8928Z" fill="#FBFAFA"/>
          <path d="M29.6128 22.1727H31.8612V1.82727H29.6128V0H33.9999V24H29.6128V22.1727Z" fill="#FBFAFA" fillOpacity="0.8"/>
          <path d="M4.3871 1.82727H2.13871V22.1727H4.3871V24H0V0H4.3871V1.82727Z" fill="#FBFAFA" fillOpacity="0.8"/>
        </svg>
        <div className="flex md:order-none order-last md:flex-row flex-col gap-8 md:items-center">
          <TimeDisplay />
          <a href="mailto:info@thirdindex.co" className="px-4 py-2.5 bg-white/5 hover:bg-white text-gray-200 hover:text-gray-900 rounded-full transition-colors text-xs uppercase font-mono">
            Get in touch
          </a>
        </div>
      </header>
      <main className="flex-1 flex flex-col gap-4 justify-end">
        <section className="py-12 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-4">
              <h2 className="text-2xl md:text-7xl lg:text-8xl text-gray-200 !leading-none text-balance max-w-2xl uppercase">
                Digital systems architecture.
              </h2>
            </div>
            <div className="md:col-span-4 md:col-start-8 flex flex-col gap-y-24 md:gap-y-48">
              <div className="text-lg text-gray-200 !leading-none text-balance max-w-sm uppercase">
                Engineering with design intent. 
              </div>
              <p className="text-lg text-gray-200 text-balance max-w-xl -translate-y-1">
                We build web applications for creative platforms, publishing systems, and financial interfaces—technical solutions that anticipate complexity while solving present needs.
              </p>
            </div>
          </div>
        </section>
      </main>
      {/* <footer className="border-t border-neutral-700 py-12">
        <p className="font-mono text-xs text-neutral-400">© 2025 Third Index LLC. Brooklyn, NY.</p>
      </footer> */}
    </div>
  )
}
