import React from 'react'
import clsx from 'clsx'
import { Route } from 'react-router'
import { Link as RouterLink } from 'react-router-dom'
import useBreadcrumbs from 'use-react-router-breadcrumbs'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Typography from '@material-ui/core/Typography'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Link from '@material-ui/core/Link'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import Sidebar from './Sidebar'
import { useBoolean } from 'react-use'

export const drawerWidth = 240
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    minHeight: '100vh'
  },
  appBarOpen: {
    background: 'rgb(243, 243, 252)',
    color: 'black',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    zIndex: theme.zIndex.drawer + 1,
    width: `calc(100% - ${drawerWidth}px)`
  },
  appBarClosed: {
    background: 'rgb(243, 243, 252)',
    color: 'black',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    zIndex: theme.zIndex.drawer + 1,
    width: `calc(100%px)`
  },
  drawerOpen: {
    background: theme.palette.primary.main,
    color: 'white',
    width: drawerWidth,
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    background: theme.palette.primary.main,
    color: 'white',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: 0
  },
  drawerContainer: {
    overflow: 'hidden'
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
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  // ToDo: usemediaquery too slow
  const [mobileOpen, toggle] = useBoolean(isMobile ? false : true)

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        elevation={0}
        color="primary"
        className={clsx(classes.drawappBarOpener, {
          [classes.appBarOpen]: mobileOpen,
          [classes.appBarClosed]: !mobileOpen
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => toggle()}
            edge="start"
            // className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
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
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: mobileOpen,
          [classes.drawerClose]: !mobileOpen
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: mobileOpen,
            [classes.drawerClose]: !mobileOpen
          })
        }}
        open={mobileOpen}
      >
        <Toolbar>
          <img src="/mpm_logo.png" alt="logo" style={{ height: 45, width: 'auto' }} />
          <img
            src="/mpm_title.png"
            alt="logo"
            style={{ height: 'auto', width: 125, marginLeft: 12 }}
          />
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
