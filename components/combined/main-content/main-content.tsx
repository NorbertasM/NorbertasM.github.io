
import MainImage from '../main-image/main-image'
import Projects  from '../projects/projects'
import Skills    from '../Skills/Skills'

import styles    from './main-content.module.scss'


const Main = () => {
  return (
    <main className={styles.main}>
      <MainImage />
      <Skills />
      <Projects />
    </main>
  )
}

export default Main