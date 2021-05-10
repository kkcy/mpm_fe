import React from 'react'
import { Box, Typography } from '@material-ui/core'

import NewCarianForm from '../../components/carian/Form/new'

const CarianNewPage = () => {
  return (
    <Box>
      <Typography variant="h3">New Carian Maklumat Harta</Typography>
      <Box p={1} />
      <NewCarianForm />
    </Box>
  )
}

export default CarianNewPage
