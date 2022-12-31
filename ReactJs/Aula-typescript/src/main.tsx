import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './global.css'

// Typescript deu alerta de que o elemento pode não existir, porém passamos um -  !  - quando sabemos que o elemento irá existir
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

