//Todas las acciones relacionadas con la interfaz emiten un evento, que tiene un tipo y un 
//payload. El tipo se especifica en el indice, ya que es la referencia universal del evento
//y el payload es a conveniencia de la accion, y puede ser cualquier tipo de objeto

import {ACCION_ALTERNAR_DRAWER} from '../acciones/indice.jsx';
import {ACCION_BUSCAR} from '../acciones/indice.jsx';
import {ACCION_CONFIGURACION} from '../acciones/indice.jsx';
import {ACCION_INMUEBLES_GUARDADOS} from '../acciones/indice.jsx';
import {ACCION_MAPA_INTERACTIVO} from '../acciones/indice.jsx';
import {ACCION_PERFIL} from '../acciones/indice.jsx';
import {ACCION_MENSAJES} from '../acciones/indice.jsx';
import {ACCION_NOTIFICACIONES} from '../acciones/indice.jsx';
import {ACCION_INICIAR_SESION} from '../acciones/indice.jsx';
import {ACCION_REGISTRAR} from '../acciones/indice.jsx';

//Toma el estado actual del drawer, y retorna su estado contrario
export const alternarDrawer = (actual) => {
	return {
		type: ACCION_ALTERNAR_DRAWER,
		payload: (!actual)
	};
};

//Ir a pantalla de busqueda
export const irAPaginaBuscar = (contexto) => {
	return{
		type: ACCION_BUSCAR,
		payload: contexto
	};
};

//Ir a pantalla de configuracion
export const irAPaginaConfiguracion = (contexto) => {
	return{
		type: ACCION_CONFIGURACION,
		payload: contexto
	};
};

//Ir a pantalla de inmuebles guardados
export const irAPaginaInmueblesGuardados = (contexto) => {
	return{
		type: ACCION_INMUEBLES_GUARDADOS,
		payload: contexto
	};
};

//Ir a pantalla de mapa interactivo
export const irAPaginaMapa = (contexto) => {
	return{
		type: ACCION_MAPA,
		payload: contexto
	};
};

//Ir a perfil personal
export const irAPaginaPerfil = (contexto) => {
	return{
		type: ACCION_PERFIL,
		payload: contexto
	};
};

//Ir a pantalla de mensajes
export const irAPaginaMensajes = (contexto) => {
	return{
		type: ACCION_MENSAJES,
		payload: contexto
	};
};

//Ir a pantalla de notificaciones
export const irAPaginaNotificaciones = (contexto) => {
	return{
		type: ACCION_NOTIFICACIONES,
		payload: contexto
	};
};

//Ir a pantalla de iniciar sesion
export const irAPaginaIniciarSesion = (contexto) => {
	return{
		type: ACCION_INICIAR_SESION,
		payload: contexto
	};
};

//Ir a pantalla de registro
export const irAPaginaRegistrar = (contexto) => {
	return{
		type: ACCION_REGISTRAR,
		payload: contexto
	};
};
