import React, { useState } from 'react'
import { DateTime } from 'luxon'
import { useSnapshot } from 'valtio'
import { Link } from 'react-router-dom'

import { Box, Paper, Typography } from '@material-ui/core'
import MUIGrid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

import DashboardPieChart from '../../components/dashboard/charts/pie'
import store from '../../store/auth'
import DashboardBarChart from '../../components/dashboard/charts/bar'

const tanahData = [
  { title: 'BANGUNAN', value: 12 },
  { title: 'PERTANIAN', value: 7 },
  { title: 'PERINDUSTRIAN', value: 7 },
  { title: 'LOT KOSONG BANGUNAN', value: 7 },
  { title: 'TANAH KERAJAAN', value: 6 },
  { title: 'PELANTAR', value: 6 }
]

const bangunanData = [
  { title: 'APART', value: 12 },
  { title: 'BURUNG', value: 7 },
  { title: 'CBK', value: 7 },
  { title: 'GERAI', value: 7 },
  { title: 'HOTEL', value: 6 },
  { title: 'INDUSTRI', value: 6 }
]

const mukimData = [
  { title: 'LUMUT', value: 12 },
  { title: 'SITIAWAN', value: 7 },
  { title: 'LEKIR', value: 7 },
  { title: 'BERUAS', value: 7 },
  { title: 'PANGKALAN BHARU', value: 6 },
  { title: 'MP MANJUNG', value: 6 }
]

const ethnicData = [
  { title: 'Malay', value: 12 },
  { title: 'Cina', value: 7 },
  { title: 'Indian', value: 7 }
]

const DashboardPage = () => {
  const { profile } = useSnapshot(store)
  const [today] = useState(DateTime.local())

  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h3">Welcome Back {profile?.username}</Typography>
        <Typography variant="h4">{today.toJSDate().toDateString()}</Typography>
      </Box>

      <Box p={2} />

      <Box>
        <Typography variant="h6">You may...</Typography>
        <List>
          <ListItem button component={Link} to="/dashboard/pegangan">
            <ListItemText>Create a new Pegangan</ListItemText>
          </ListItem>
          <Divider />
          <ListItem button component={Link} to="/dashboard/carian">
            <ListItemText>Look for owners with Carian</ListItemText>
          </ListItem>
        </List>
      </Box>

      <Box p={1} />

      <Box>
        <MUIGrid container spacing={3}>
          <MUIGrid item xs={12} md={6} xl={3}>
            <DashboardPieChart data={mukimData} title="Mukim" />
          </MUIGrid>
          <MUIGrid item xs={12} md={6} xl={3}>
            <DashboardPieChart data={tanahData} title="Tanah" />
          </MUIGrid>
          <MUIGrid item xs={12} md={6} xl={3}>
            <DashboardPieChart data={bangunanData} title="Bangunan" />
          </MUIGrid>
        </MUIGrid>
      </Box>

      <Box p={1} />

      <Box>
        <MUIGrid container spacing={3}>
          <MUIGrid item xs={12} xl={6}>
            <DashboardBarChart data={ethnicData} title="Pemilik Bangunan" />
          </MUIGrid>
        </MUIGrid>
      </Box>
    </>
  )
}

export default DashboardPage
