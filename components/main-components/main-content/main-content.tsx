import About  from '../About/About'
import Skills from '../Skills/Skills'

import styles from './main-content.module.scss'

interface Props {
  showSkills: boolean
}

const Main = ({ showSkills }: Props) => {
  return (
    <main className={styles.main}>
      {showSkills ? <Skills /> : <About />}
    </main>
  )
}

export default Main