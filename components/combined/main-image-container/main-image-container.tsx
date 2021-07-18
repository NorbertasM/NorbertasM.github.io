import MainImage  from '../../ui components/main-image/main-image'
import Profession from '../../ui components/profession/profession'
import Triangle   from '../../ui components/triangle/triangle'

import styles     from './main-image-container.module.scss'


const MainImageContainer = () => {
  return (
    <div className={styles.imageContainer}>
      <MainImage />
      <Triangle/>
      <Profession />
    </div>
  )
}

export default MainImageContainer