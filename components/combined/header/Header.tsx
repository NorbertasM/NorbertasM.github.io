import HeaderName from '../../ui-components/header-name/header-name';
import Toggle     from '../../ui-components/toggle/toggle';

import styles     from './header.module.scss'


const MainHeader = () => {
  return (
    <div className={styles.titleContainer}>
       <HeaderName />
       <div className={styles.toggle}>
        <Toggle />
      </div>
    </div>
  )
}

export default MainHeader