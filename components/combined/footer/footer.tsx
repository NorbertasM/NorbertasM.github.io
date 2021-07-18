import Image    from 'next/image'

import linkedIn from '../../../public/images/linkedIn.png'

import styles   from './footer.module.scss'


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contact}>
        <div className={styles.linkedIn}>
          <Image
            src={linkedIn}
            alt='linkedIn'
            width='20'
          />
            <p>LinkedIn</p>
        </div>
      <p>murauskasnorbertas@gmail.com</p>
      </div>
    </footer>
  )
}

export default Footer