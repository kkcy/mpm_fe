import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { useSnapshot } from 'valtio'

import AuthLayout from './layouts/AuthLayout'
import DashboardLayout from './layouts/DashboardLayout'

import store, { checkAuthorization } from './store/auth'

import AuthPage from './pages/auth'
import DashboardPage from './pages/dashboard'
import PeganganPage from './pages/pegangan'
import PeganganNewPage from './pages/pegangan/new'
import PeganganEditPage from './pages/pegangan/edit'
import CarianPage from './pages/carian'
import CarianEditPage from './pages/carian/edit'
import CarianNewPage from './pages/carian/new'
import LawatPage from './pages/lawat'
import ElaunPage from './pages/elaun'

const PrivateRoute = ({ children, ...rest }) => {
  const { token } = useSnapshot(store)
  // console.log(token)

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
            <Route path="/dashboard/pegangan/new" exact>
              <PeganganNewPage />
            </Route>
            <Route path="/dashboard/pegangan/:pegangan_id" exact>
              <PeganganEditPage />
            </Route>
            <Route path="/dashboard/pegangan" exact>
              <PeganganPage />
            </Route>
            <Route path="/dashboard/carian/new" exact>
              <CarianNewPage />
            </Route>
            <Route path="/dashboard/carian/:carian_id" exact>
              <CarianEditPage />
            </Route>
            <Route path="/dashboard/carian" exact>
              <CarianPage />
            </Route>
            <Route path="/dashboard/lawat" exact>
              <LawatPage />
            </Route>
            <Route path="/dashboard/elaun" exact>
              <ElaunPage />
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
