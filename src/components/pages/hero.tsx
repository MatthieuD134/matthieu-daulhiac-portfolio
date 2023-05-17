import { useRouter } from 'next/router';

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
    title: 'Matthieu Daulhiac - 马修',
    subtitle: '软件工程师，区块链和前端开发',
  },
];

const Hero = () => {
  const { locale } = useRouter();

  return (
    <section>
      <h1>
        {HERO_CONTENT.find((content) => content.locale === locale)?.title}
      </h1>
      <h3>
        {HERO_CONTENT.find((content) => content.locale === locale)?.subtitle}
      </h3>
    </section>
  );
};

export default Hero;
