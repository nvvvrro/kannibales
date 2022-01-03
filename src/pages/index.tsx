import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../components";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kannibales SexShop</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main className={styles.main}>
          <div>
            <h1 className={styles.title}>
              Tiendita <a href="https://nextjs.org">Kannibales</a>
            </h1>
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default Home;
