import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PrivateRoutes from './components/PrivateRoutes'
import Dashboard from './pages/Dashboard/Header'
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
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
