import { Link } from '@components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-midnight text-snow p-6'>
      <div className='text-sm mb-2'>{'Alex Moreira'}</div>
      <div className='flex space-x-6'>
        <Link href='https://linkedin.com/in/alexbmoreira/'>
          <FontAwesomeIcon icon='fa-brands fa-linkedin'/>
        </Link>
        <Link href='https://github.com/alexbmoreira/'>
          <FontAwesomeIcon icon='fa-brands fa-github'/>
        </Link>
        <Link href='/Alex_Moreira_Resume.pdf' download>
          <FontAwesomeIcon icon='fa-solid fa-file-user'/>
        </Link>
      </div>
    </div>
  )
}

export default Footer
