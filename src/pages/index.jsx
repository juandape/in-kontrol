import Head from 'next/head';
import { Inter } from 'next/font/google';
import Dashboard from './Dashboard';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>In Kontrol</title>
        <meta name='In Kontrol' content='In Kontrol App' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <div>
          <Dashboard />
        </div>
      </main>
    </>
  );
}
