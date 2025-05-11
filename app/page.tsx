import TimeDisplay from "./components/TimeDisplay"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8 flex flex-col">
      <header className="flex flex-col md:flex-row gap-8 justify-between items-center">
        {/* <svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.5181 16.8928C10.5181 16.0801 11.2036 15.4255 12.0206 15.4255C12.8377 15.4255 13.4958 16.0801 13.4958 16.8928C13.4958 17.7055 12.8377 18.3601 12.0206 18.3601C11.2036 18.3601 10.5181 17.7055 10.5181 16.8928Z" fill="#FBFAFA" fillOpacity="0.8"/>
          <path d="M15.5248 16.8928C15.5248 16.0801 16.1828 15.4255 16.9999 15.4255C17.817 15.4255 18.5025 16.0801 18.5025 16.8928C18.5025 17.7055 17.817 18.3601 16.9999 18.3601C16.1828 18.3601 15.5248 17.7055 15.5248 16.8928Z" fill="#FBFAFA" fillOpacity="0.8"/>
          <path d="M20.5098 16.8928C20.5098 16.0801 21.1952 15.4255 22.0123 15.4255C22.8294 15.4255 23.4875 16.0801 23.4875 16.8928C23.4875 17.7055 22.8294 18.3601 22.0123 18.3601C21.1952 18.3601 20.5098 17.7055 20.5098 16.8928Z" fill="#FBFAFA"/>
          <path d="M29.6128 22.1727H31.8612V1.82727H29.6128V0H33.9999V24H29.6128V22.1727Z" fill="#FBFAFA" fillOpacity="0.8"/>
          <path d="M4.3871 1.82727H2.13871V22.1727H4.3871V24H0V0H4.3871V1.82727Z" fill="#FBFAFA" fillOpacity="0.8"/>
        </svg> */}
        <svg width="160" height="25" viewBox="0 0 160 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50.6043 17.8727V7.54506H47.2388V6.32422H55.3062V7.54506H51.9407V17.8727H50.6043Z" fill="currentColor"/>
          <path d="M58.108 17.8727V6.32422H59.4443V11.3891H65.5815V6.32422H66.9179V17.8727H65.5815V12.6099H59.4443V17.8727H58.108Z" fill="currentColor"/>
          <path d="M70.7185 17.8727V16.7179H72.4343V7.47907H70.7185V6.32422H75.4864V7.47907H73.7706V16.7179H75.4864V17.8727H70.7185Z" fill="currentColor"/>
          <path d="M79.2768 17.8727V6.32422H82.9393C85.2985 6.32422 86.7008 7.67704 86.7008 9.68978C86.7008 11.4056 85.7605 12.7584 83.9622 13.0883L87.0638 17.8727H85.447L82.5599 13.2038H80.6131V17.8727H79.2768ZM80.6131 12.016H82.9393C84.2921 12.016 85.315 11.2241 85.315 9.70628C85.315 8.48544 84.4901 7.51206 82.8568 7.51206H80.6131V12.016Z" fill="currentColor"/>
          <path d="M89.7085 17.8727V16.7344H90.7973V7.46257H89.7085V6.32422H93.8989C97.5614 6.32422 99.6897 8.7329 99.6897 12.0985C99.6897 15.6785 97.5614 17.8727 93.8989 17.8727H89.7085ZM92.1336 16.6849H93.8989C96.6376 16.6849 98.3203 15.0021 98.3203 12.0985C98.3203 9.31033 96.6706 7.52856 93.8989 7.52856H92.1336V16.6849Z" fill="currentColor"/>
          <path d="M107.949 17.8727V16.7179H109.665V7.47907H107.949V6.32422H112.717V7.47907H111.001V16.7179H112.717V17.8727H107.949Z" fill="currentColor"/>
          <path d="M116.507 17.8727V6.32422H118.701L123.915 16.6519H124.014V6.32422H125.333V17.8727H123.09L117.942 7.54506H117.843V17.8727H116.507Z" fill="currentColor"/>
          <path d="M128.969 17.8727V16.7344H130.058V7.46257H128.969V6.32422H133.159C136.822 6.32422 138.95 8.7329 138.95 12.0985C138.95 15.6785 136.822 17.8727 133.159 17.8727H128.969ZM131.394 16.6849H133.159C135.898 16.6849 137.581 15.0021 137.581 12.0985C137.581 9.31033 135.931 7.52856 133.159 7.52856H131.394V16.6849Z" fill="currentColor"/>
          <path d="M142.09 17.8727V6.32422H148.673V7.54506H143.427V11.3891H147.947V12.5934H143.427V16.6684H148.855V17.8727H142.09Z" fill="currentColor"/>
          <path d="M150.497 17.8727L154.391 12.016L150.695 6.32422H152.246L155.199 10.9436H155.298L158.268 6.32422H159.835L156.106 12.016L160 17.8727H158.416L155.265 13.0718H155.166L152.065 17.8727H150.497Z" fill="currentColor"/>
          <g>
            <path d="M11.6859 16.6698C11.6859 16.0034 12.2491 15.4668 12.9203 15.4668C13.5916 15.4668 14.1323 16.0034 14.1323 16.6698C14.1323 17.3361 13.5916 17.8727 12.9203 17.8727C12.2491 17.8727 11.6859 17.3361 11.6859 16.6698ZM15.7992 16.6698C15.7992 16.0034 16.3398 15.4668 17.0111 15.4668C17.6824 15.4668 18.2455 16.0034 18.2455 16.6698C18.2455 17.3361 17.6824 17.8727 17.0111 17.8727C16.3398 17.8727 15.7992 17.3361 15.7992 16.6698ZM19.8944 16.6698C19.8944 16.0034 20.4576 15.4668 21.1289 15.4668C21.8001 15.4668 22.3408 16.0034 22.3408 16.6698C22.3408 17.3361 21.8001 17.8727 21.1289 17.8727C20.4576 17.8727 19.8944 17.3361 19.8944 16.6698Z" fill="currentColor"/>
            <path d="M29.6504 22.2276H31.8933V1.83179H29.6504V0H34.0268V24.0593H29.6504V22.2276Z" fill="currentColor"/>
            <path d="M4.48581 1.83179H2.24289V22.2276H4.48581V24.0594H0.109375V0H4.48581V1.83179Z" fill="currentColor"/>
          </g>
          </svg>

        <div className="flex md:order-none order-last md:flex-row flex-col gap-8 md:items-center">
          <TimeDisplay />
          <a href="mailto:info@thirdindex.co" className="px-4 py-2.5 bg-white/5 hover:bg-white text-gray-200 hover:text-gray-900 rounded-full transition-colors text-xs uppercase font-mono">
            Get in touch
          </a>
        </div>
      </header>
      <main className="flex-1 flex flex-col gap-4 justify-end">
        <section className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-12 gap-8 items-end">
            <div className="xl:col-span-5 flex flex-col justify-end">
              <h2 className="text-2xl md:text-6xl xl:text-8xl text-gray-200 !leading-none lg:text-balance lg:max-w-2xl uppercase">
                Digital products engineered.
              </h2>
            </div>
            <div className="xl:col-span-5 xl:col-start-8">
              <p className="text-lg text-gray-200 text-balance max-w-xl -translate-y-2">
                {/* We build web applications for creative platforms, publishing systems, and financial interfaces—technical solutions that anticipate complexity while solving present needs. */}
                A technology studio crafting web applications with technical depth and animated interfaces. We build custom digital products and provide expert consulting across publishing, creative, and financial sectors.
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
