import React, { Component } from 'react'
import './App.css'
import { Router, Switch, Route } from 'react-router-dom'
import { Login } from './_components/login'
import { Home } from './_components/home'
import { history } from './_helpers'
import PrivateRoute from './_components/PrivateRoute'
class App extends Component {
	render() {
		return (
			<div className="App">
				<Router history={history}>
					<div>
						<Switch>
							<PrivateRoute exact path="/home" component={Home} />
							<Route exact path="/" component={Login} />
						</Switch>
					</div>
				</Router>
			</div>
		)
	}
}
export default App
