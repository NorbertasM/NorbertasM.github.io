
import { projects } from '../../../data/projects'
import ProjectSmall from '../../ui-components/project-small/project-small'

import styles       from './projects.module.scss'

const Projects = () => {
  return (
    <div className={styles.container}>
      <h2>PROJECTS:</h2>
      <div className={styles.projects}>
        {projects.map(({ icon, title }) => {
          return (
            <ProjectSmall
              icon={icon}
              key={title}
              title={title}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Projects