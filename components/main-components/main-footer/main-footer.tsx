import styles from './main-footer.module.scss'

interface Props {
  showSkills: boolean
}

const MainFooter = ({ showSkills }: Props) => {
  return (
    <div
      className={`
      ${styles.footer}
      ${showSkills ? styles.footerDark : styles.footerLight}
      `}
    >
      <p className={styles.copyRight}>NORBERTAS MURAUSKAS©</p>
    </div>
  )
}

export default MainFooter
