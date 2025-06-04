import { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Header } from '@components';
import { AnimatePresence, motion } from "motion/react"

const MenuItem = ({text, href, onClick}) => {
  return <a className='duration-300 ease-in-out hover:text-cornflower-light active:text-cornflower-dark' href={href} onClick={onClick}>{text}</a>;
}

const Menu = ({}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <div
        className='flex bg-midnight text-snow fixed top-4 left-4 justify-center items-center cursor-pointer w-10 h-10 text-lg rounded-full'
        onClick={() => setExpanded(!expanded)}
      >
        <FontAwesomeIcon icon='fa-solid fa-bars'/>
      </div>
      <AnimatePresence mode='wait'>
        {expanded && <motion.div
          className='flex flex-col bg-midnight text-snow p-4 space-y-2 rounded-2xl fixed left-9 top-16 origin-top-left'
          layout
          transition={{
              type: "spring",
              visualDuration: 0.2,
              bounce: 0.2,
          }}
          initial={{ left: '2.25rem', scale: 0 }}
          animate={{ left: '1rem', scale: 1 }}
          exit={{ left: '2.25rem', scale: 0 }}
        >
          <MenuItem text='About' href='#about' onClick={() => setExpanded(false)}/>
          <MenuItem text='Experience' href='#experience' onClick={() => setExpanded(false)}/>
          <MenuItem text='Education' href='#education' onClick={() => setExpanded(false)}/>
          <MenuItem text='Projects' href='#projects' onClick={() => setExpanded(false)}/>
        </motion.div>}
      </AnimatePresence>
    </div>
  )
}

export default Menu
