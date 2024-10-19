import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import ViewProvider from './contexts/ViewContext.jsx'

import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ViewProvider>
      <App /> 
    </ViewProvider>
  </StrictMode>,
)
  