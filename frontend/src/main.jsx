import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom'
import './css/index.css'
=======
import './index.css'
>>>>>>> 9a0876d1c72deb9ce13bde5b48465adfa73c8189
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<<<<<<< HEAD
    <BrowserRouter> 
      <App/> 
    </BrowserRouter>
=======
    <App />
>>>>>>> 9a0876d1c72deb9ce13bde5b48465adfa73c8189
  </StrictMode>,
)
