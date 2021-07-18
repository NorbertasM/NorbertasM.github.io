import styles from './skill-group.module.scss'


interface Props {
  skills: Array<string>,
}


const SkillsContainer = (props: Props) => {
  const { skills } = props

  return (
    <div className={styles.column}>
      {skills.map(skill => <p key={skill}>{skill}</p>)}
    </div>
  )
}

export default SkillsContainer