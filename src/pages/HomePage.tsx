import Hero from '@/sections/home/Hero';
import TrustStrip from '@/sections/home/TrustStrip';
import HomeAbout from '@/sections/home/HomeAbout';
import HomeSolutions from '@/sections/home/HomeSolutions';
import WhySection from '@/sections/home/WhySection';
import CtaBand from '@/sections/home/CtaBand';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <HomeAbout />
      <HomeSolutions />
      <WhySection />
      <CtaBand />
    </>
  );
}
