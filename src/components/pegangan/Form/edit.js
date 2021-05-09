import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { useHistory, useParams } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import { Box, Button, Drawer, Typography } from '@material-ui/core'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepButton from '@material-ui/core/StepButton'

import { login } from '../../../store/auth'
import { drawerWidth } from '../../../layouts/DashboardLayout'
import PeganganForm from './Pegangan'

const useStyles = makeStyles((theme) => ({
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
    borderTop: 'none',
    background: 'rgb(243, 243, 252)',
    padding: '8px 16px',
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`
  }
}))

const HartaForm = () => {
  const history = useHistory()
  const { pegangan_id } = useParams()
  const classes = useStyles()

  // steps
  const [activeStep, setActiveStep] = React.useState(0)
  const [skipped, setSkipped] = React.useState(new Set())

  const steps = [
    'Pegangan',
    'Pemilik',
    'Bangunan',
    'Jalan',
    'Kawasan',
    'Kod',
    'Mukim',
    'Struktur',
    'Tanah'
  ]

  const handleNext = () => {
    if (activeStep === steps.length) {
      // submit form
      handleSubmit(onSubmit)()
      return
    }

    // validate this form before next
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    if (activeStep === 0) {
      history.goBack()
      return
    }

    setActiveStep((prevActiveStep) => prevActiveStep - 1)
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
        {/* horizontal for desktop */}
        {/* vertical for mobile */}
        <Stepper activeStep={activeStep} className={classes.stepper} alternativeLabel nonLinear>
          {steps.map((label, index) => {
            const stepProps = {}
            const buttonProps = {}

            return (
              <Step key={label} {...stepProps}>
                <StepButton
                  onClick={() => setActiveStep(index)}
                  //   completed={isStepComplete(index)}
                  {...buttonProps}
                >
                  {label}
                </StepButton>
              </Step>
            )
          })}
        </Stepper>

        {activeStep === steps.length ? (
          <div>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={() => {}} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <>{{ 0: <PeganganForm /> }[activeStep]}</>
        )}

        <Box p={3} />

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
              {activeStep === 0 ? 'Cancel' : 'Back'}
            </Button>
            <Button variant="contained" disableElevation color="primary" onClick={handleNext}>
              {activeStep === steps.length ? 'Save' : 'Next'}
            </Button>
          </Box>
        </Drawer>
      </form>
    </FormProvider>
  )
}

export default HartaForm
