import Image  from 'next/image'

import styles from './Skill.module.scss'

interface Props {
    icon:  StaticImageData
    title: string
}

const Skill = ({ icon, title }: Props) => {
  return (
    <div className={styles.skillContainer}>
      <Image src={icon} alt={title} width={30} height={30}/>
      <p>{title}</p>
    </div>
  )
}


export default Skill