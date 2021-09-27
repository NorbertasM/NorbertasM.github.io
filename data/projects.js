import GetTheCheese from '../public/images/getTheCheese.png'
import homeIt       from '../public/images/homeIt.png'
import pliusTv      from '../public/images/pliusTv.png'
import kopa         from '../public/images/kopa.jpg'


export const projects = [
  {
    completed:  true,
    icon:       GetTheCheese,
    id:         0,
    platform:   ['Android'],
    technology: ['C#', 'Unity'],
    title:      'Get The Cheese',
    type:       'Mobile Game',
  },
  {
    completed:  true,
    icon:       pliusTv,
    id:         1,
    platform:   ['Samsung TV', 'LG webOS'],
    technology: ['React js'],
    title:      'PliusTv',
    type:       'Streaming service',
  },
  {
    completed:  false,
    icon:       homeIt,
    id:         2,
    platform:   ['Web'],
    technology: ['React js', 'Mongo DB', 'Express js'],
    title:      'HomeIt',
    type:       'Web App',
  },
  {
    completed:  false,
    icon:       kopa,
    id:         3,
    platform:   ['Web'],
    technology: ['React js', 'Mongo DB', 'Express js'],
    title:      'Kopa',
    type:       'Web App',
  },
] 