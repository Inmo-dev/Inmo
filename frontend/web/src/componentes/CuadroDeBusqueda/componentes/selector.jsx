
//Dependencias 
import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import PropTypes from "prop-types"





//estilo 
const estilo ={
	    
			width: 170,
		    paddingTop: 20,
		    paddingLeft: 20,
		  	//float:"left",
			//top: 30,

		}

// incio del Componente
class Selector extends Component{

	constructor(){
		
		super();
		this.state ={

			value:1,

		}
		this.handleChange = this.handleChange.bind(this);
	}


	// cargamos los props 
	static propTypes:{
		listaContenedora: PropTypes.array,
		enItemSeleccionado : PropTypes.func,
		etiqueta: PropTypes.array,
	}

	//funcion para cambiar el estado value al valor seleccionado 
	//Tambien llamamos a  una funcion del componente padre
	handleChange (event, index , value){
		this.setState({

			value : value,
			
		})
		this.props.enItemSeleccionado(value);
		
	}

	render(){
				//iniciamos los props  
		const {listaContenedora=["Lista Vacia"] ,enItemSeleccionado , etiqueta=""} = this.props
		
		
		
		// retornamos 
		return (

				<div  >
					<label style={ {position:"absolute", top:40, left:-40} }> {etiqueta}</label>

						<SelectField   value={this.state.value}   onChange={this.handleChange}  style={estilo} > 

						{
				        
						listaContenedora && listaContenedora.map((item, key) =>

											<MenuItem key={key} value={item} primaryText={item}/>

										)
						}
				        </SelectField>
				       
						
				</div >

			);


	}



}

export default Selector