import { useRouter } from 'next/router';
import { poppins } from '../../base/fonts';
import { useMemo } from 'react';
import Image from 'next/image';

const CONTENT = [
  {
    locale: 'en',
    title: 'About Me',
    content:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    button: 'My Resume',
  },
  {
    locale: 'fr',
    title: 'Qui suis-je?',
    content:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    button: 'Mon CV',
  },
  {
    locale: 'cn',
    title: '关于我',
    content:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    button: ' 我的简历',
  },
];

const AboutMeSection = () => {
  const { locale } = useRouter();

  const content = useMemo(
    () => CONTENT.find((content) => content.locale === locale),
    [locale]
  );

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0">
        <div className="flex flex-col justify-around">
          <h2
            className={`uppercase text-4xl md:text-7xl ${poppins.className} font-semibold`}
          >
            {content?.title}
          </h2>

          <p className="my-10">{content?.content}</p>
          <button>{content?.button}</button>
        </div>
        <div className="relative h-full w-full min-h-[500px]">
          <Image
            alt=""
            src="/about-me-illustration.png"
            fill
            style={{ objectFit: 'contain', objectPosition: 'center' }}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
