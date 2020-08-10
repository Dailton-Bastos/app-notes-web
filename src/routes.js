import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
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
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
