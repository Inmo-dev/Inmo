import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Redirect } from "react-router-dom";

export default function Protected(Component) {
	@inject("store")
	@observer
	class AuthenticatedComponent extends Component {
		constructor(props) {
			super(props);
			this.store = this.props.store.sesion;
		}

		render() {
			const { sesionIniciada } = this.store;
			return (
				<div>
					{ sesionIniciada
						? <Component {...this.props} />
						: <Redirect
										to={{
											pathname: "/login",
											state: { from: this.props.location }
										}}
									/>
						}
				</div>
			);
		}
	}
	return AuthenticatedComponent;
}