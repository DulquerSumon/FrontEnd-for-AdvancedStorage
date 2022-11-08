import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AdvancedStorage from "../components/AdvancedStorage";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Advanced Storage</title>
        <meta name="description" content="Our smart contract lottery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <br />
      <AdvancedStorage />
      <Footer />
    </div>
  );
}
