import React from 'react'
import ReactDOM from 'react-dom'
import './style.scss'
import 'bulma'


import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import WrestlerIndex from './components/WrestlerIndex'
import NewWrestler from './components/NewWrestler'

class App extends React.Component {
  render() {
    return (
      //<Route /> what component to render according to the choosen path
      <BrowserRouter>
        <main>
          <nav className="navbar is-primary">
            <div className="container">
              <div className="navbar-start">
                <Link className="links" to="/"> Home </Link>
                <Link className="links" to="/wwewrestlers"> Wrestlers </Link>
                <Link className="links" to="/wwewrestlers/new"> Add Wrestlers </Link>
              </div>
              <div className="navbar-end">
                <Link className="links" to="/register"> Register </Link>
                <Link className="links" to="/login"> Login </Link>
              </div>
            </div>
          </nav>

          <Switch>
            <Route path="/wwewrestlers/new" component={NewWrestler} />
            <Route path="/wwewrestlers" component={WrestlerIndex} />
          </Switch>

        </main>
      </BrowserRouter>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
