import React from 'react'
import { Box, Typography } from '@material-ui/core'

import EditCarianForm from '../../components/carian/Form/edit'

const CarianEditPage = () => {
  return (
    <Box>
      <Typography variant="h3">Edit Carian Maklumat Harta</Typography>
      <Box p={1} />
      <EditCarianForm />
    </Box>
  )
}

export default CarianEditPage
