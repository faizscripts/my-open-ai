import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.scss'
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App from './App.tsx'
import { ResourceHints } from './ResourceHints.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ResourceHints />
    <App />
  </StrictMode>,
)
