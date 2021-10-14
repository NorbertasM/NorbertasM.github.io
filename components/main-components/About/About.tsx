import Image  from 'next/image'

import Face   from '../../../public/images/face.jpg'

import styles from './About.module.scss'

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.header}>
        <div className={styles.imageContainer}>
          <Image
            alt='Photo of Norbertas Murauskas'
            className={styles.image}
            height={80}
            src={Face}
            width={80}
          />
        </div>
        <h3 className={styles.introduction}>Hello, I am</h3>
        <h3 className={styles.name}>Norbertas Murauskas</h3>
        <h3 className={styles.profession}>A Web developer</h3>
      </div>
      <div className={styles.description}>
        <p className={styles.student}>
          I am third year student at &quot;Lithuanian Business University Of Applied Sciences&quot;
        </p>
        <p className={styles.work}>
          Currently I am working at &quot;Nacionalinis Telekomunikacijų tinklas&quot;
          as Front-End web developer
        </p>
      </div>
    </div>
  )
}

export default About