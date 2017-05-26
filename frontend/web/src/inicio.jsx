//Polyfill son todas las funciones que aun no se implementan en ES5
import "babel-polyfill";
//React
import React, { Component } from 'react';
//React DOM es el motor de visualizacion para html DOM
import { render } from 'react-dom';
//React-router, para hacer una Single Page App
import { Router, Route, IndexRoute, IndexLink, hashHistory, Link } from 'react-router';
//Necesaio para usar material-ui, da estilo a todos los componentes
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//Necesario para funciones en dispositivos moviles
import injectTapEventPlugin from 'react-tap-event-plugin';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Aplicacion from './componentes/Aplicacion/aplicacion.jsx';
import Estado from './reducers/estado.jsx'

//Debe ser lo primero en ejecutar al usar material-ui
injectTapEventPlugin();

//Estado de la aplicacion
const store = createStore(Estado);

class Inicio extends Component {
    render(){
        return (
        	<MuiThemeProvider>
                <Provider store={store}>
        		  <Aplicacion />
                </Provider>
        	</MuiThemeProvider>
        	);
    }
}

//Render
render(<Inicio />, document.getElementById('contenedor'));