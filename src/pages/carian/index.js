import React from 'react'
import { Box, Typography } from '@material-ui/core'

import CarianTable from '../../components/carian/Table'

const CarianPage = () => {
  return (
    <Box>
      <Typography variant="h3">Pencarian Maklumat Harta</Typography>
      <Box p={1} />
      <CarianTable />
    </Box>
  )
}

export default CarianPage
