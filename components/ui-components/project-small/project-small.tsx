import Image from 'next/image'

import styles from './project-small.module.scss'

interface Props {
  completed: boolean,
  icon: StaticImageData,
  id: number,
  platform: Array<string>,
  technology: Array<string>,
  title: string,
  type: string,
}


const ProjectSmall = (props: Props) => {
  const { completed, icon, platform, technology, title } = props
  return (
    <div className={styles.container}>
      <Image src={icon} alt={title} width='120' height='120'/>
      <div className={styles.description}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.group}>
          <p>Platform:</p>
          <p>{platform[0]}</p>
        </div>
        <div className={styles.group}>
          <p>Stack:</p>
          <p>{technology[0]}</p>
        </div>
        <p className={completed ? styles.completed : styles.ongoing}>{completed ? 'Completed' : 'Ongoing'}</p>
      </div>
    </div>
  )
}

export default ProjectSmall