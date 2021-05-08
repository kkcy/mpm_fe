import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { useBoolean } from 'react-use'
import { useHistory } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import { Box, Button, Drawer, FormHelperText } from '@material-ui/core'
import MUIGrid from '@material-ui/core/Grid'

import Input from '../../elements/input'
import { login } from '../../store/auth'
import { drawerWidth } from '../../layouts/DashboardLayout'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  drawer: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`
  },
  drawerPaper: {
    padding: '8px 16px',
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`
  }
}))

const HartaForm = () => {
  const history = useHistory()
  const classes = useStyles()
  const methods = useForm()
  const {
    handleSubmit,
    setError,
    formState: { errors }
  } = methods
  const [showPassword, toggle] = useBoolean(false)

  const onSubmit = async (data) => {
    try {
      login({ token: 'abcd', profile: { username: 'abcd', email: 'abcd' } })
    } catch (error) {
      console.log(error.response)
      setError('responseError', {
        type: 'manual',
        message: 'Failed to login'
      })
    }
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.root}>
        <MUIGrid container spacer={3}>
          <MUIGrid item xs={12}>
            <Input
              name="no_akaun_cukai_taksiran"
              rules={{ required: 'Please insert the No Akaun Cukai Taksiran' }}
              label="No Akaun Cukai Taksiran"
              error={errors.no_akaun_cukai_taksiran != null}
              helperText={errors.no_akaun_cukai_taksiran}
            />

            <Box p={1} />
          </MUIGrid>

          <MUIGrid item xs={12}>
            <Input
              name="kod_jalan"
              rules={{ required: 'Please insert the Kod Jalan' }}
              label="Kod Jalan"
              error={errors.kod_jalan != null}
              helperText={errors.kod_jalan}
            />

            {errors.responseError && (
              <FormHelperText error>{errors.responseError?.message}</FormHelperText>
            )}
            <Box p={1} />
          </MUIGrid>
        </MUIGrid>

        <Drawer
          anchor="bottom"
          variant="permanent"
          className={classes.drawer}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <Box display="flex" justifyContent="flex-end">
            <Button
              variant="outlined"
              disableElevation
              style={{ marginRight: 12 }}
              onClick={() => history.goBack()}
            >
              Cancel
            </Button>
            <Button variant="contained" disableElevation color="primary" type="submit">
              Save
            </Button>
          </Box>
        </Drawer>
      </form>
    </FormProvider>
  )
}

export default HartaForm
