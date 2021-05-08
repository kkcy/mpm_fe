import React from 'react'
import { Box, Typography } from '@material-ui/core'

import HartaForm from '../../components/harta/Form'

const HartaEdit = () => {
  return (
    <Box>
      <Typography variant="h3">Edit Maklumat Harta</Typography>
      <Box p={1} />
      <HartaForm />
    </Box>
  )
}

export default HartaEdit
