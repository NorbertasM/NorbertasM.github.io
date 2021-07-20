import styles from './header-name.module.scss'


const HeaderName = () => {
  return (
    <div className={styles.title}>
      <h1 className={styles.surname}>MURAUSKAS</h1>
      <h1 className={styles.name}>NORBERTAS</h1>
    </div>
  )
}

export default HeaderName