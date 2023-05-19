import { useRouter } from 'next/router';
import { poppins } from '../../base/fonts';
import EthereumLogo from '@/components/icons/ethereum-logo';
import { useMemo } from 'react';
import ReactLogo from '@/components/icons/react-logo';
import MonitorLogo from '@/components/icons/monitor-logo';

const TECH_STACK_TITLE = [
  {
    locale: 'en',
    title: 'Tech Stack',
  },
  {
    locale: 'fr',
    title: 'Stack Technique',
  },
  {
    locale: 'cn',
    title: '技术堆栈',
  },
];

const SOLIDITY_DEVELOPMENT_CONTENT = [
  {
    locale: 'en',
    title: 'Solidity',
    subtitle: 'Smart contracts',
    content:
      'Experience in developing smart contracts on mainnet, for standard NFTs (erc721, erc1155) as well as custom suite for DApp using different tools like Brownie, Hardhat, Remix',
  },
  {
    locale: 'fr',
    title: 'Solidity',
    subtitle: 'Contrats intelligents',
    content:
      'Expérience dans le développement de contrats intelligents sur mainnet, pour les NFT standard (erc721, erc1155) ainsi que des suites personnalisées pour DApp utilisant différents outils comme Brownie, Hardhat, Remix',
  },
  {
    locale: 'cn',
    title: 'Solidity',
    subtitle: '智能合约开发',
    content:
      '在主网上开发智能合约的经验，用于标准NFT（erc721，erc1155）以及使用不同工具（如Brownie，Hardhat，Remix）为DApp定制的套件',
  },
];

const FRONT_END_DEVELOPMENT_CONTENT = [
  {
    locale: 'en',
    title: 'Frontend Dev',
    subtitle: 'React, NextJS',
    content:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
  {
    locale: 'fr',
    title: 'Frontend Dev',
    subtitle: 'React, NextJS',
    content:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
  {
    locale: 'cn',
    title: '前端开发',
    subtitle: 'React, NextJS',
    content:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
];

const SOFTWARE_DEVELOPMENT_CONTENT = [
  {
    locale: 'en',
    title: 'Software',
    subtitle: 'Development',
    content:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
  {
    locale: 'fr',
    title: 'Developement',
    subtitle: 'Logiciel',
    content:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
  {
    locale: 'cn',
    title: ' 软件开发',
    subtitle: 'Python, Typescript',
    content:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
];

const TechStackSection = () => {
  const { locale } = useRouter();

  const solidityContent = useMemo(
    () =>
      SOLIDITY_DEVELOPMENT_CONTENT.find((content) => content.locale === locale),
    [locale]
  );

  const frontEndContent = useMemo(
    () =>
      FRONT_END_DEVELOPMENT_CONTENT.find(
        (content) => content.locale === locale
      ),
    [locale]
  );

  const SoftwareDevContent = useMemo(
    () =>
      SOFTWARE_DEVELOPMENT_CONTENT.find((content) => content.locale === locale),
    [locale]
  );

  return (
    <section className="max-w-6xl mx-auto min-h-screen px-4 py-10 flex flex-col">
      <h2
        className={`text-center uppercase text-4xl md:text-7xl ${poppins.className} font-semibold`}
      >
        {TECH_STACK_TITLE.find((content) => content.locale === locale)?.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 my-10 gap-5 md:gap-0">
        <div className=" border-2 p-8 border-solid border-gray-700 dark:border-gray-400 md:border-r-0">
          <div className="flex items-center mb-4">
            <ReactLogo className="w-10 h-10" />
            <div className="ml-4">
              <h3 className={`text-2xl font-semibold ${poppins.className}`}>
                {frontEndContent?.title}
                <br />

                {frontEndContent?.subtitle}
              </h3>
            </div>
          </div>
          <div>
            <p className="text-gray-700 dark:text-gray-400">
              {frontEndContent?.content}
            </p>
          </div>
        </div>
        <div className=" border-2 p-8 border-solid border-gray-700 dark:border-gray-400">
          <div className="flex items-center mb-4">
            <EthereumLogo className="w-10 h-10" />
            <div className="ml-4">
              <h3 className={`text-2xl font-semibold ${poppins.className}`}>
                {solidityContent?.title}
                <br />

                {solidityContent?.subtitle}
              </h3>
            </div>
          </div>
          <div>
            <p className="text-gray-700 dark:text-gray-400">
              {solidityContent?.content}
            </p>
          </div>
        </div>
        <div className=" border-2 p-8 border-solid border-gray-700 dark:border-gray-400 md:border-l-0">
          <div className="flex items-center mb-4">
            <MonitorLogo className="w-10 h-10" />
            <div className="ml-4">
              <h3 className={`text-2xl font-semibold ${poppins.className}`}>
                {SoftwareDevContent?.title}
                <br />

                {SoftwareDevContent?.subtitle}
              </h3>
            </div>
          </div>
          <div>
            <p className="text-gray-700 dark:text-gray-400">
              {SoftwareDevContent?.content}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
