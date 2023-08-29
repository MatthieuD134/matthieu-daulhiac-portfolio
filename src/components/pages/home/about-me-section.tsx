import { useRouter } from 'next/router';
import { poppins } from '../../base/fonts';
import { useMemo } from 'react';
import Image from 'next/image';
import LinkButton from '@/components/base/button/link-button';

const CONTENT = [
  {
    locale: 'en',
    title: 'About Me',
    content: (
      <>
        Hello, My name is Matthieu, I am a software engineer and blockchain
        enthusiast, building great apps with passion
      </>
    ),
    button: 'My Resume',
  },
  {
    locale: 'fr',
    title: 'Qui suis-je?',
    content: (
      <>
        Bonjour, je m&apos;appelle Matthieu. Je suis ingénieur logiciel et
        passionné par la blockchain. Je construis des applications
        exceptionnelles avec passion.
      </>
    ),
    button: 'Mon CV',
  },
  {
    locale: 'cn',
    title: '关于我',
    content: (
      <>
        你好，我叫马修，我是一名软件工程师，也是区块链爱好者。我充满热情，致力于构建优秀的应用程序。
      </>
    ),
    button: ' 我的简历',
  },
];

const AboutMeSection = () => {
  const { locale } = useRouter();

  const content = useMemo(
    () => CONTENT.find((content) => content.locale === locale) || CONTENT[0],
    [locale]
  );

  return (
    <section
      id="about-me"
      className="max-w-6xl mx-auto px-4 py-16 flex flex-col"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0">
        <div className="flex flex-col justify-center">
          <h2
            className={`uppercase text-5xl md:text-7xl ${poppins.className} font-semibold`}
          >
            {content?.title}
          </h2>

          <p className="my-10 text-lg">{content?.content}</p>
          <LinkButton href="/docs/resume-EN-CN.pdf" target="blank">
            {content?.button}
          </LinkButton>
        </div>
        <div className="relative h-full w-full min-h-[500px]">
          <Image
            alt=""
            src="/images/about-me-illustration.png"
            fill
            style={{ objectFit: 'contain', objectPosition: 'center' }}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
