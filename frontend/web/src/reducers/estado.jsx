import {combineReducers} from 'redux';
//Todos los diferentes estados de la aplicacion
import Sesion from './sesion.jsx';
import Interfaz from './interfaz.jsx'
import Busqueda from './busqueda.jsx'

//Estos estados se combinan en uno solo
const estado = combineReducers({
	sesion: Sesion,
	interfaz: Interfaz,
	busqueda: Busqueda
})

export default estado