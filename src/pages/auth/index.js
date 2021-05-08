import React from 'react'
import Typography from '@material-ui/core/Typography'
import AuthForm from '../../components/auth/AuthForm'
import { Box } from '@material-ui/core'

const AuthPage = () => {
  return (
    <Box minWidth="50vw">
      <Typography variant="h3">MPM</Typography>
      <Box p={1} />
      <AuthForm />
    </Box>
  )
}

export default AuthPage
