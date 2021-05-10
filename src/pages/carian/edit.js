import React from 'react'
import { Box, Typography } from '@material-ui/core'

import CarianForm from '../../components/carian/Form/edit'

const CarianEditPage = () => {
  return (
    <Box>
      <Typography variant="h3">Edit Carian Maklumat Harta</Typography>
      <Box p={1} />
      <CarianForm />
    </Box>
  )
}

export default CarianEditPage
