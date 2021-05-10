import React from 'react'
import { Route } from 'react-router'
import { Link as RouterLink } from 'react-router-dom'
import useBreadcrumbs from 'use-react-router-breadcrumbs'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Link from '@material-ui/core/Link'

import Sidebar from './Sidebar'

export const drawerWidth = 240
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    minHeight: '100vh'
  },
  appBar: {
    background: 'rgb(243, 243, 252)',
    color: 'black',
    // borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    zIndex: theme.zIndex.drawer + 1,
    width: `calc(100% - ${drawerWidth}px)`
  },
  drawer: {
    background: theme.palette.primary.main,
    color: 'white',
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    background: theme.palette.primary.main,
    color: 'white',
    borderRight: 'none',
    width: drawerWidth
  },
  drawerContainer: {
    overflow: 'auto'
  },
  content: {
    background: 'rgb(225, 225, 238)',
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}))

const LinkRouter = (props) => <Link {...props} component={RouterLink} />

const DashboardLayout = ({ children }) => {
  const classes = useStyles()
  const breadcrumbs = useBreadcrumbs()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" elevation={0} color="primary" className={classes.appBar}>
        <Toolbar>
          <Route>
            <Breadcrumbs aria-label="breadcrumb">
              {breadcrumbs.map(({ match, breadcrumb }) => (
                <LinkRouter color="inherit" to={match.url} key={match.url}>
                  {breadcrumb}
                </LinkRouter>
              ))}
            </Breadcrumbs>
          </Route>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <Toolbar>
          <img src="/mpm_logo.png" alt="logo" style={{ height: 45, width: 'auto' }} />
          <img src="/mpm_title.png" alt="logo" style={{ height: 'auto', width: 125, marginLeft: 12 }} />
        </Toolbar>
        <div className={classes.drawerContainer}>
          <Sidebar />
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout
