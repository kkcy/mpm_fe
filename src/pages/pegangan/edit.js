import React from 'react'
import { Box, Typography } from '@material-ui/core'

import HartaForm from '../../components/pegangan/Form/edit'

const PeganganEditPage = () => {
  return (
    <Box>
      <Typography variant="h3">Edit Pegangan Maklumat Harta</Typography>
      <Box p={1} />
      <HartaForm />
    </Box>
  )
}

export default PeganganEditPage
