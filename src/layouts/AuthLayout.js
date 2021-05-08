import { Paper } from '@material-ui/core'
import React from 'react'

const AuthLayout = ({ children }) => {
  return (
    <Paper
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {children}
    </Paper>
  )
}

export default AuthLayout
