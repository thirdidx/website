import WorkSampleCard from './WorkSampleCard';

export default function About() {
  return (
    <section id="about" className="flex min-h-screen items-center py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          {/* Main content area */}
          <div className="col-span-12 md:col-span-8">
            <div className="grid grid-cols-4 gap-4">
              {/* What we do - spans 3 columns */}
              <div className="col-span-4 md:col-span-3">
                <div className="mb-6 font-mono text-xs">what we do</div>
                <div className="flex flex-col gap-6 text-balance">
                  <p className="text-lg md:text-2xl">
                    we turn ideas into working products people want to use.
                  </p>
                  <p className="md:max-w-lg">
                    full-stack development, thoughtfully designed. we build solid foundations so
                    your product can scale without breaking.
                  </p>
                </div>
              </div>

              {/* Work sample 1 - top right */}
              <div className="col-span-2 md:col-span-1">
                <WorkSampleCard
                  size="small"
                  imageSrc="/projects/kelvon.png"
                  alt="Kelvon project"
                  projectName="Kelvon Agee"
                  projectDescription="photographer site. next.js/cloudinary, tailwind css & motion"
                  liveUrl="https://kelvonagee.com"
                />
              </div>

              {/* Services list - spans 2 columns */}
              <div className="col-span-4 md:col-span-2">
                <div className="mb-6 font-mono text-xs">services</div>
                <ul>
                  <li>web apps & saas platforms</li>
                  <li>ecommerce & payments</li>
                  <li>blockchain integrations</li>
                  <li>ui/ux & animations</li>
                  <li>marketing sites & cms</li>
                  <li>architecture & scaling</li>
                </ul>
              </div>

              {/* Work samples 2 & 3 - bottom right */}
              <div className="col-span-2 md:col-span-1">
                <WorkSampleCard
                  size="small"
                  imageSrc="/projects/one-of.png"
                  alt="One Of project"
                  projectName="ONE/OF"
                  projectDescription="ecommerce site. next.js, shopify & sanity"
                  liveUrl="https://shoponeof.com"
                />
              </div>

              <div className="col-span-2 md:col-span-1">
                <WorkSampleCard
                  size="small"
                  alt="Add your project"
                  projectName="Your Project?"
                  liveUrl="#contact"
                />
              </div>
            </div>
          </div>

          {/* Right sidebar with about info and work sample */}
          <div className="col-span-12 md:col-span-4">
            <div className="flex flex-col gap-6">
              {/* Work sample 4 */}
              <WorkSampleCard
                size="large"
                imageSrc="/projects/the-bar.png"
                alt="The Bar"
                projectName="The Bar"
                projectDescription="portfolio site for amazon (xcm). next.js, sanity, tailwind css & motion"
                liveUrl="https://amazonthe.bar"
              />

              {/* <div>
                <div className="mb-6 font-mono text-xs">see more projects</div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
