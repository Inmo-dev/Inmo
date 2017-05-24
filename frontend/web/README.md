# Especificaciones del sistema

Especificaciones no concluidas.  
_Leyenda (pantallas):_  
Simbolo | Significado 
---|---
🚧| En analisis
🆗|Analisis aprobado
✔️|Mockup hecho
⚒|En desarrollo
✅|Implementado

## 1. Pantallas

##### 1.1 - Barra y menu general visble en todas las pantallas. ⚒
Esta barra y menú debe tener, en funcion a si el usuario está logeado o no:  

_(*NL*: No logeado)_  
_(*I*: Inmobiliaria)_  
_(*A*: Administrador)_

Componente | Descripción | Estado  
---|---|---  
Botón de login. _(NL)_ | Ir a pantalla de login | Sin asignar ❌ 
Botón de registro. _(NL)_ | Ir a pantalla de registro | Sin asignar ❌ 
Botón de ir a perfil. | Ir al perfil personal | Sin asignar ❌ 
Botón de ir a configuraciones. | Ir a configuraciones | Sin asignar ❌ 
Botón de ir a pantalla de búsqueda. | Ir a pantalla de busqueda | Sin asignar ❌ 
Botón de agregar inmueble (I). | Ir a pantalla de agregar inmueble | Sin asignar ❌ 
Foto de perfil. | Ir al perfil personal |  Sin asignar ❌ 
Correo electronico | Ir al perfil personal | Sin asignar ❌ 
Nombre del usuario | Ir al perfil personal | Sin asignar ❌ 
Barra de busqueda de usuario | Busca usuario o inmobiliaria | Sin asignar ❌ 
Boton de busar | Hace la busqueda | Sin asignar ❌ 

##### 1.2 - Splash. 🆗
Es la pantalla que se muestra mientras una aplicación está cargando una pantalla, es la primera vez que se inicia, o se encuentra descargando algo. Debe ser el logo y una animación sencilla.

_Ejemplo, el logo de youtube se muestra mientras carga la aplicación._  
![Ejemplo](https://www.bignerdranch.com/assets/img/blog/2015/08/youtube_splash.gif)  

Componente | Descripción | Estado  
---|---|---  
Splash| - |Sin asignar ❌ 
##### 1.3 - Búsqueda. _(Página principal)_  🆗
Permite realizar una busqueda sencilla o avanzada al usuario mediante diferentes criterios **sin mostrar mapa**. Muestra inmuebles populares en la zona, inmuebles destacados, inmuebles más vistos.

_*: Búsqueda avanzada_  

Componente | Descripción | Estado  
---|---|---  
Selección de tipo de inmueble | Casa, Local, etc.. | Sin asignar ❌ 
Seleccion de tipo de contraro | Venta, Alquiler, etc.. | Sin asignar ❌ 
Selección de ciudad | Ciudad a buscar/Nacional | Sin asignar ❌ 
Selección de puntos de interes* | Escuela, Hospital, etc.. | Sin asignar ❌  
Selección de radio puntos de interes* | Distancia a la que un punto de interes se toma en cuenta | Sin asignar ❌  
Selección de precio* | Alto/Medio/Bajo | Sin asignar ❌ 
Selección de caracteristica* | Cuartos, Baños, Pisos etc.. | Sin asignar ❌ 
Selección de dueño anterior* | Si es usado o nuevo | Sin asignar ❌ 
Avalada por perito* | Si el precio está auditado | Sin asignar ❌ 
Botón ir a mapa | Va al mapa interactivo | Sin asignar ❌ 
Inmuebles destacados | 3 inmuebles destacados | Sin asignar ❌ 


##### 1.4 - Login. 🆗  
Se encarga de dar al usuario diferentes opciones de login al sistema.

Componente | Descripción | Estado  
---|---|--- 
Nombre de usuario|Usuario|Sin asignar ❌ 
Contraseña|Contraseña|Sin asignar ❌ 
Boton "Login" |Inicia el proceso de logear, y va a pagina de busqueda|Sin asignar ❌ 
Boton "Login with Facebook" | Logea con cuenta de facebook y va a pagina de busqueda|Sin asignar ❌ 
Boton "Olvide mi contraseña" | Va a pagina de recuperacion de cuenta|Sin asignar ❌ 
Boton "Registrarse" | Va a pagina de registro|Sin asignar ❌ 
Texto de mensaje | En caso de error muestra un mensaje sobe el intento de login |Sin asignar ❌ 

##### 1.5 - Sobre nosotros.  🆗  
Se encarga de mostrar toda la informacion referente a Inmo, de manera atractiva a los usuarios interesados. 

Componente | Descripción | Estado  
---|---|--- 
Redaccion sobre Inmo, imagenes, videos, presentaciones etc .. | - | Sin asignar ❌ 
Links hacia las redes sociales de inmo |-| Sin asignar ❌ 
Boton "Contacto" | Lleva a la pantalla de contacto | Sin asignar ❌

##### 1.6 - Contacto.  🆗
Lista todas las maneras posibles de contactar con Inmo, redes sociales, telefonos oficiales, emails, oficinas, etc..

Componente | Descripción | Estado  
---|---|--- 
Redacción sobre métodos de contacto | - | Sin asignar ❌
Links a redes sociales | - | Sin asignar ❌
Telefono/s | De ser posible | Sin asignar ❌
Email | De cada departamento | Sin asignar ❌

##### 1.7 - Preguntas frecuentes.  🆗
Seleccion interactiva de preguntas frecuentes sobre Inmo, sus sistemas, o la forma de trabajar de las inmobiliarias. Debe tener una referencia al correo de soporte _soporte@inmo.co.ve_  

Componente | Descripción | Estado  
---|---|--- 
Redaccion interactiva de preguntas frecuentes | - | Sin asignar ❌ 
Link al correo de soporte | soporte@inmo.co.ve | Sin asignar ❌ 

##### 1.8 - Perfil cliente.  🆗
Muestra el perfil de un cliente, las formas de contactarlo, etc..  

_(\*: En caso de perfil de usuario actual)_  
_(\*\*: En caso de usuario logeado)_
Componente | Descripción | Estado  
---|---|--- 
Nombres y Apellidos | Nombre completo del cliente | Sin asignar ❌
Telefono/s | Telefono del cliente, si desea mostrarlo | Sin asignar ❌
Email | Email del cliente, si desea mostrarlo | Sin asignar ❌
Descripcion | Texto hecho por un cliente describiendose | Sin asignar ❌
Redes sociales | Links a las redes sociales de un cliente | Sin asignar ❌
Foto de perfil | Foto de perfil de un cliente | Sin asignar ❌
Mensaje\*\* | Enviar un mensaje al cliente | Sin asignar ❌
Boton editar perfil\* | Va a la pantalla de edicion del perfil | Sin asignar ❌

##### 1.9 - Olvidé mi clave. 🆗  
Da al usuario la posibilidad de restaurar su contraseña.

Componente | Descripción | Estado  
---|---|--- 
Ingreso de correo electronico|-|Sin asignar ❌ 
Boton recuperar contraseña| Inicia el proceso de recuperación |Sin asignar ❌ 
Cuadro de mensaje | Informa si el email no existe o confirmar que se envió | Sin asignar ❌ 
Captcha | Evita un ataque de fuerza bruta a la BD | Sin asignar ❌ 


##### 1.11 - Perfil inmobiliaria.  🆗
Muestra el pefil de una compañia inmobiliaria y las formas de contactarle  
_(\*: En caso de perfil de usuario actual)_  
_(\*\*: En caso de usuario logeado)_  

Componente | Descripción | Estado  
---|---|--- 
Nombres | Nombre completo de la inmobiliaria | Sin asignar ❌
Telefono/s | Telefono de la inmobiliaria | Sin asignar ❌
Email | Email de la inmobiliaria | Sin asignar ❌
Descripcion | Texto de descripcion de la inmobiliaria | Sin asignar ❌
Redes sociales | Links a las redes sociales de inmobiliaria | Sin asignar ❌
Foto de perfil | Foto de perfil de inmobiliaria | Sin asignar ❌
Mensaje\*\* | Enviar un mensaje | Sin asignar ❌
Boton editar perfil\* | Va a la pantalla de edicion del perfil | Sin asignar ❌
Boton ver inmuebles | Ir a pantalla de ver inmuebles de inmobiliaria | Sin asignar ❌
Comentarios | Comentarios de usuarios | Sin asignar ❌
Calificacion | Calificacion de usuarios | Sin asignar ❌

##### 1.12 - Registro. 🆗
Debe mostrar las diferencias entre una cuenta de usuario y una cuenta de inmobiliaria. 

Componente | Descripción | Estado  
---|---|--- 
Descripcion de cada tipo de cuenta| Especifica las diferencias|Sin asignar ❌
Boton de registro como usuario | Va a la pantalla de registrar usuario | Sin asignar ❌
Boton de registro como inmobiliaria | Va a la pantalla de registrar inmobiliaria | Sin asignar ❌

##### 1.13 - Registro cliente.  🆗  
Permite que se registre un cliente, pide datos y hace validaciones.  

_\*:obligatorio_
Componente | Descripción | Estado  
---|---|--- 
Nombre de usuario\* | Sólo letras minusculas, números y \_- | Sin asignar ❌
Contraseña\* | Minimo 6 caracteres | Sin asignar ❌
Confirmacion de contraseña\* | Tienen que coincidir ambas | Sin asignar ❌
Nombres\* | Los nombres de la persona |  Sin asignar ❌
Email\* | Email |  Sin asignar ❌
Confirmacion de Email\* | Tiene que coincidir ambos |  Sin asignar ❌
Apellidos | Apellidos de la persona |  Sin asignar ❌
Direccion | Direccion donde vive |  Sin asignar ❌
Celular | Celular del cliente |  Sin asignar ❌
Botón de registrar | Registra el usuario, lo lleva a la pagina de confirmacion de correo |  Sin asignar ❌


##### 1.14 - Registro inmobiliaria. 🆗
Permite que se registre una inmobiliaria, pide datos y hace validaciones.  

_\*:obligatorio_
Componente | Descripción | Estado  
---|---|--- 
Nombre de usuario\* | Sólo letras minusculas, números y \_- | Sin asignar ❌
Contraseña\* | Minimo 6 caracteres | Sin asignar ❌
Confirmacion de contraseña\* | Tienen que coincidir ambas | Sin asignar ❌
Nombre\* | Nombre de la empresa |  Sin asignar ❌
Email\* | Email |  Sin asignar ❌
Confirmacion de Email\* | Tiene que coincidir ambos |  Sin asignar ❌
RIF\* | RIF de la empresa |  Sin asignar ❌
Direccion\* | Direccion de la empresa |  Sin asignar ❌
Telefono\* | Telefono de contacto de la inmobiliaria |  Sin asignar ❌
Botón de registrar | Registra la inmobiliaria, lo lleva a la pagina de confirmacion de correo |  Sin asignar ❌

##### 1.15 - Vista de inmueble. 🚧
Muestra todos los datos posibles de un inmueble, y las maneras de contactar las inmobiliarias que lo tienen a disposicion.  

Componente | Descripción | Estado  
---|---|--- 
Fotos del inmueble |Todas las fotos disponibles |  Sin asignar ❌
Videos del inmueble |Todas los videos disponibles |  Sin asignar ❌
Tipo de inmueble | Local, Casa, etc.. |  Sin asignar ❌
Tipo de contrato | Alquiler, Venta, etc.. |  Sin asignar ❌
Estado | Estado del pais |  Sin asignar ❌
Ciudad | Ciudad del pais | Sin asignar ❌
Inmobiliarias que lo venden | Con su contacto | Sin asignar ❌
Indice de precio | Bajo/Medio/Alto | Sin asignar ❌
Calificacion de usuarios | Bajo/Medio/Alto | Sin asignar ❌
Comentarios de usuarios | - | Sin asignar ❌
Formulario de enviar comentario | Si es usuario registrado | Sin asignar ❌

##### 1.16 - Editar perfil. 🚧
Opcion de editar todos los datos personales del perfil.

Componente | Descripción | Estado  
---|---|---
Subir foto de perfil | Tamaño maximo 500x500 px | Sin asignar ❌
Cambiar email | - |Sin asignar ❌
Cambiar direccion | - | Sin asignar ❌
Cambiar descripcion | - | Sin asignar ❌
Cambiar redes sociales | - | Sin asignar ❌
Guardar cambios | - | Sin asignar ❌

##### 1.17 - Resultado de busqueda. 🚧
Muestra una lista de resultados de búsqueda.

Componente | Descripción | Estado  
---|---|---
Lista de inmuebles | Debe tener una imagen, el lugar, la indicacion del precio, cuantas inmobiliarias lo tienen, cuantos comentarios | Sin asignar ❌
Filtros de ordenamiento por indicadores | Indicador de precio, inmobiliarias, comentarios, popularidad, etc.. | Sin asignar ❌

##### 1.18 - Configuracion. 🚧
##### 1.19 - Editar inmueble. 🚧
##### 1.20 - Busqueda interactiva. 🚧
##### 1.21 - Denunciar publicación. 🚧
##### 1.22 - Chat. 🚧

---
## 2. Por Considerar
- Pagar para que un inmueble sea destacado
- Listar todas las inmobiliarias (pantalla Inmobiliarias)