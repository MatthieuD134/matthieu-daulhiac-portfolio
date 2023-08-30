import HeadMetaData from '@/components/base/head-meta-data';
import AboutMeSection from '@/components/pages/home/about-me-section';
import HeroSection from '@/components/pages/home/hero-section';
import MyWorkSection from '@/components/pages/home/my-work-section';
import TechStackSection from '@/components/pages/home/tech-stack-section';

export default function Home() {
  return (
    <>
      <HeadMetaData />

      <HeroSection />
      <TechStackSection />
      <AboutMeSection />
      <MyWorkSection />
    </>
  );
}
