import TimeDisplay from "./components/TimeDisplay"

export default function Home() {
  return (
    <div className="min-h-screen p-4 md:p-8 flex flex-col">
      <header className="flex gap-8 justify-between items-center">
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="39" fill="none">
            <path fill="currentColor" d="M14.885 20.064a478.502 478.502 0 0 1-.408 13.907c.611.034 1.206.103 1.784.205.985.137 1.835.325 2.549.565L14.579 39a7.66 7.66 0 0 0-3.416-1.59 8.106 8.106 0 0 0-4.23.307c.203-.513.526-.906.968-1.18.238-.171.51-.274.816-.308l-.204-12.06c-.238-.889-.9-1.744-1.988-2.565-1.054-.787-2.345-.907-3.874-.36l5.76-4.053-.204-11.649c-1.7.924-3.687 1.386-5.964 1.386-.612 0-1.36-.103-2.243-.308l4.792-4.927c-.272.411-.374.907-.306 1.489.068.752.476 1.3 1.223 1.642.748.342 1.58.479 2.498.41a6.725 6.725 0 0 0 2.447-.564c.815-.342 1.41-.736 1.784-1.18-.034 3.934 0 8.757.102 14.47.068 4.55.255 9.887.56 16.011h1.02c-.51-6.09-.714-12.042-.612-17.858.034-5.405.34-10.776.918-16.113.136 2.668.255 6.295.357 10.879.068 4.653.102 7.663.102 9.031l-.051.052h-.051l.102.102Zm0-.154a90.426 90.426 0 0 0 2.344-1.95c.714-.65 1.513-1.402 2.396-2.257a81.883 81.883 0 0 1 2.294-2.156 21.556 21.556 0 0 0 1.53-1.488c.475-.513.9-1.009 1.274-1.488.408-.513.713-.89.917-1.129.204-.274.493-.684.867-1.231.374-.548.611-.873.713-.975a28.241 28.241 0 0 1-2.65-.616c-.306-.103-.697-.24-1.173-.41-.475-.206-.9-.36-1.274-.463a2.595 2.595 0 0 0-.969-.205 6.451 6.451 0 0 0-1.937.205c.374-.102.731-.24 1.07-.41.34-.171.596-.308.765-.41.17-.138.46-.343.867-.616l.816-.616c.51-.342 1.087-1.01 1.733-2.002 1.699.958 3.466 1.591 5.301 1.9 1.631.239 3.042.324 4.231.256-2.31 1.779-4.299 3.404-5.964 4.875a145.89 145.89 0 0 0-8.666 8.159l8.92 13.137c.103.137.29.41.562.82.271.377.458.668.56.873.136.171.323.428.561.77l.612.77c.17.136.34.307.51.513.203.205.39.342.56.41.17.069.323.103.459.103.17 0 .323-.017.459-.051a1.17 1.17 0 0 0 .255-.154l.254-.257c.17-.137.272-.222.306-.257l.408.514c-.204.136-.629.427-1.274.872-.646.41-1.173.77-1.58 1.078a60.271 60.271 0 0 0-3.314 2.36l-12.743-18.32v-.154Z"/>
          </svg>
        </div>
        <div className="flex gap-4 items-center">
          <div className="hidden md:block">
            <TimeDisplay />
          </div>
          <a href="mailto:info@kolumn.co" className="px-4 py-2.5 bg-white/5 hover:bg-white text-gray-200 hover:text-gray-900 rounded-full transition-colors text-xs uppercase font-mono whitespace-nowrap">
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
        <p className="font-mono text-xs text-neutral-400">© 2025 kolumn LLC. Brooklyn, NY.</p>
      </footer> */}
    </div>
  )
}
