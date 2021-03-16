import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Next List | Home</title>
        <meta name="keywords" content="next.js, List, home" />
      </Head>
      <div>
        <h1 className={styles.title}>Hello World</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iusto
          aspernatur porro optio perferendis deserunt tempora, explicabo,
          debitis ea quibusdam assumenda officiis obcaecati itaque voluptates
          iste nam accusamus? Accusantium, amet.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iusto
          aspernatur porro optio perferendis deserunt tempora, explicabo,
          debitis ea quibusdam assumenda officiis obcaecati itaque voluptates
          iste nam accusamus? Accusantium, amet.
        </p>
        <Link href="/list">
          <a className={styles.btn}>See Listing</a>
        </Link>
      </div>
    </>
  );
}
