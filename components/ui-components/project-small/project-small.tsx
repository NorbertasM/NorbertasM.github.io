import Image  from 'next/image'

interface Props {
  icon:  StaticImageData,
  title: string,
}


const ProjectSmall = (props: Props) => {
  const { icon, title } = props
  return (
    <div>
      <Image src={icon} alt={title} width='120' height='120'/>
    </div>
  )
}

export default ProjectSmall