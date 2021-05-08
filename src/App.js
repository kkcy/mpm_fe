import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { useSnapshot } from 'valtio'

import AuthLayout from './layouts/AuthLayout'
import DashboardLayout from './layouts/DashboardLayout'

import store, { checkAuthorization } from './store/auth'

import AuthPage from './pages/auth'
import DashboardPage from './pages/dashboard'
import Harta from './pages/harta'
import HartaEdit from './pages/harta/edit'

const PrivateRoute = ({ children, ...rest }) => {
  const { token } = useSnapshot(store)
  console.log(token)
  
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return token != null ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location }
            }}
          />
        )
      }}
    />
  )
}

const PublicRoute = ({ children, ...rest }) => {
  const { token } = useSnapshot(store)

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return token == null ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/dashboard',
              state: { from: location }
            }}
          />
        )
      }}
    />
  )
}

const App = () => (
  <>
    <Switch>
      {/* admin route */}
      <PrivateRoute path="/admin/:path?">
        <DashboardLayout>
          <Switch></Switch>
        </DashboardLayout>
      </PrivateRoute>

      {/* dashboard route */}
      <PrivateRoute path="/dashboard/:path?">
        <DashboardLayout>
          <Switch>
            <Route path="/dashboard/harta/:harta_id" exact>
              <HartaEdit />
            </Route>
            <Route path="/dashboard/harta" exact>
              <Harta />
            </Route>
            <Route path="/dashboard" exact>
              <DashboardPage />
            </Route>
          </Switch>
        </DashboardLayout>
      </PrivateRoute>

      <PublicRoute path="/">
        <AuthLayout>
          <AuthPage />
        </AuthLayout>
      </PublicRoute>
    </Switch>
  </>
)

new Promise(() => {
  checkAuthorization()
})
  .then(() => App())
  .catch((error) => console.error(error))

export default App
