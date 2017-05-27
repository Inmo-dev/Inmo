import React, { Component }  from "react";
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import Paper from 'material-ui/Paper';
//Componentes 
import BtnBuscar from "./componentes/botonBuscar.jsx";
import BtnBuscarAvanzado from "./componentes/botonBuscarAvanzado.jsx";
import BusquedaCiudad from "./componentes/busquedaCiudad.jsx";
import Selector from "./componentes/selector.jsx";

const estiloPapel = {
		//backgroundColor:"#FFEBEE",	
		  height: 350,
		  width: 1000,
		  margin: "auto",
		  textAlign: 'center',
		//display: 'inline-block',
		  position:"relative",
		};

const estiloContenedor = {
			paddingTop: 50
		};

class CuadroDeBusqueda extends Component {
	
	constructor(){
		super();
		this.state ={
				inmuebleSeleccionado: "",
				contratoSeleccionado: "" ,
				ciudadSeleccionado: "" 	
 				};

 		//Asignamos el bind a nuestras funciones	
 		this.handleChangeInmueble = this.handleChangeInmueble.bind(this);
 		this.handleChangeContrato = this.handleChangeContrato.bind(this);
 		this.handleChangeCiudad = this.handleChangeCiudad.bind(this);
	}
	
	//cargamos los props
	static propTypes : {
		titulo: PropTypes.string,
		tituloBoton: PropTypes.string,
		tiposDeInmuebles: PropTypes.array,
		tiposDeContratos: PropTypes.array,
		ciudades: PropTypes.array,
		clickBuscar: PropTypes.func,
		clickAvanzado:PropTypes.func
	};

	// funcion para cambiar el estado del inmueble seleccionado
	handleChangeInmueble(valor){
 			this.setState({
 				inmuebleSeleccionado : valor
 			});
 		};

 	// funcion para cambiar el estado del Contrato seleccionado
 	handleChangeContrato(valor){
 			this.setState({
 				contratoSeleccionado : valor				
 			});
 		};

 	// funcion para cambiar el estado de la Ciudad seleccionada
 	handleChangeCiudad(valor){
 			this.setState({
 				ciudadSeleccionado : valor 				
 			});
 		}

    //renderizamos
	render(){
		// incialisamos los props con los valores previamente cargados
		const {ciudades, titulo, tituloBoton, tiposDeInmuebles, tiposDeContratos ,clickBuscar ,clickAvanzado} = this.props;

		//retorno
		return(
			<div>
			  <Paper 
			  	style={estiloPapel} 
			  	zDepth={1} 
			  	rounded={false}
			  	>

			    <div 
			    	style={{textAlign: "center"}}
			    	>
			    	<h2> {titulo} </h2>
			    </div>

			  	<div 
			  		style = {{ position: "absolute",top:40,left:250}}
			  		>

					<Selector  
						listaContenedora = {tiposDeInmuebles}
					 	enItemSeleccionado = {this.handleChangeInmueble}	
					 	etiqueta="Busco:"		 
					 	/>		
				</div>	

				<div 
					style={{ position: "absolute", top:40, left:580}}
					>

					<Selector  
						listaContenedora={tiposDeContratos}
						enItemSeleccionado={this.handleChangeContrato}
						etiqueta="Para: "				 
					 	/>
				</div>	

				<div  
					style ={{position: "absolute", top:200, left:390 }}
					>

					<BusquedaCiudad 
						listaAyuda={ciudades} 
						enCadenaSeleccionada={this.handleChangeCiudad}
						/>
				</div>

				<div 
					style={{position: "absolute", bottom:20, left:300}}
					>
				
					<BtnBuscar 
						enClick={this.props.clickBuscar} 
						titulo ={tituloBoton}  
						/>
				</div>	

				<div 
					style={{position: "absolute", bottom:10, right:10 }}
					>
				
					<BtnBuscarAvanzado 
						enClickAvanzado={this.props.clickAvanzado} 
						/>
				</div>	

			  </Paper>
			</div>
			)
	}
}

function mapStateToProps(state){
  return {
    titulo: state.busqueda.titulo,
    tituloBoton: state.busqueda.tituloBoton,
    tiposDeInmuebles: state.busqueda.tiposDeInmueble,
    tiposDeContratos: state.busqueda.tiposDeContrato,
    ciudades: state.busqueda.ciudades
  };
}


export default connect(mapStateToProps)(CuadroDeBusqueda);