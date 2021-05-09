import styles from "../styles/Layout.module.css";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Practicle File</title>
          <meta name="description" content="Online Practicle File" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {children}
        <footer className={styles.footer}>
        <a href="https://scyther.github.io/">
          <p className="footer_text">Made with ❤️ by Chirag Sharma</p>
        </a>
      </footer>
      </div>

    </>
  );
};

export default Layout;
