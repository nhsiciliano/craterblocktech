import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Intro from '../components/Intro'
import Services from '../components/Services'
import { data } from '../data'
import Testimonials from '../components/Testimonials'

export default function Home({services}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Crater Block Tech</title>
        <meta name="description" content="Personal Portfolio" />
      </Head>
      <Intro />
      <Services services={services} />
      <Testimonials />
    </div>
  )
}

export const getStaticProps = async () => {
  const services = data;
  return {
    props: { services },
  }
}
