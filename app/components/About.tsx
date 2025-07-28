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
                    We turn ideas into working products people want to use.
                  </p>
                  <p className="md:max-w-lg">
                    full-stack development with design that works. we build the foundation right so
                    your product can grow without breaking.
                  </p>
                </div>
              </div>

              {/* Work sample 1 - top right */}
              <div className="col-span-2 md:col-span-1">
                <WorkSampleCard size="small" />
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
                <WorkSampleCard size="small" />
              </div>

              <div className="col-span-2 md:col-span-1">
                <WorkSampleCard size="small" />
              </div>
            </div>
          </div>

          {/* Right sidebar with about info and work sample */}
          <div className="col-span-12 md:col-span-4">
            <div className="flex flex-col gap-6">
              {/* Work sample 4 */}
              <WorkSampleCard size="large" />

              <div>
                <div className="mb-6 font-mono text-xs">see more projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
