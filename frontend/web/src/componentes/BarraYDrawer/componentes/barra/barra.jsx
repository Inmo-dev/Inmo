import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { irAPaginaIniciarSesion, irAPaginaRegistrar } from '../../../../acciones/interfaz.jsx';
//
import { Toolbar, ToolbarGroup, ToolbarTitle, ToolbarSeparator} from 'material-ui/Toolbar';
import NavigationMenuIcon from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';

/*Props
	clickMenu
	titulo
	clickIniciarSesion
	clickRegistro
*/
class Barra extends Component {
    render(){
        return (
        		<Toolbar 
        			style={{position:"fixed", width:"100%"}}
        			>
        			<ToolbarGroup 
        				firstChild={true}
        				>


	        			<IconButton 
	        				style={{"marginLeft":"15px"}}
	        				>

	        				<NavigationMenuIcon 
	        					onClick={this.props.clickMenu}
	        				/>

	        			</IconButton>

	        			<ToolbarSeparator />

	        			<img 
	        				src="img/logo.png"  
	        				style={{"marginLeft":"24px", "marginRight":"24px"}}
	        				/>	

	        			<ToolbarTitle 
	        				text={this.props.titulo}
	        				/>

				    </ToolbarGroup>

				    <ToolbarGroup>
				    	<FlatButton 
				    		label="Registrate" 
				    		backgroundColor="#a4c639"
				    		onTouchTap={() => this.props.clickRegistro(this.props.history)}				    		
				    		/>

			          	<FlatButton 
			          		label="Inicia sesión" 
			          		backgroundColor="#a4c639"	
			          		onTouchTap={() => this.props.clickLogin(this.props.history)}		          		
			          		/>

			        </ToolbarGroup>
        		</Toolbar>
        	);
    }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    clickRegistro: irAPaginaRegistrar,
    clickLogin: irAPaginaIniciarSesion
  }, dispatch);
}

export default connect(null, matchDispatchToProps)(withRouter(Barra));