import React from 'react'
import { Box, Typography } from '@material-ui/core'

import PeganganForm from '../../components/pegangan/Form'

const PeganganEditPage = () => {
  return (
    <Box>
      <Typography variant="h3">Edit Pegangan Maklumat Harta</Typography>
      <Box p={1} />
      <PeganganForm />
    </Box>
  )
}

export default PeganganEditPage
