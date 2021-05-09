import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { SWRConfig } from 'swr'
import { BrowserRouter } from 'react-router-dom'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'

import reportWebVitals from './reportWebVitals'
import App from './App'
import './index.css'

const fetcher = async (...args) => {
  const url = args[0]
  const headers = args[1]

  return axios.get(url, { headers }).then((res) => res.data)
}

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#827CA6'
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#665191'
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <SWRConfig value={{ fetcher }}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </SWRConfig>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
