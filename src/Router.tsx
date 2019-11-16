import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import {
  FoodsContainer,
  PlaceContainer,
  CreateCityContainer,
  LoginContainer
} from './Containers'

export const RouterApp: React.FC = () => (
  <Router>
    <Switch>
      <Route exac path="/create/city">
        <CreateCityContainer />
      </Route>
      <Route path="/feed">
        <FoodsContainer />
      </Route>
      <Route path="/food">
        <FoodsContainer />
      </Route>
      <Route path="/places">
        <PlaceContainer/>
      </Route>
      <Route path="/login">
        <LoginContainer/>
      </Route>
      <Route exac path="/">
        <Redirect to="/feed" />
      </Route>
    </Switch>
  </Router>
)
