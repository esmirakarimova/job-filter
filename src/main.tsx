import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import JobFilter from './components/JobFilter/JobFilter.tsx'
import './index.css'; 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <JobFilter />
  </StrictMode>,
)
