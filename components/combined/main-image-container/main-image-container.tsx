import MainImage  from '../../ui-components/main-image/main-image'
import Profession from '../../ui-components/profession/profession'
import Triangle   from '../../ui-components/triangle/triangle'

import styles     from './main-image-container.module.scss'


const MainImageContainer = () => {
  return (
    <div className={styles.mainImageContainer}>
      <div className={styles.nameContainer}>
        <h1>NORBERTAS</h1>
      </div>
      <div className={styles.imageContainer}>
        <MainImage />
      </div>
      <div className={styles.surnameContainer}>
        <h1>MURAUSKAS</h1>
      </div>
      <div className={styles.triangleContainer}>
        <Triangle/>
      </div>
      <div className={styles.professionContainer}>
        <Profession />
      </div>
    </div>
  )
}

export default MainImageContainer