# Mi ecommerce

## Equipo5

Estructura HTML con ejs como motor de plantilla, se usa CSS plano para estilos y express para manejar el servidor.

## Estructura de carpetas

en la raiz se encuentra el modulo app.js, dentro de la cual se importa express para levantar el servidor y se hace los request con diferentes end points. El packgage.json donde se instalan las dependencias, las carpeta views dividida en pages y partials. En assets esta los archivos css de cada pagina, dentro de la carpeta css y las imagenes usadas dentro de images.

## Tecnologias
 *  [ejs]: Version 3.1.7
 *  [express]: Version 4.18.0
 *  [nodemon]: Version 2.0.16 > actualiza automaticamente el servidor.

## Instalacion 
    npm install 

### Pages

El proyecto esta conformado por :

1. Login .
2. Register.
3. Index (pagina principal).
4. Productos (detalle de cada producto). 
5. cart (carrito de compra). 

### Partials - Diseño atomico

Para elementos globales nos basamos en el diseño atomico. El mismo resuelve el problema de repeticion de codigo y reusabilidad del mismo. Generando elementos que luego se importan y se utilizan en distintas paginas del proyecto, consiguiendo mayor eficiencia y orden, como tambien niveles de jerarquizacion.

* barraCategorias
* cartProductos
* footer
* head
* header
* productCard
* userMenu

