import Toggle from '../../ui-components/toggle/toggle'

import styles from './main-header.module.scss'

interface Props {
  showSkills:   boolean
  toggleSkills: (T: boolean) => void
}


const MainHeader = ({ showSkills, toggleSkills }: Props) => {
  return (
    <div
      className={`
        ${styles.headerContainer}
        ${showSkills ? styles.containerDark : styles.containerLight}
      `}
    >
      <div className={styles.nameContainer}>
        <h2>
          NORBERTAS MURAUSKAS
        </h2>
      </div>
      <div className={styles.profession}>
        <h2>
          WEB DEVELOPER
        </h2>
      </div>
      <div className={styles.toggle}>
        <Toggle onToggle={toggleSkills} showSkills={showSkills}/>
      </div>
    </div>
  )
}

export default MainHeader