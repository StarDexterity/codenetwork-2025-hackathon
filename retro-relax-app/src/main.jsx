import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { CassetteProvider } from './cassetteContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CassetteProvider>
      <App />
    </CassetteProvider>
  </StrictMode>,
)
