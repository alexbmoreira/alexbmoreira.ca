import { useState } from 'react';
import { Container, SectionTitle, Link, SelectionButton, Project } from '@components';
import { projects } from '@api';
import _ from 'lodash';
import { motion, AnimatePresence } from "motion/react"

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = () => {
    if (filter === 'all') return projects;

    return _.filter(projects, { type: filter });
  }
  
  return (
    <Container className='bg-platinum'>
      <div className='flex flex-col items-center'>
        <SectionTitle id='projects' text='Projects'/>
        <div className='text-center mb-6'>
          <span>A small collection of notable personal projects.</span>
          <div>
            <span>{'For more, check out my '}</span>
            <Link className='text-cornflower' href='https://github.com/alexbmoreira' target='_blank'>{'Github!'}</Link>
          </div>
        </div>
        <div className='flex justify-center w-full flex-wrap gap-2 mb-4'>
          <SelectionButton text='All' onSelect={() => setFilter('all')} selected={filter === 'all'}/>
          <SelectionButton text='Websites & Apps' onSelect={() => setFilter('app')} selected={filter === 'app'}/>
          <SelectionButton text='Packages' onSelect={() => setFilter('package')} selected={filter === 'package'}/>
          <SelectionButton text='Homelab' onSelect={() => setFilter('homelab')} selected={filter === 'homelab'}/>
        </div>
        <div className='flex flex-col w-full space-y-4'>
        <AnimatePresence>
          {filteredProjects().map(project => <motion.div key={project.name} initial={{opacity: 0}} animate={{ opacity: 1 }} exit={{opacity: 0}} transition={{ duration: 0.2, ease: 'easeInOut' }} layout>
            <Project project={project}/>
          </motion.div>)}
        </AnimatePresence>
        </div>
      </div>
    </Container>
  )
}

export default Portfolio
