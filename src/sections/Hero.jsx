import { Link } from '@components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Hero = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-midnight text-snow p-8'>
      <div className='text-5xl mb-4 md:text-8xl'>Alex Moreira</div>
      <div className='text-2xl text-snow opacity-50 mb-2 md:text-3xl'>Software Developer</div>
      <div className='text-xl text-snow opacity-50 italic'>Toronto, ON</div>
      <hr className='h-px my-8 bg-snow opacity-50 w-1/2'/>
      <div className='flex text-4xl space-x-6'>
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

export default Hero
