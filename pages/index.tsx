import Head        from 'next/head'

import MainContent from '../components/combined/main-content/main-content'
import MainFooter  from '../components/combined/main-footer/main-footer'
import MainHeader  from '../components/combined/main-header/main-header'

import styles      from '../styles/Home.module.scss'

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Norbertas Murauskas</title>
        <meta name='description' content='Norbert Murauskas Portfolio' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <MainHeader />
      <MainContent />
      <MainFooter />
    </div>
  )
}

export default Home