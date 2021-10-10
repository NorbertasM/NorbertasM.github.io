import Skills from '../Skills/Skills'

import styles from './main-content.module.scss'

interface Props {
  showSkills: boolean
}

const Main = ({ showSkills }: Props) => {
  return (
    <main className={styles.main}>
      {showSkills ? <Skills /> : <h1>ABot me</h1>}
    </main>
  )
}

export default Main