import React from 'react'
import { Box, Typography } from '@material-ui/core'

import PeganganTable from '../../components/pegangan/Table'

const Pegangan = () => {
  return (
    <Box>
      <Typography variant="h3">Pegangan Maklumat Harta</Typography>
      <Box p={1} />
      <PeganganTable />
    </Box>
  )
}

export default Pegangan
