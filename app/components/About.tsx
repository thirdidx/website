export default function About() {
  return (
    <section id="about" className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">What we do</h2>
            <p className="text-lg mb-4">
              We handle complete technical implementation so you can focus on growing your business.
              Our expertise spans the entire development lifecycle from initial architecture to 
              production deployment and ongoing optimization.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Our expertise:</h3>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Greenfield web application development</li>
              <li>• Interactive UI/UX with motion design</li>
              <li>• E-commerce & payment integration</li>
              <li>• Publishing platforms & creative portfolios</li>
              <li>• Blockchain & decentralized applications</li>
              <li>• Performance optimization & scaling</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Recent work includes:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <strong>ONE/OF</strong> - E-commerce platform built with Next.js, Shopify & Sanity
              </li>
              <li>
                <strong>Kelvon Agee</strong> - Photographer portfolio with Next.js/Cloudinary, Tailwind CSS & Motion
              </li>
              <li>
                <strong>The Bar</strong> - Portfolio site for Amazon (XCM) using Next.js, Sanity, Tailwind CSS & Motion
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}