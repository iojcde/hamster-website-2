import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>움칫땃쥣~🎶 쥑쥑✌︎</title>
        <meta name="description" content="움칫땃쥣~🎶 쥑쥑✌︎" />
        <link rel="icon" href="/hamster.png" />
      </Head>

      <main className={styles.main}>
        <h1 style={{ fontSize: "96px" }}>움칫땃쥣~🎶 쥑쥑✌︎</h1>
        <iframe
          width="1280"
          style={{ borderRadius: "12px", border: "0px" }}
          height="720"
          src="https://www.youtube.com/embed/HHGXO0jWMbQ?autoplay=1&loop=1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </main>
    </div>
  );
};

export default Home;
