import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Treatments } from '@/components/Treatments';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Results } from '@/components/Results';
import { Testimonials } from '@/components/Testimonials';
import { Offers } from '@/components/Offers';
import { PricingTable } from '@/components/PricingTable';
import { Gallery } from '@/components/Gallery';
import { Booking } from '@/components/Booking';
import { Footer } from '@/components/Footer';
import { FloatingContact } from '@/components/FloatingContact';

function App() {
  return (
    <div className="min-h-screen bg-ivory-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Treatments />
        <PricingTable />
        <WhyChooseUs />
        <Results />
        <Testimonials />
        <Offers />
        <Gallery />
        <Booking />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}

export default App;
