import Skills    from '../Skills/Skills'

import styles    from './main-content.module.scss'


const Main = () => {
  return (
    <main className={styles.main}>
      <Skills />
      <div className={styles.footer}>
        <p className={styles.copyRight}>NORBERTAS MURAUSKAS©</p>
      </div>
    </main>
  )
}

export default Main