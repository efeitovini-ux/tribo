import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppObrigado from './AppObrigado'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppObrigado />
  </StrictMode>,
)
