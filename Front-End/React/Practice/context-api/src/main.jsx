import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from './Context/ThemeContext'
import './theme.css'

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <App />
    <ToastContainer/>
  </ThemeProvider>
)
