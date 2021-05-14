import React, { useState } from 'react'
import { DateTime } from 'luxon'
import { useSnapshot } from 'valtio'
import { Link } from 'react-router-dom'

import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import MUIGrid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

import DashboardPieChart from '../../components/dashboard/charts/pie'
import DashboardBarChart from '../../components/dashboard/charts/bar'
import store from '../../store/auth'
import DashboardLineChart from '../../components/dashboard/charts/line'

const pemilikData = [
  { title: 'CINA', value: 12 },
  { title: 'INDIA', value: 7 },
  { title: 'LAIN', value: 2 },
  { title: 'MELAYU', value: 7 }
]

const kegunaanData = [
  { title: 'Perindutrian', value: 12 },
  { title: 'Perdagangan', value: 7 },
  { title: 'Kediaman', value: 7 },
  { title: 'Agro', value: 7 },
  { title: 'Lain', value: 6 }
]

const mukimData = [
  { title: 'ZON', value: 12 },
  { title: 'LUMUT', value: 7 },
  { title: 'LEKIR', value: 7 },
  { title: 'SITIAWAN', value: 7 },
  { title: 'BERUAS', value: 6 },
  { title: 'PANGKALAN BHARU', value: 6 },
  { title: 'MP MANJUNG', value: 6 },
  { title: 'E-KASIH', value: 6 }
]

const kpiData = [
  { title: 'Jan', value: 300 },
  { title: 'Feb', value: 200 },
  { title: 'Mac', value: 100 },
  { title: 'Apr', value: 300 },
  { title: 'Mei', value: 200 },
  { title: 'Jun', value: 50 },
  { title: 'Jul', value: 20 },
  { title: 'Ogos', value: 80 },
  { title: 'Sep', value: 210 },
  { title: 'Okt', value: 200 },
  { title: 'Nov', value: 200 },
  { title: 'Dis', value: 300 },
]

const useStyles = makeStyles((theme) => ({
  flex: {
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      justifyContent: 'flex-start'
    },
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }
}))

const DashboardPage = () => {
  const { profile } = useSnapshot(store)
  const [today] = useState(DateTime.local())
  const classes = useStyles()

  return (
    <>
      <Box display="flex" className={classes.flex}>
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
          <MUIGrid item xs={12} md={6} xl={4}>
            <DashboardPieChart data={mukimData} title="Bilangan Harta mengikut Mukim" />
          </MUIGrid>
          <MUIGrid item xs={12} md={6} xl={4}>
            <DashboardPieChart data={pemilikData} title="Bilangan Harta mengikut Bangsa Pemilik" />
          </MUIGrid>
          <MUIGrid item xs={12} md={6} xl={4}>
            <DashboardBarChart data={kegunaanData} title="Bilangan Harta mengikut Kegunaan" />
          </MUIGrid>
        </MUIGrid>
      </Box>

      <Box p={1} />

      <Box>
        <MUIGrid container spacing={3}>
          <MUIGrid item xs={12}>
            <DashboardLineChart data={kpiData} title="KPI Produktiviti pada Tahun 2020" />
          </MUIGrid>
        </MUIGrid>
      </Box>
    </>
  )
}

export default DashboardPage
