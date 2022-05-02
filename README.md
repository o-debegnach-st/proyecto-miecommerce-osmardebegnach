# proyecto-miecommerce-osmardebegnach

Estructura HTML con ejs como motor de plantilla, se usa CSS plano para estilos y express para el manejar el servidor.

## estructura de carpetas

en la raiz se encuentra el modulo app.js, dentro de la cual se importa express para levantar el servidor y se hace los request con diferentes end points. El packgage.json donde se instalan las dependencias, las carpeta views dividida en pages y partials. En assets esta los archivos css de cada pagina, dentro de la carpeta css y las imagenes usadas dentro de images.

### pages

El proyect cuenta con un pagina de login y register, index (pagina principal), productos (detalle de cada producto) y cart (carrito de compra). Para su desarrollo se usa ejs como motor de plantilla

### partials - diseño atomico

Para elementos globales (footer, header,head,barras de categoria,head) nos basamos en el diseño atomico. El mismo resuelve el problema de repeticion de codigo y reusabilidad del mismo. Generando elementos que luego se importan y se utilizan en distintas paginas del proyecto, consiguiendo mayor eficiencia y orden, como tambien niveles de jerarquizacion.   