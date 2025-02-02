import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router'
import './index.css'
// import store from './redux/store'
import App from './App.jsx'
import { AuthProvider } from './auth/Authentication.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider >
      <BrowserRouter>
      <App />
      </BrowserRouter>
      </AuthProvider>
  </StrictMode>,
)
