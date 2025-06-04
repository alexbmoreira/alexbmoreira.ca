import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@styles/tailwind.css'
import '@styles/fonts.css'
import Root from './Root'

import { library } from '@fortawesome/fontawesome-svg-core'
import { all } from '@awesome.me/kit-671373bb61/icons'

library.add(...all)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root/>
  </StrictMode>,
)
