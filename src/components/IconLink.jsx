import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IconLink = ({icon, href, download}) => {
  return (
    <a href={href} target='_blank' className='duration-300 ease-in-out hover:text-cornflower active:text-cornflower-dark' download={download}>
      <FontAwesomeIcon icon={icon}/>
    </a>
  )
}

export default IconLink
