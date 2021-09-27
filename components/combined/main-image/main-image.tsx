import Image  from 'next/image'

import Shape  from '../../../public/images/shape6.svg'

import styles     from './main-image.module.scss'


const MainImageContainer = () => {
  return (
    <div className={styles.mainImageContainer}>
      <div className={styles.imageContainer}>
        <Image
          src={Shape}
          alt='shape'
        />
      </div>
    </div>
  )
}

export default MainImageContainer