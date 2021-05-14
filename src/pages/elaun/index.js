import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, Typography } from '@material-ui/core'

import ElaunKekosonganTable from '../../components/elaun/Table'

const ElaunPage = () => {
  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h3">Elaun Kekosongan</Typography>
        <Button color="primary" variant="contained" component={Link} to={'carian/new'}>
          New
        </Button>
      </Box>
      <Box p={1} />
      <ElaunKekosonganTable />
    </Box>
  )
}

export default ElaunPage
