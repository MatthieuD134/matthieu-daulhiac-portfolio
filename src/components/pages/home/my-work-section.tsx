import { useRouter } from 'next/router';
import { poppins } from '../../base/fonts';
import { useMemo } from 'react';

const CONTENT = [
  {
    locale: 'en',
    title: 'My Work',
    content:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
  {
    locale: 'fr',
    title: 'Mes Projets',
    content:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
  {
    locale: 'cn',
    title: '我的工作经历',
    content:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
];

const MyWorkSection = () => {
  const { locale } = useRouter();

  const content = useMemo(
    () => CONTENT.find((content) => content.locale === locale),
    [locale]
  );

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 flex flex-col">
      <h2
        className={`uppercase text-4xl md:text-7xl ${poppins.className} font-semibold`}
      >
        {content?.title}
      </h2>
      <p className="my-10">{content?.content}</p>
    </section>
  );
};

export default MyWorkSection;
