import styles       from './toggle.module.scss'

interface Props {
  showSkills:   boolean
  onToggle: (T: boolean) => void
}

const Toggle = ({ showSkills, onToggle }: Props) => {

  const click = () => {
    onToggle(!showSkills)
  }

  return (
    <div>
      <h3 onClick={click} className={styles.about}>ABOUT ME</h3>
      <h3 onClick={click} className={styles.skills}>SKILLS</h3>
      <label className={styles.switch}>
        <input
          type='checkbox' onChange={click} checked={!showSkills} />
        <span
          className={`
          ${styles.slider}
          ${styles.round}
          ${showSkills ? styles.darkSlider : styles.lightSlider}
          `}
        ></span>
      </label>
    </div>
  )
}


export default Toggle