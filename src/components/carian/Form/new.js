import React, { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import _ from 'lodash'
import { useBoolean } from 'react-use'

import { Box, Typography, Button, Drawer } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import FilterablePeganganTable from '../FilterablePeganganTable'
import CarianForm from './Carian'
import PeganganFilterForm from './Pegangan'
import { drawerWidth } from '../../../layouts/DashboardLayout'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  title: {
    fontSize: 16,
    color: '#2a2a27'
  },
  drawer: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`
  },
  drawerPaper: {
    padding: '8px 16px',
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`
  },
  drawerRightPaper: {
    background: 'rgb(225, 225, 238)',
    padding: '32px',
    width: '40%'
  }
}))

const NewCarianForm = () => {
  const history = useHistory()
  const classes = useStyles()
  const [filters, setFilters] = useState([])
  const [selectedRows, setSelectedRows] = useState([])
  const [isOpen, toggle] = useBoolean(false)

  // forms
  const methods = useForm()
  const { reset, handleSubmit, setError } = methods

  const onSubmit = async (data) => {
    try {
      reset()
    } catch (error) {
      console.log(error.response)
      setError('responseError', {
        type: 'manual',
        message: 'Failed to login'
      })
    }
  }

  console.log(selectedRows)

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={(e) => {
          e.stopPropagation()
          handleSubmit(onSubmit)
        }}
        className={classes.root}
      >
        <CarianForm />

        <Box p={1} />

        <Typography className={classes.title} gutterBottom>
          Pegangan Harta
        </Typography>
        {_.isEmpty(filters) ? (
          <Button variant="contained" color="secondary" elevation={0} onClick={() => toggle(true)}>
            Setup filters
          </Button>
        ) : (
          <FilterablePeganganTable setSelectedRows={setSelectedRows} />
        )}

        <Box p={3} />
        
        <Drawer
          anchor="right"
          open={isOpen}
          onClose={() => toggle(false)}
          className={classes.drawer}
          classes={{
            paper: classes.drawerRightPaper
          }}
        >
          <PeganganFilterForm setFilters={setFilters} toggle={toggle} />
        </Drawer>

        <Drawer
          anchor="bottom"
          variant="permanent"
          className={classes.drawer}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box>
              <Typography>Total: RM{(selectedRows?.length * 10.0).toFixed(2)}</Typography>
            </Box>

            <Box display="flex">
              <Button
                variant="outlined"
                disableElevation
                style={{ marginRight: 12 }}
                onClick={() => history.goBack()}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                disableElevation
                color="primary"
                onClick={() => handleSubmit(onSubmit)()}
              >
                Save
              </Button>
            </Box>
          </Box>
        </Drawer>
      </form>
    </FormProvider>
  )
}

export default NewCarianForm
