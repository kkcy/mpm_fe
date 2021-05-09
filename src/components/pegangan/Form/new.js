import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { useHistory } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import { Box, Button, Drawer } from '@material-ui/core'

import { drawerWidth } from '../../../layouts/DashboardLayout'
import PeganganForm from './Pegangan'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  stepper: {
    background: 'transparent'
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

  const handleBack = () => {
    history.goBack()
  }

  // forms
  const methods = useForm()
  const { handleSubmit, setError } = methods

  const onSubmit = async (data) => {
    try {
      console.log(data)
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
        <PeganganForm />

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
              onClick={handleBack}
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
