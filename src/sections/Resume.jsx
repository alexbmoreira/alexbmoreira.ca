import { Container, SectionTitle, ResumeTerm } from '@components';
import { experience, education } from '@api';

const Resume = () => {
  return (
    <Container>
      <div className='flex flex-col items-center'>
        <SectionTitle id='experience' text='Experience'/>
        <div className='flex flex-col w-full space-y-4 mb-8'>
          {experience.map(job => <ResumeTerm key={job.org} term={job}/>)}
        </div>
        <SectionTitle id='education' text='Education'/>
        <div className='flex flex-col w-full space-y-4'>
          {education.map(term => <ResumeTerm key={term.org} term={term}/>)}
        </div>
      </div>
    </Container>
  )
}

export default Resume
