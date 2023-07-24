import { useRouter } from 'next/router';
import { poppins } from '../../base/fonts';
import AnimatedSlideIcon from '../../base/animated-slide-icon';

const HERO_CONTENT = [
  {
    locale: 'en',
    title: 'Matthieu Daulhiac',
    subtitle: 'Software Engineer, Blockchain & Front-end development',
  },
  {
    locale: 'fr',
    title: 'Matthieu Daulhiac',
    subtitle: 'Ingénieur logiciel, Dévelopement front-end & Blockchain',
  },
  {
    locale: 'cn',
    title: (
      <>
        马<br />修
      </>
    ),
    subtitle: '软件工程师，区块链和前端开发',
  },
];

const HeroSection = () => {
  const { locale } = useRouter();

  return (
    <section className="max-w-6xl mx-auto min-h-screen p-4 flex flex-col justify-center items-center">
      <h1
        className={`text-center uppercase ${
          locale === 'cn' ? 'text-8xl' : 'text-6xl'
        } md:text-9xl ${poppins.className} font-semibold`}
      >
        {HERO_CONTENT.find((content) => content.locale === locale)?.title}
      </h1>
      <h3 className="text-center uppercase text-xl md:text-2xl mt-8">
        {HERO_CONTENT.find((content) => content.locale === locale)?.subtitle}
      </h3>
      <div className="absolute bottom-0 pb-20">
        <AnimatedSlideIcon />
      </div>
    </section>
  );
};

export default HeroSection;
