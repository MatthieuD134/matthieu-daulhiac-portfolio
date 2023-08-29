import { useRouter } from 'next/router';
import { poppins } from '../../base/fonts';
import { useMemo } from 'react';
import ProjectCard, { Project } from './project-card';

const PROJECTS: { locale: string; projects: Project[] }[] = [
  {
    locale: 'en',
    projects: [
      {
        id: 1,
        name: 'WrappedPunks',
        description:
          'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        href: 'https://wrappedpunks.com/',
        imageUrl: '/images/wrappedpunks.png',
        tags: ['NFTs', 'Front-end', 'Smart-Contracts'],
      },
      {
        id: 1,
        name: 'OZU',
        description:
          'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        href: 'https://ozu.io/',
        imageUrl: '/images/ozu.webp',
        tags: ['Comics', 'Full-Stack', 'Smart-Contracts'],
      },
    ],
  },
  {
    locale: 'fr',
    projects: [
      {
        id: 1,
        name: 'WrappedPunks',
        description:
          'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        href: 'https://wrappedpunks.com/',
        imageUrl: '/images/wrappedpunks.png',
        tags: ['NFTs', 'Front-end', 'Contrats-Intelligents'],
      },
      {
        id: 1,
        name: 'OZU',
        description:
          'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        href: 'https://ozu.io/',
        imageUrl: '/images/ozu.webp',
        tags: ['Comics', 'Full-Stack', 'Contrats-Intelligents'],
      },
    ],
  },
  {
    locale: 'cn',
    projects: [
      {
        id: 1,
        name: 'WrappedPunks',
        description:
          'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        href: 'https://wrappedpunks.com/',
        imageUrl: '/images/wrappedpunks.png',
        tags: ['NFTs', '前段', '智能合约'],
      },
      {
        id: 1,
        name: 'OZU',
        description:
          'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        href: 'https://ozu.io/',
        imageUrl: '/images/ozu.webp',
        tags: ['漫画', '全段', '智能合约'],
      },
    ],
  },
];

const CONTENT = [
  {
    locale: 'en',
    title: 'My Work',
    content:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    projects: PROJECTS[0].projects,
  },
  {
    locale: 'fr',
    title: 'Mes Projets',
    content:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    projects: PROJECTS[1].projects,
  },
  {
    locale: 'cn',
    title: '我的工作经历',
    content:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    projects: PROJECTS[2].projects,
  },
];

const MyWorkSection = () => {
  const { locale } = useRouter();

  const content = useMemo(
    () => CONTENT.find((content) => content.locale === locale) || CONTENT[0],
    [locale]
  );

  return (
    <section
      id="my-work"
      className="max-w-6xl mx-auto px-4 py-16 flex flex-col"
    >
      <h2
        className={`uppercase text-5xl md:text-7xl ${poppins.className} font-semibold`}
      >
        {content.title}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 my-16">
        {content.projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default MyWorkSection;
