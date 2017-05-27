// Dependencias
import React ,{ Component }  from "react";
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';
import PropTypes from "prop-types"




//Inicio del componente
class BusquedaCiudad extends Component{

	constructor (){
		super();
		this.state ={
			texto:"",

		};

		this.handleUpdate = this.handleUpdate.bind(this);


	}
	//Cargamos los props
	static propTypes:{
			listaAyuda: PropTypes.array,
			enCadenaSeleccionada : PropTypes.func,
	};
	//Funcion actualizar el estado el cual contendrá el valor del texto typeado en la caja de texto
	//Tambien llama a la funcion  de mi componente padre  el cual la recibimos por props
	handleUpdate(valor){
		this.setState({
			texto : valor,
		})
		//ejecutamos la funcion de mi componente padre
		this.props.enCadenaSeleccionada(valor);
	}

	

	//renderizamos
	render(){
		// iniciamos los props
		const {listaAyuda, enCadenaSeleccionada} = this.props 

		return (

				<div  >
					<span style ={ { position:"absolute", top:-40,  left:100} } >En</span>
					<AutoComplete 
						hintText="Selecciona la  Ciudad" 
						filter={AutoComplete.caseInsensitiveFilter} 
						onUpdateInput={this.handleUpdate} 
						searchText={this.state.texto}
						dataSource={listaAyuda} 
						fullWidth={false} 
						maxSearchResults={5}  
	  			    />

			   </div>

			);

	}




}

export default BusquedaCiudad