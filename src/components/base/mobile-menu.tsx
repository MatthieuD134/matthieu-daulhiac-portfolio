import { useRef, useState } from 'react';
import BurgerMenuIcon from '../icons/burger-menu-icon';
import useOnClickOutside from '@/hooks/use-on-click-outside';
import ThemeToggle from './theme-toggle';
import LanguageSelector from './language-selector';
import CrossIcon from '../icons/cross-icon';
import Link from 'next/link';
import { useRouter } from 'next/router';

const MOBILE_MENU_CONTENT = [
  {
    locale: 'en',
    menuItems: [
      {
        name: 'Tech Stack',
        href: '#tech-stack',
      },
      {
        name: 'About me',
        href: '#about-me',
      },
      {
        name: 'My work',
        href: '#my-work',
      },
    ],
  },
  {
    locale: 'fr',
    menuItems: [
      {
        name: 'Stack Technique',
        href: '#tech-stack',
      },
      {
        name: 'Qui suis-je?',
        href: '#about-me',
      },
      {
        name: 'Mes Projets',
        href: '#my-work',
      },
    ],
  },
  {
    locale: 'cn',
    menuItems: [
      {
        name: '技术堆栈',
        href: '#tech-stack',
      },
      {
        name: '关于我',
        href: '#about-me',
      },
      {
        name: '我的工作经历',
        href: '#my-work',
      },
    ],
  },
];

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const { locale } = useRouter();

  useOnClickOutside(ref, () => {
    if (isMenuOpen) setIsMenuOpen(false);
  });

  return (
    <>
      <button className="p-2 md:hidden" onClick={() => setIsMenuOpen(true)}>
        <BurgerMenuIcon />
      </button>
      <div
        className={`fixed md:hidden top-0 right-0 w-screen h-screen z-[9999] transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      />
      <div
        className={`fixed md:hidden top-0 h-screen right-0 w-3/4 max-w-md z-[9999] bg-bg dark:bg-dark-bg transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        ref={ref}
      >
        <div className={`py-2 px-5 w-full flex justify-end gap-5`}>
          <ThemeToggle tabIndex={-1} />
          <LanguageSelector tabIndex={-1} />
          <button
            className="p-2"
            onClick={() => setIsMenuOpen(false)}
            tabIndex={-1}
          >
            <CrossIcon />
          </button>
        </div>
        <div className="m-10 flex flex-col text-2xl gap-10">
          {MOBILE_MENU_CONTENT.find(
            (content) => content.locale === locale
          )?.menuItems.map((item, index) => (
            <div key={item.name} className="flex">
              <span className="text-xs opacity-50">0{index + 1}</span>
              <Link
                key={item.name}
                className="px-1 relative w-fit before:absolute before:left-0 before:bottom-0 before:h-2 before:w-10 before:bg-secondary dark:before:bg-primary focus:before:w-full hover:before:w-full before:transition-all before:duration-300 before:ease-in-out before:-z-[10]"
                href={item.href}
                scroll={false}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
