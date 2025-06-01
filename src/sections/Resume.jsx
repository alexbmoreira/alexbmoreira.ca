import { Container, Header, ResumeTerm } from '@components';
import { experience, education } from '@api';

const Resume = () => {
  return (
    <Container>
      <div className='flex flex-col items-center'>
        <Header id='experience' text='Experience'/>
        <div className='flex flex-col w-full space-y-4 mb-8'>
          {experience.map(job => <ResumeTerm term={job}/>)}
        </div>
        <Header id='education' text='Education'/>
        <div className='flex flex-col w-full space-y-4'>
          {education.map(term => <ResumeTerm term={term}/>)}
        </div>
      </div>
    </Container>
  )
}

export default Resume
