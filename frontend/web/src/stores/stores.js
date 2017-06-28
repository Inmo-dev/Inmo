import { store } from "rfx-core";

import Sesion from "./Sesion";
import Interfaz from "./Interfaz";

export default store.setup({
	sesion: Sesion,
	interfaz: Interfaz
});
