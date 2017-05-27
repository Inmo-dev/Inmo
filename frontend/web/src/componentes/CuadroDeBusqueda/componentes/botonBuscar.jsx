//Dependencias 
import React , {Component}from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';

//estilo
const estilo = {
				width: 400,
	 		//	position: "relative",
	 		//	top : 250,
	 		//	right: 280
		};

//Inicio de Componente
class BtnBuscar extends Component{
 		//Cargamos los props
 		static propTypes:{
 			enClick: PropTypes.func,
 			titulo : PropTypes.array
 		}

 		//Renderizamos 
 		render (){
 			const {enClick, titulo="Boton"} = this.props;
 			return (
 					 <RaisedButton 
 					 	label={titulo} 
 					 	primary={true}  
 					 	onClick={this.props.enClick} 
 					 	style={estilo} 
 					 	/> 
 				);
 		}
 }

export default BtnBuscar