import Image        from 'next/image'

import MessageIcon  from '../../../public/images/message.svg'

import styles       from './message.module.scss'


const Message = () => {
  return (
    <div className={styles.message}>
      <Image 
        src={MessageIcon}
        alt='message me'
        width='60'
        height='60'
      />
    </div>
  )
}

export default Message