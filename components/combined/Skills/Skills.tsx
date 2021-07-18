import {
  frontEndSkills,
  backEndSkills,
}                      from '../../../data/skills'
import SkillsContainer from '../../ui components/skill-group/skill-group'

import styles          from './Skills.module.scss'

const Skills = () => {
  return (
    <div className={styles.skillsContainer}>
      <div className={styles.title}>
        <h2>SKILLS:</h2>
      </div>
      <div className={styles.skills}>
        <SkillsContainer skills={frontEndSkills} />
        <SkillsContainer skills={backEndSkills} />
      </div>
    </div>
  )
}

export default Skills