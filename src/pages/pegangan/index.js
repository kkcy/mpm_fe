import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, Typography } from '@material-ui/core'

import PeganganTable from '../../components/pegangan/Table'

const Pegangan = () => {
  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h3">Pegangan Maklumat Harta</Typography>
        <Button color="primary" variant="contained" component={Link} to={'pegangan/new'}>
          New
        </Button>
      </Box>
      <Box p={1} />
      <PeganganTable />
    </Box>
  )
}

export default Pegangan
