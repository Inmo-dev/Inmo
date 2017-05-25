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
///////////////////////////
//Componentes principales//
import Divider from 'material-ui/Divider';
import BarraYDrawer from './componentes/BarraYDrawer/barraYDrawer.jsx';
import Lorem from './componentes/LoremIpsum/loremIpsum.jsx'
//

//Codigo
//Debe ser lo primero en ejecutar al usar material-ui
injectTapEventPlugin();

class Inicio extends Component {
    render(){
        return (
        	<MuiThemeProvider>
        		<div>
        			<BarraYDrawer />
            			<img 
            				src="img/logo-g.png" 
            				height="200" width="200" 
            				style={{"margin":"auto", "display":"block"}}
            				/>

            			<Divider/>
                        <Lorem />
        		</div>
        	</MuiThemeProvider>
        	);
    }
}

//Render
render(<Inicio />, document.getElementById('contenedor'));