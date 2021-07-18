import styles from './toggle.module.scss'


const Toggle = () => {
  return (
    <label className={styles.switch}>
      <input type='checkbox' />
      <span className={`${styles.slider} ${styles.round}`}></span>
    </label>
  ) 
}

export default Toggle