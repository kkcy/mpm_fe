import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { SWRConfig } from 'swr'
import { BrowserRouter } from 'react-router-dom'

import reportWebVitals from './reportWebVitals'
import App from './App'
import './index.css'

const fetcher = async (...args) => {
  const url = args[0]
  const headers = args[1]

  return axios.get(url, { headers }).then((res) => res.data)
}

ReactDOM.render(
  <React.StrictMode>
    <SWRConfig value={{ fetcher }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SWRConfig>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
