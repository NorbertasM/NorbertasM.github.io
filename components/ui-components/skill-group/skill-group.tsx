import Skill  from './Skill'
import styles from './skill-group.module.scss'


interface Props {
  skills: Array<SkillItem>,
}

 export interface SkillItem {
  image: SVGAElement
  title: string
}


const SkillsContainer = (props: Props) => {
  const { skills } = props

  return (
    <div className={styles.column}>
      {skills.map(({ image, title }) =>
        <Skill key={title} icon={image} title={title}/>
      )}
    </div>
  )
}

export default SkillsContainer