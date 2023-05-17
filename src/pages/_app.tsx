import { AppProps } from 'next/app';
import './globals.css';
import Layout from '@/components/base/layout';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
