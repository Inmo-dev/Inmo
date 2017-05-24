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

##### 1.1 - Barra y menu general visble en todas las pantallas. 🆗
Esta barra y menú debe tener, en funcion a si el usuario está logeado o no:  

_(*NL*: No logeado)_  

Componente | Descripción | Estado  
---|---|---  
Botón de login. _(NL)_ | Ir a pantalla de login | Sin asignar ❌ 
Botón de registro. _(NL)_ | Ir a pantalla de registro | Sin asignar ❌ 
Botón de ir a perfil. | Ir al perfil personal | Sin asignar ❌ 
Botón de ir a configuraciones. | Ir a configuraciones | Sin asignar ❌ 
Botón de ir a pantalla de búsqueda. | Ir a pantalla de busqueda | Sin asignar ❌ 
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
##### 1.3 - Búsqueda. _(Página principal)_ 🚧
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

##### 1.5 - Sobre nosotros. 🚧  
Se encarga de mostrar toda la informacion referente a Inmo, de manera atractiva a los usuarios interesados. 

Componente | Descripción | Estado  
---|---|--- 
Redaccion sobre Inmo, imagenes, videos, presentaciones etc .. | - | Sin asignar ❌ 
Links hacia las redes sociales de inmo |-| Sin asignar ❌ 
Boton "Contacto" | Lleva a la pantalla de contacto | Sin asignar ❌

##### 1.6 - Contacto. 🚧
Lista todas las maneras posibles de contactar con Inmo, redes sociales, telefonos oficiales, emails, oficinas, etc..

Componente | Descripción | Estado  
---|---|--- 
Redacción sobre métodos de contacto | - | Sin asignar ❌
Links a redes sociales | - | Sin asignar ❌
Telefono/s | De ser posible | Sin asignar ❌
Email | De cada departamento | Sin asignar ❌

##### 1.7 - Preguntas frecuentes. 🚧
Seleccion interactiva de preguntas frecuentes sobre Inmo, sus sistemas, o la forma de trabajar de las inmobiliarias. Debe tener una referencia al correo de soporte _soporte@inmo.co.ve_  

Componente | Descripción | Estado  
---|---|--- 
Redaccion interactiva de preguntas frecuentes | - | Sin asignar ❌ 
Link al correo de soporte | soporte@inmo.co.ve | Sin asignar ❌ 

##### 1.8 - Perfil cliente. 🚧
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

##### 1.10 - Inmobiliarias. 🚧
##### 1.11 - Perfil inmobiliaria. 🚧
##### 1.12 - Registro. 🚧
##### 1.13 - Registro cliente. 🚧
##### 1.14 - Registro inmobiliaria. 🚧
##### 1.16 - Editar perfil. 🚧
##### 1.17 - Editar inmueble. 🚧
##### 1.18 - Configuracion. 🚧
##### 1.19 - Resultado de busqueda. 🚧
##### 1.20 - Vista de inmueble. 🚧
##### 1.21 - Busqueda interactiva. 🚧
---
## 2. Por Considerar
Pagar para que un inmueble sea destacado