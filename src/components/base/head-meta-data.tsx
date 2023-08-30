import Head from 'next/head';

const HeadMetaData = () => {
  const title =
    'Matthieu Daulhiac | Front-end, Blockchain & Software Engineer Freelance';
  const description =
    'Matthieu Daulhiac personal website. Provide services as a Front-end, Blockchain & Software Engineer Freelance. Specialized in technologies such as React, NextJs, NestJs, Solidity, TypeScript, PostgreSQL, TypeORM, Alchemy, Wagmi, etc';
  const imageUrl = '/images/banner.png';
  const url = 'https://matthieudaulhiac.com';

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* OpenGraph tags */}
      <meta
        key="og:title"
        name="og:title"
        property="og:title"
        content={title}
      />
      <meta
        key="og:description"
        name="og:description"
        property="og:description"
        content={description}
      />
      <meta key="og:type" name="og:type" property="og:type" content="website" />
      <meta key="og:url" name="og:url" property="og:url" content={url} />
      <meta
        key="og:image"
        name="og:image"
        property="og:image"
        content={imageUrl}
      />
      <meta
        key="og:image:alt"
        name="og:image:alt"
        property="og:image:alt"
        content={title}
      />
      <meta
        key="og:site_name"
        name="og:site_name"
        property="og:site_name"
        content={title}
      />

      {/* Twitter Tags */}
      <meta
        key="twitter:card"
        name="twitter:card"
        property="twitter:card"
        content="summary_large_image"
      />
      <meta
        key="twitter:title"
        name="twitter:title"
        property="twitter:title"
        content={title}
      />
      <meta
        key="twitter:description"
        name="twitter:description"
        property="twitter:description"
        content={description}
      />
      <meta
        key="twitter:site"
        name="twitter:site"
        property="twitter:site"
        content={`@MattDaulhiac`}
      />
      <meta
        key="twitter:image"
        name="twitter:image"
        property="twitter:image"
        content={imageUrl}
      />
      <meta
        key="twitter:image:alt"
        name="twitter:image:alt"
        property="twitter:image:alt"
        content={title}
      />
    </Head>
  );
};

export default HeadMetaData;
