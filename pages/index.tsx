import { useState } from 'react'
import Head         from 'next/head'

import MainContent  from '../components/main-components/main-content/main-content'
import MainFooter   from '../components/main-components/main-footer/main-footer'
import MainHeader   from '../components/main-components/main-header/main-header'

import styles       from '../styles/Home.module.scss'

const Home = () => {
  const [showSkills, setShowSkills] = useState(true)

  return (
    <div className={styles.container}>
      <Head>
        <title>Norbertas Murauskas</title>
        <meta name='description' content='Norbert Murauskas Portfolio' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <MainHeader toggleSkills={setShowSkills} showSkills={showSkills}/>
      <MainContent showSkills={showSkills}/>
      <MainFooter showSkills={showSkills} />
    </div>
  )
}

export default Home