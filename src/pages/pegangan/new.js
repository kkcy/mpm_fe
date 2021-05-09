import React from 'react'
import { Box, Typography } from '@material-ui/core'

import HartaForm from '../../components/pegangan/Form/new'

const PeganganNewPage = () => {
  return (
    <Box>
      <Typography variant="h3">New Pegangan Maklumat Harta</Typography>
      <Box p={1} />
      <HartaForm />
    </Box>
  )
}

export default PeganganNewPage
