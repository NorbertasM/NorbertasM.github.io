import Hamburger from '../../ui-components/hamburger/hamburger';
import Toggle     from '../../ui-components/toggle/toggle';

import styles     from './main-header.module.scss'


const MainHeader = () => {
  return (
    <div className={styles.titleContainer}>
      <div className={styles.hamburger}>
        <Hamburger />
      </div>
       <div className={styles.toggle}>
        <Toggle />
      </div>
    </div>
  )
}

export default MainHeader