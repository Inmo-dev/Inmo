import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import CuadroDeBusqueda from '../CuadroDeBusqueda/cuadroDeBusqueda.jsx';

class PaginaBusqueda extends Component {
    render(){
        return(
            <div>
                <img 
                    src="img/logo-g.png" 
                    height="200" width="200" 
                    style={{"margin":"auto", "display":"block"}}
                    />

                <Divider/>
                <CuadroDeBusqueda />
            </div>
        );
    };
};

export default PaginaBusqueda