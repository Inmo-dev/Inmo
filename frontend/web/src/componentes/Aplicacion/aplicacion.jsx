import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import BarraYDrawer from '../BarraYDrawer/barraYDrawer.jsx';
import Lorem from '../LoremIpsum/loremIpsum.jsx'


class Aplicacion extends Component {
    render(){
        return (
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
        	);
    }
}

export default Aplicacion