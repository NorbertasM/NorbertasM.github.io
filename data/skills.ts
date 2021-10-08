import git           from '../public/images/icons/git.svg'
import javascript    from '../public/images/icons/javascript.svg'
import mongoDB       from '../public/images/icons/mongoDB.svg'
import nodeJS        from '../public/images/icons/nodeJS.svg'
import react         from '../public/images/icons/react.svg'
import redux         from '../public/images/icons/redux.svg'
import typescript    from '../public/images/icons/typescript.svg'
import sass          from '../public/images/icons/sass.svg'
import { SkillItem } from '../components/ui-components/skill-group/skill-group'

export const frontEndSkills: Array<SkillItem> = [
  { title: 'REACT JS', image: react},
  { title: 'JAVASCRIPT', image: javascript},
  { title: 'TYPESCRIPT', image: typescript},
  { title: 'SCSS', image: sass},
  { title: 'REDUX', image: redux},
]

export const backEndSkills: Array<SkillItem> = [
  { title: 'NODE JS', image: nodeJS},
  { title: 'EXPRESS JS', image: javascript},
  { title: 'MONGO DB', image: mongoDB},
  { title: 'MONGOOSE', image: mongoDB},
  { title: 'GIT', image: git},
]