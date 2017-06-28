import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import { inject, observer } from "mobx-react";
import LazyRoute from "lazy-route";
import DevTools from "mobx-react-devtools";

import NavBar from "./ui/NavBar";
import Footer from "./ui/Footer";

@inject("store")
@observer
export default class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>

				<header>
					<NavBar />
				</header>

				<main>

					<Route
							exact
							path="/"
							render={props => (
								<LazyRoute {...props} component={import("./pages/Principal.js")} />
						)}
					/>

					<Route
							exact
							path="/registro"
							render={props => (
								<LazyRoute {...props} component={import("./pages/Registro.js")} />
						)}
					/>

					<Route
							exact
							path="/login"
							render={props => (
								<LazyRoute {...props} component={import("./pages/Login.js")} />
						)}
					/>
					
					<Route
							exact
							path="/perfil"
							render={props => (
								<LazyRoute {...props} component={import("./pages/Perfil.js")} />
						)}
					/>

				</main>

				<Footer />

			</div>
		);
	}
}
