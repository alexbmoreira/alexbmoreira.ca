import headshot from '@assets/headshot.jpg';
import { Link } from '@components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Bio = () => {
  return (
    <div>
      <div className='text-2xl mb-3 text-center md:text-left'>{'About Me'}</div>
      <div className='text-justify md:text-left'>
        {"As a software developer with three years of experience working with Ruby on Rails and React, I've built a strong foundation in modern web front-end and back-end development. I am passionate about computing and am always looking for ways to improve and expand my knowledge and skills. In my current role, I have successfully developed and delivered a number of complex projects, and I am excited to continue learning and growing in my field."}
      </div>
    </div>
  )
}

const Contact = () => {
  return (
    <div>
      <div className='text-2xl mb-3 text-center md:text-left'>{'Contact'}</div>
      <div className='flex flex-col space-y-2'>
        <Link href='mailto:alexbmoreira@gmail.com'>
          <FontAwesomeIcon icon='fa-solid fa-envelope'/>
          <span className='ml-2'>{'alexbmoreira@gmail.com'}</span>
        </Link>
        <Link href='tel:+14164336886'>
          <FontAwesomeIcon icon='fa-solid fa-phone'/>
          <span className='ml-2'>{'(416) 433-6886'}</span>
        </Link>
      </div>
    </div>
  )
}

const About = () => {
  return (
    <div id='about' className='flex flex-col items-center bg-indigo text-snow p-8 md:flex-row md:px-32'>
      <div className='w-1/2 md:w-1/4 lg:w-1/6'>
        <img className='rounded-full' src={headshot} alt='A picture of me'/>
      </div>
      <div className='flex flex-col mt-4 space-y-4 w-full lg:w-5/6 md:w-3/4 md:ml-8 md:mt-0'>
        <Bio/>
        <Contact/>
      </div>
    </div>
  )
}

export default About
