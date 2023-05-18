import { AppProps } from 'next/app';
import './globals.css';
import Layout from '@/components/base/layout';
import ThemeContext from '@/components/base/theme-context';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeContext>
  );
}
