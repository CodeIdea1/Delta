import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import ClientTestimonials from '@/components/ClientTestimonials';
import OurJourney from '@/components/OurJourney';
import OurFoundation from '@/components/OurFoundation';
import ContactUs from '@/components/ContactUs';

export default  function Home() {

  return (
    <div>
      <Hero />
      <Services />
      <Portfolio />
      <ClientTestimonials />
      <OurJourney />
      <OurFoundation />
      <ContactUs />
    </div>
  );
}