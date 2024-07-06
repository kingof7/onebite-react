import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render( // id="root" html을 ReactDom으로 변환해준다.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
