import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'; 
import BarraYDrawer from '../BarraYDrawer/barraYDrawer.jsx';
//Rutas
import Lorem from '../LoremIpsum/loremIpsum.jsx'
import PaginaBusqueda from '../PaginaBusqueda/paginaBusqueda.jsx';

class Aplicacion extends Component {
    render(){
        return (
        		<div>
        			<BarraYDrawer />
        			<Switch>
                    <div 
                        style={{paddingTop:"60px"}}
                        >

        				<Route exact path="/" component={Lorem} />
                        <Route path="/buscar" component={PaginaBusqueda} />

                    </div>
        			</Switch>
        		</div>
        	);
    }
}

export default Aplicacion