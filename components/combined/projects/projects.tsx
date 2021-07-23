
import { projects } from '../../../data/projects'
import ProjectSmall from '../../ui-components/project-small/project-small'

import styles       from './projects.module.scss'

const Projects = () => {
  return (
    <div className={styles.container}>
      <h2>PROJECTS:</h2>
      {projects.map(project => {
        const { completed, icon, id, platform, technology, title, type} = project
        return (
          <ProjectSmall
            completed={completed}
            icon={icon}
            id={id}
            key={id}
            platform={platform}
            technology={technology}
            title={title}
            type={type}
          />
        )
      })}
    </div>
  )
}

export default Projects