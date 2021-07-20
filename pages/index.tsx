import Head   from 'next/head'

import Footer     from '../components/combined/footer/footer'
import MainHeader from '../components/combined/main-header/main-header'
// import Main   from '../components/combined/main/main'
import styles from '../styles/Home.module.scss'


const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Norbertas Murauskas</title>
        <meta name="description" content="Norbert Murauskas Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainHeader />
      {/* <Main /> */}
      <Footer />
    </div>
  )
}

export default Home