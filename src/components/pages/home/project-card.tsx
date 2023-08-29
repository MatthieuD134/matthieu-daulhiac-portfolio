import LinkButton from '@/components/base/button/link-button';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

export interface Project {
  id: number;
  name: string;
  description: string | JSX.Element;
  href: string;
  imageUrl: string;
  tags: string[];
  colSpans?: number;
}

const ProjectCard = ({ project }: { project: Project }) => {
  const { locale } = useRouter();

  const colSpans = project.colSpans
    ? `col-span-1 md:col-span-${project.colSpans}`
    : 'col-span-1';

  const buttonText = useMemo(
    () =>
      locale
        ? locale === 'en'
          ? 'View Project'
          : locale === 'fr'
          ? 'Voir le projet'
          : '查看项目'
        : 'View Project',
    [locale]
  );

  return (
    <div
      className={`w-full drop-shadow-2xl p-5 ${colSpans} flex flex-col justify-between gap-5 bg-gradient-to-b from-bg-gradient-start to-bg dark:from-dark-bg-gradient-start dark:to-dark-bg`}
    >
      <div className="relative w-full aspect-square">
        <Image
          alt={`${project.name} illustration`}
          src={project.imageUrl}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl">{project.name}</h3>
        <span className="text-xs opacity-50 flex flex-wrap gap-x-2 leading-none">
          {project.tags.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </span>
      </div>
      <LinkButton
        href={project.href}
        target="blank"
        className="text-sm md:text-md"
      >
        {buttonText}
      </LinkButton>
    </div>
  );
};

export default ProjectCard;
