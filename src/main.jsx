import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@styles/tailwind.css'
import '@styles/fonts.css'
import { Hero, About, Resume, Portfolio, Footer } from './sections'

import { library } from '@fortawesome/fontawesome-svg-core'
import { all } from '@awesome.me/kit-671373bb61/icons'

library.add(...all)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero/>
    <About/>
    <Resume/>
    <Portfolio/>
    <Footer/>
  </StrictMode>,
)
