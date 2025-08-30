import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Portafolio from "./Pages/Portafolio.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Portafolio/>
  </StrictMode>,
)
