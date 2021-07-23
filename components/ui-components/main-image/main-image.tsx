import Image  from 'next/image'

import face   from '../../../public/images/foto0.jpg'

import styles from './main-image.module.scss'


const MainImage = () => {
  return (
    <div className={styles.profileImage}>
      <Image
        src={face}
        alt='Norbertas Murauskas'
      />
    </div>
  )
}

export default MainImage