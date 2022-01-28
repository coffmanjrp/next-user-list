import Head from 'next/head';
import styles from '../styles/Home.module.css';

const About = () => {
  return (
    <>
      <Head>
        <meta name="keywords" content="next.js, List, about" />
        <meta name="description" content="Next.js List" />
        <meta name="robots" content="noindex, nofollow" />
        <title>Next User List | About</title>
      </Head>
      <div>
        <h1 className={styles.title}>About</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, corrupti
          quisquam ut quis nulla dignissimos commodi praesentium asperiores
          consequatur, molestias a odit minima cum quasi iste doloribus
          temporibus reprehenderit reiciendis!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, corrupti
          quisquam ut quis nulla dignissimos commodi praesentium asperiores
          consequatur, molestias a odit minima cum quasi iste doloribus
          temporibus reprehenderit reiciendis!
        </p>
      </div>
    </>
  );
};

export default About;
