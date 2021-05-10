import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, Typography } from '@material-ui/core'

import CarianTable from '../../components/carian/Table'

const CarianPage = () => {
  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h3">Pencarian Maklumat Harta</Typography>
        <Button color="primary" variant="contained" component={Link} to={'carian/new'}>
          New
        </Button>
      </Box>
      <Box p={1} />
      <CarianTable />
    </Box>
  )
}

export default CarianPage
