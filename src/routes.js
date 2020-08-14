import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PrivateRoutes from './components/PrivateRoutes'
import Dashboard from './pages/Dashboard'
import UserProfile from './pages/Dashboard/Profile'
import Landing from './pages/Landing'
import Signin from './pages/Signin'
import Signup from './pages/Signup'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Landing} />
        <Route path="/register" component={Signup} />
        <Route path="/signin" component={Signin} />
        <PrivateRoutes path="/dashboard" exact={true} component={Dashboard} />
        <PrivateRoutes
          path="/dashboard/profile"
          exact={true}
          component={UserProfile}
        />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
