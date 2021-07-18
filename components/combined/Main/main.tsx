
import MainImageContainer from '../main-image-container/main-image-container'
import Message            from '../../ui components/message/message'
import Skills             from '../Skills/Skills'

import styles             from './main.module.scss'


const Main  = () => {
  return (
    <main className={styles.main}>
      <MainImageContainer />
      <Skills />
      <Message />
    </main>
  )
}

export default Main