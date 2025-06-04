import { useState, useEffect } from 'react';
import { Hero, About, Resume, Portfolio, Footer } from './sections'
import { Menu } from '@components'
import { motion } from "motion/react"

const Root = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowMenu(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showMenu ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <Menu/>
      </motion.div>
      <Hero/>
      <About/>
      <Resume/>
      <Portfolio/>
      <Footer/>
    </>
  )
}

export default Root;
