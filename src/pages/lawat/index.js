import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, Typography } from '@material-ui/core'

import LawatPeriksaTable from '../../components/lawat/Table'

const LawatPage = () => {
  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h3">Lawat Periksa</Typography>
        <Button color="primary" variant="contained" component={Link} to={'carian/new'}>
          New
        </Button>
      </Box>
      <Box p={1} />
      <LawatPeriksaTable />
    </Box>
  )
}

export default LawatPage
