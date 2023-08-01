import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';

const CONTENT = [
  {
    locale: 'en',
    title: 'Contact Me',
  },
  {
    locale: 'fr',
    title: 'Contactez-moi',
  },
  {
    locale: 'cn',
    title: '联系我',
  },
];

export default function ContactMe() {
  const [isOpen, setIsOpen] = useState(false);
  const { locale } = useRouter();

  const content = useMemo(
    () => CONTENT.find((content) => content.locale === locale) || CONTENT[0],
    [locale]
  );

  return (
    <div className="fixed bottom-0 w-full">
      <div className="mx-auto bg-bg dark:bg-dark-bg z-50 w-full max-w-4xl drop-shadow-2xl border-solid border-t-2 border-b-0 tall:border-l-2 tall:border-r-2 border-secondary dark:border-primary">
        <div className="h-16 flex justify-center items-center w-full">
          <button
            className="h-full w-full"
            onClick={() => setIsOpen((state) => !state)}
          >
            <span className="h-fit text-xl font-medium">{content?.title}</span>
          </button>
        </div>
        <div
          className={`grid ${
            isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          } transition-all duration-200 eas-in-out`}
        >
          <div className="overflow-hidden max-h-[66vh]">
            <div className="p-8"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
