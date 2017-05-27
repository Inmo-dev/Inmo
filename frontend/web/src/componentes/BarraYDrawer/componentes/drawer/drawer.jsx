import React, { Component, PropTypes } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

import { irAPaginaBuscar, 
		irAPaginaConfiguracion, 
		irAPaginaInmueblesGuardados,
		irAPaginaMapa,
		irAPaginaPerfil,
		irAPaginaMensajes,
		irAPaginaNotificaciones } from '../../../../acciones/interfaz.jsx';

///
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import Avatar from 'material-ui/Avatar';
import Build from 'material-ui/svg-icons/action/build';
import Map from 'material-ui/svg-icons/maps/map';
import Search from 'material-ui/svg-icons/action/search';
import Bookmark from 'material-ui/svg-icons/action/bookmark';
import Language from 'material-ui/svg-icons/action/language';
import Message from 'material-ui/svg-icons/communication/message';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
///

class InmoDrawer extends Component {
    render(){
        return (
			<Drawer 
				docked={false}
				width={300}
				open={this.props.open}
                onRequestChange={this.props.onRequestChange}
				>

				 <Card 
				 	style={{backgroundColor: '#2196F3'}}
				 	>

				 	<div 
				 		onTouchTap={() => this.props.clickPerfil(this.props.history)}
				 		style={{cursor:"hand"}}
				 		>
					<CardHeader
					  title={this.props.usuario.nombre + " " + this.props.usuario.apellido}
					  subtitle={this.props.usuario.correo}
					  avatar={<Avatar size={40} 
					  				  src={this.props.usuario.fotoPerfil}
					  				  />}
					/>
					</div>

					<CardActions>
					  <FlatButton 
					  	icon={<Language />} 
					  	hoverColor="rgba(0, 0, 0, 0)" 
					  	style={{marginLeft:"90px"}} 
					  	onTouchTap={() => this.props.clickNotificaciones(this.props.history)}
					  	/>

					  <FlatButton 
					  	icon={<Message />} 
					  	hoverColor="rgba(0, 0, 0, 0)" 
					  	style={{marginLeft:"0px"}} 
					  	onTouchTap={() => this.props.clickMensajes(this.props.history)}
					  	/>

					</CardActions>
				</Card>
					         
				<MenuItem 
					leftIcon={<Build />} 
					onTouchTap={() => this.props.clickConfiguracion(this.props.history)}
					>
					Configuración
				</MenuItem>
				
				<MenuItem 
					leftIcon={<Bookmark />}
					onTouchTap={() => this.props.clickInmueblesGuardados(this.props.history)}
					>
					Inmuebles guardados
				</MenuItem>

				<MenuItem 
					leftIcon={<Search />}
					onTouchTap={() => this.props.clickBuscar(this.props.history)}
					>
					Buscar
				</MenuItem>

				<MenuItem 
					leftIcon={<Map />}
					onTouchTap={() => this.props.clickMapa(this.props.history)}
					>
					Mapa
				</MenuItem>

			</Drawer>
        	);
    }
}

InmoDrawer.contextTypes = {
  router: PropTypes.shape({
    history: PropTypes.object.isRequired
  })
};

function mapStateToProps(state){
  return {
    usuario: state.sesion.usuario
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    clickBuscar: irAPaginaBuscar,
    clickConfiguracion: irAPaginaConfiguracion,
    clickInmueblesGuardados: irAPaginaInmueblesGuardados,
    clickMapa: irAPaginaMapa,
    clickPerfil: irAPaginaPerfil,
    clickMensajes: irAPaginaMensajes,
    clickNotificaciones: irAPaginaNotificaciones
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(withRouter(InmoDrawer))