import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ResultProvider from './contexts/results'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ResultProvider>
      <App />
    </ResultProvider>
  </React.StrictMode>,
)
