import { useRouter } from 'next/router';
import { poppins } from '../../base/fonts';
import AnimatedSlideIcon from '../../base/animated-slide-icon';
import { useMemo } from 'react';

const HERO_CONTENT = [
  {
    locale: 'en',
    title: 'Matthieu Daulhiac',
    subtitle: 'Software Engineer, Blockchain & Front-end development',
    welcome: 'WELCOME',
  },
  {
    locale: 'fr',
    title: 'Matthieu Daulhiac',
    subtitle: 'Ingénieur logiciel, Dévelopement front-end & Blockchain',
    welcome: 'BIENVENUE',
  },
  {
    locale: 'cn',
    title: (
      <>
        马<br />修
      </>
    ),
    subtitle: '软件工程师，区块链和前端开发',
    welcome: '欢迎',
  },
];

const HeroSection = () => {
  const { locale } = useRouter();

  const content = useMemo(
    () =>
      HERO_CONTENT.find((content) => content.locale === locale) ||
      HERO_CONTENT[0],
    [locale]
  );

  return (
    <section className="max-w-6xl mx-auto min-h-screen p-4 pb-40 flex flex-col justify-center items-center">
      <h1
        className={`text-center uppercase ${
          locale === 'cn' ? 'text-8xl' : 'text-6xl'
        } md:text-9xl ${poppins.className} font-semibold animate-slideIn`}
      >
        {content.title}
      </h1>
      <h3 className="text-center uppercase text-xl md:text-2xl mt-8 mb-16">
        {content.subtitle}
      </h3>
      <AnimatedSlideIcon />
      <span className="-z-10 absolute top-0 right-0 bottom-0 left-0 flex flex-col items-center justify-center overflow-hidden pb-40">
        <span className="animate-slideInLeft flex">
          <span
            className={`${
              locale === 'cn'
                ? 'text-[min(40vw,20rem)]'
                : locale === 'fr'
                ? 'text-[min(18vw,20rem)]'
                : 'text-[min(23vw,20rem)]'
            } text-center text-stroke-black dark:text-stroke-white w-max font-bold mx-auto`}
          >
            {content.welcome}
          </span>
        </span>
      </span>
    </section>
  );
};

export default HeroSection;
