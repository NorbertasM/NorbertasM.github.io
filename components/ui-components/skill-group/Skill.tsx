import Image    from 'next/image'

interface Props {
    icon:  any
    title: string
}

const Skill = ({ icon, title }: Props) => <div>
    <Image src={icon} alt={title}/>
    <p>{title}</p>
</div>


export default Skill