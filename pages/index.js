
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to 📒{" "}
        <Link href="/editor">
          <a>Practicle File</a>
        </Link>
      </h1>

      <p className={styles.description}>Get started by Creating an Account</p>

      <Link href="/SignUp">
        <a>
          <button className={styles.button}>Sign Up</button>
        </a>
      </Link>

      <p className={styles.description}>or Login</p>
      <Link href="/Login">
        <a>
          <button className={styles.button}>Log In</button>
        </a>
      </Link>
    </main>
  );
};

export default Home;
