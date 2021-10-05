import Toggle     from '../../ui-components/toggle/toggle';

import styles     from './main-header.module.scss'


const MainHeader = () => {
  return (
    <div className={styles.headerContainer}>
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
        <Toggle />
      </div>
    </div>
  )
}

export default MainHeader