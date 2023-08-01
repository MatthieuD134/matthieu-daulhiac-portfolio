import { ReactNode } from 'react';
import LanguageSelector from './language-selector';
import ThemeToggle from './theme-toggle';
import { robotoMono } from './fonts';
import MobileMenu from './mobile-menu';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ContactMe from './contact-me';

const DESKTOP_MENU_CONTENT = [
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

export default function Layout({ children }: { children: ReactNode }) {
  const { locale } = useRouter();

  return (
    <>
      <nav
        className={`sticky z-[99999] top-0 left-0 backdrop-blur-2xl py-2 px-5 w-full grid grid-cols-2 items-center md:grid-cols-5 gap-5 text-black dark:text-white ${robotoMono.className}`}
      >
        <div className="col-span-1"></div>
        <div className="col-span-3 hidden md:flex justify-center h-fit gap-5">
          {DESKTOP_MENU_CONTENT.find(
            (content) => content.locale === locale
          )?.menuItems.map((item, index) => (
            <div key={item.name} className="flex">
              <span className="text-xs opacity-50">0{index + 1}</span>
              <Link
                className="px-1 relative w-fit before:absolute before:left-0 before:bottom-0 before:h-2 before:w-10 before:bg-secondary dark:before:bg-primary focus:before:w-full hover:before:w-full before:transition-all before:duration-300 before:ease-in-out before:-z-[10]"
                href={item.href}
                scroll={false}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
        <div className="col-span-1 flex justify-end gap-5">
          <ThemeToggle />
          <LanguageSelector />
          <MobileMenu />
        </div>
      </nav>
      <main
        className={`min-h-screen text-black dark:text-white ${robotoMono.className} max-w-screen overflow-x-hidden`}
      >
        {children}
        <ContactMe />
      </main>
    </>
  );
}
