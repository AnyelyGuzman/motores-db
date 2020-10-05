import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routers from './routers'

export default class   App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            {
              routers.map(route => (
                <Route {...route} />
              ))
            }
          </Switch>
        </Router>
      </>
    )
  }
}