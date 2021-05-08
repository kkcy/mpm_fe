import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { useBoolean } from 'react-use'

import { makeStyles } from '@material-ui/core/styles'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

import Input from '../../elements/input'
import { Box, Button } from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap'
  }
}))

const AuthForm = () => {
  const classes = useStyles()
  const methods = useForm()
  const {
    handleSubmit,
    formState: { errors }
  } = methods
  const [showPassword, toggle] = useBoolean(false)
  const onSubmit = () => {}
  console.log(errors)

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.root}>
        <Input
          name="email"
          rules={{ required: 'Please insert your email' }}
          label="Email"
          error={errors.email != null}
          helperText={errors.email}
        />

        <Box p={1} />

        <Input
          name="password"
          rules={{ required: 'Please insert your password' }}
          label="Password"
          type={showPassword ? 'text' : 'password'}
          error={errors.password != null}
          helperText={errors.password}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={toggle}
                // onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
        
        <Box p={1} />

        <Button variant="contained" disableElevation color="primary" type="submit">Sign In</Button>
      </form>
    </FormProvider>
  )
}

export default AuthForm
