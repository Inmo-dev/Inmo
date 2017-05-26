//Todas las acciones relacionadas con la interfaz emiten un evento, que tiene un tipo y un 
//payload. El tipo se especifica en el indice, ya que es la referencia universal del evento
//y el payload es a conveniencia de la accion, y puede ser cualquier tipo de objeto

import {ALTERNAR_DRAWER} from '../acciones/indice.jsx';

//Toma el estado actual del drawer, y retorna su estado contrario
export const alternarDrawer = (actual) => {
	console.log("Hola: "+actual);
	return {
		type: ALTERNAR_DRAWER,
		payload: (!actual)
	};
};