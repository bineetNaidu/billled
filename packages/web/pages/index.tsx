import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Billled</title>
        <meta
          name="description"
          content="💰 Easy, Breezy, Beautiful Finance Management. A finance management tool for you."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Billled</h1>
      </main>
    </>
  );
};

export default Home;
