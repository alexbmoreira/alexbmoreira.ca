import { IconLink } from '@components'

const Hero = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-midnight text-snow p-8'>
      <div className='text-5xl mb-4 md:text-8xl'>Alex Moreira</div>
      <div className='text-2xl text-snow-light mb-2 md:text-3xl'>Software Developer</div>
      <div className='text-xl text-snow-light italic'>Toronto, ON</div>
      <hr className='h-px my-8 bg-snow opacity-50 w-1/2'/>
      <div className='flex text-4xl space-x-6'>
        <IconLink href='https://linkedin.com/in/alexbmoreira/' icon='fa-brands fa-linkedin'/>
        <IconLink href='https://github.com/alexbmoreira/' icon='fa-brands fa-github'/>
        <IconLink href='/Alex_Moreira_Resume.pdf' download icon='fa-solid fa-file-user'/>
      </div>
    </div>
  )
}

export default Hero
