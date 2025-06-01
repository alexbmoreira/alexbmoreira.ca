import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Link = ({href, children, className, ...rest}) => {
  return (
    <a href={href} className={`duration-300 ease-in-out hover:text-cornflower active:text-cornflower-dark ${className ? className : ''}`}>
      {children}
    </a>
  )
}

export default Link
