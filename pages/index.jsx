import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Hello World</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iusto
        aspernatur porro optio perferendis deserunt tempora, explicabo, debitis
        ea quibusdam assumenda officiis obcaecati itaque voluptates iste nam
        accusamus? Accusantium, amet.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iusto
        aspernatur porro optio perferendis deserunt tempora, explicabo, debitis
        ea quibusdam assumenda officiis obcaecati itaque voluptates iste nam
        accusamus? Accusantium, amet.
      </p>
      <Footer />
    </div>
  );
}
