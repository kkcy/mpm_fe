import React, { useState } from 'react'
import { DateTime } from 'luxon'
import { useSnapshot } from 'valtio'
import { Link } from 'react-router-dom';

import { Box, Typography } from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

import store from '../../store/auth'

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
    </>
  )
}

export default DashboardPage
