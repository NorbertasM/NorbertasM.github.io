import {
  CSSTransition,
  SwitchTransition,
}             from 'react-transition-group'

import About  from '../About/About'
import Skills from '../Skills/Skills'

import styles from './main-content.module.scss'

interface Props {
  showSkills: boolean
}

const Main = ({ showSkills }: Props) => {
  return (
    <main className={styles.main}>
      <SwitchTransition>
        <CSSTransition
          classNames={{
            enterActive: styles.enterActive,
            enter:       showSkills ? styles.rightEnter : styles.leftEnter,
            exit:        styles.exit,
            exitActive:  showSkills ? styles.rightExitActive: styles.leftExitActive,
          }}
          timeout={300}
          key={showSkills ? 'showSkills' : 'showAbout'}
        >
          {showSkills ? <Skills key='showSkills' /> : <About key='showAbout' />}
        </CSSTransition>
      </SwitchTransition>
    </main>
  )
}

export default Main