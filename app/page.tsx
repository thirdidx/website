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
          <div className="container mx-auto px-4">
            <ScrollRevealText
              className="font-display text-xl leading-tight text-balance md:text-4xl lg:text-6xl"
              text="We build <em>modern web applications</em> and digital products that work. From early-stage startups to established companies, we handle the <em>technical implementation</em> so you can focus on growing your business. Our expertise spans <em>full-stack development</em>, user experience design, and <em>scalable architecture</em>."
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
