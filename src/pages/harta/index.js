import React from 'react'
import { Box, Typography } from '@material-ui/core'

import HartaTable from '../../components/harta/Table'

const Harta = () => {
  return (
    <Box>
      <Typography variant="h3">Maklumat Harta</Typography>
      <Box p={1} />
      <HartaTable />
    </Box>
  )
}

export default Harta
