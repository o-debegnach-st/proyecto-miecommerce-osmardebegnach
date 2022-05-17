# Mi ecommerce

## Equipo5

Estructura HTML con ejs como motor de plantilla, se usa CSS plano para estilos y express para manejar el servidor.

**_*ACTUALIZACION*_**

En esta version se agregan las dependendecias node-fetch para hacer llamados a una api externa y el express-validator para realizar validaciones.

## Estructura de carpetas

El modelo seguido para la estructuracion de las carpetas es el MVC (Model Views Controllers).
En la raiz se encuentra el modulo app.js, dentro de la cual se importa express para levantar el servidor y se hace los request con diferentes end points. El packgage.json donde se instalan las dependencias, las carpeta views dividida en pages y partials. En assets esta los archivos css de cada pagina, dentro de la carpeta css y las imagenes usadas dentro de images.

**_*ACTUALIZACION*_**

En el root se creo la carpeta src, dentro la carpeta controllers, en la misma estan los archivos productsController.js y usersController.js , que contienen la logica de la aplicacion. Tambien en src se agregaron las carpetas middlewares con funciones de validacion, utils con funciones auxiliares y db donde se guardan en un json la informacion de los usuarios. 

**_*ACTUALIZACION 2*_**
Se creo la carpeta js, en donde se guardan los archivos .js que contienen la inteligencia que dispara lso eventos, como el dark mode, ventanas modales, almacenamiento en local starage.
Se consiguio que el sitio web sea responsive, y que la barra del menu de usuario se adapte a distintos tamaños de ventanas.

## Tecnologias
 *  [ejs]: Version 3.1.7
 *  [express]: Version 4.18.0
 *  [nodemon]: Version 2.0.16 > actualiza automaticamente el servidor.
 * [node-fetch]: Version 2.6.7
 * [express-validator]: Version 6.14.0

## Instalacion 
    npm install 

### Pages

El proyecto esta conformado por :

1. Login .
2. Register.
3. Index (pagina principal).
4. Productos (detalle de cada producto). 
5. Cart (carrito de compra).

**_*ACTUALIZACION*_**

6. Checkout.
7. Error 404 page.


### Partials - Diseño atomico

Para elementos globales nos basamos en el diseño atomico. El mismo resuelve el problema de repeticion de codigo y reusabilidad del mismo. Generando elementos que luego se importan y se utilizan en distintas paginas del proyecto, consiguiendo mayor eficiencia y orden, como tambien niveles de jerarquizacion.

* barraCategorias
* cartProductos
* footer
* head
* header
* productCard
* userMenu

### Rutas

* / --- pagina de inicio
* /products/id --- obtiene un producto por su ID
* /cart --- pagina del carrito
* /checkout --- pagina de pago
* /register --- pagina de registro
* /login --- pagina de login

* /products --- obtiene la lista de productos
* /id/product-detail --- obtiene productos relacionados el id del producto ingresado
* /products/mostwanted --- obtiene una lista de productos mas buscados
* /products/suggested --- obtiene una lista de productos sugeridos 



