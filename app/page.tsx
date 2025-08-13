// import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
// import About from './components/About';
import Process from './components/Process';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import ScrollRevealText from './components/ScrollRevealText';

export default function Home() {
  return (
    <div className="text-foreground bg-background relative flex min-h-screen flex-col">
      {/* <Navbar /> */}

      <main className="flex flex-1 flex-col justify-end">
        <Hero />
        <section className="py-32 md:py-40">
          <div className="container mx-auto max-w-6xl px-4 md:px-8">
            <ScrollRevealText
              className="font-mono text-xl leading-normal text-balance md:text-3xl"
              //text="we build web applications with clean code and thoughtful design, handling complete technical implementation from mvp to full platforms so you can focus on growing your business. our expertise spans the entire development lifecycle from initial architecture to production deployment and ongoing optimization, including greenfield web application development, interactive ui/ux with motion design, e-commerce and payment integration, publishing platforms and creative portfolios, blockchain and decentralized applications, and performance optimization and scaling."
              // text="we operate at the crossroads of strategy and execution, where thoughtful code meets intentional design. our practice encompasses web applications, commerce systems, publishing platforms, and blockchain integrations—each project a careful study in how technology can amplify human potential. from initial concept to final deployment, we craft digital experiences that reward deeper engagement."
              text="we're a digital studio and consultancy building modern web apps with intuitive ui/ux, seamless e-commerce and payments, and motion-driven design. our work spans creative projects, publishing platforms, blockchain, and performance-focused architecture—delivering end-to-end solutions that scale."
            />
          </div>
        </section>

        <Process />
        <Pricing />
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
