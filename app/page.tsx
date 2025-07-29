import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Process from './components/Process';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import ContactDialog from './components/ContactDialog';
import CTA from './components/CTA';

export default function Home() {
  return (
    <div className="text-foreground bg-background relative flex min-h-screen flex-col">
      <Navbar />

      {/* Global Contact Dialog */}
      <ContactDialog showTrigger={false} />

      <main className="flex flex-1 flex-col justify-end">
        <Hero />
        <About />
        <Process />
        <Pricing />
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
