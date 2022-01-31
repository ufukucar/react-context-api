import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

import 'jquery'
import 'popper.js/dist/umd/popper'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
