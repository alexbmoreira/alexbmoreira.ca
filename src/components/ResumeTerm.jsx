import { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ResumeTerm = ({term}) => {
  const [expanded, setExpanded] = useState(term.startExpanded);
  const contentRef = useRef(null);
  const [height, setHeight] = useState('0px');

  useEffect(() => {
    if (expanded) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight('0px');
    }
  }, [expanded]);

  return (
    <div>
      <div className='flex border-b-2 border-steel pb-3 mb-3 space-x-3'>
        <div class='w-20 md:w-24'>
          <img class='rounded' src={term.image} alt={term.org}/>
        </div>
        <div className='flex-grow'>
          <div className='text-2xl font-semibold'>{term.org}</div>
          <div className='text-midnight-light text-sm italic mb-1'>{term.time}</div>
          <div>{term.role}</div>
        </div>
        <div className='w-4 self-end text-steel cursor-pointer relative' onClick={() => setExpanded(!expanded)}>
          <FontAwesomeIcon className={`absolute left-0 bottom-0 transition-opacity duration-300 ${expanded ? 'opacity-0' : 'opacity-100'}`} icon='fa-solid fa-plus'/>
          <FontAwesomeIcon className={`absolute left-0 bottom-0 transition-opacity duration-300 ${expanded ? 'opacity-100' : 'opacity-0'}`} icon='fa-solid fa-minus'/>
        </div>
      </div>
      <div ref={contentRef} style={{ height }} className='transition-[height] duration-300 ease-in-out overflow-hidden'>
        {term.notes.map((note, index) => <div key={index} className='flex mb-1'>
          <div className='mr-2'>{'•'}</div>
          {note}
        </div>)}
      </div>
    </div>
  )
}

export default ResumeTerm
