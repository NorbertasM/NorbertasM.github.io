import { useState } from 'react'

import styles       from './toggle.module.scss'


const Toggle = () => {
  const [checked, setChecked] = useState(false)

  const click = () => {
    setChecked(prev => !prev)
  }

  return (
    <div>
      <h3 onClick={click} className={styles.about}>ABOUT ME</h3>
      <h3 onClick={click} className={styles.skills}>SKILLS</h3>
      <label className={styles.switch}>
        <input type='checkbox' onChange={click} checked={checked} />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
    </div>
  )
}


export default Toggle