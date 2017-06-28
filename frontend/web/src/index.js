import ("./styles/main.scss");
import ("./static/jquery");
import ("./static/materialize");
import ("./static/iniciadores");
import React from "react";
import { render } from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "mobx-react";
import { AppContainer } from "react-hot-loader";
import { rehydrate, hotRehydrate } from "rfx-core";

import { isProduction } from "./utils/constants";
import App from "./components/App";
import stores from "./stores/stores";

const store = rehydrate();

const renderApp = () => {
	render(
		<AppContainer>
			<Router>
				<Provider store={isProduction ? store : hotRehydrate()}>
					<App />
				</Provider>
			</Router>
		</AppContainer>,
		document.getElementById("root")
	);
};

renderApp();

if (module.hot) {
	module.hot.accept(() => renderApp());
}
