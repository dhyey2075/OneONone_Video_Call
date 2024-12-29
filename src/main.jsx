import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <html>
    <head>
      <title>OneONone Video Calling - Dekho</title>
    </head>
    <body className='bg-gray-800 text-white min-h-screen'>
      <StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StrictMode>
    </body>
  </html>
)
