# Ventana Modal

## Parametros {#parametros}

- title: `String` Indica el titulo de la ventada modal. Acepta texto enriquecido 
- body: `String` Indica el cuerpo de la ventada modal. Acepta texto enriquecido
- hasSecondaryButton: `Boolean` Indica si la ventana modal posee o no un boton secundario
- primaryAction: `String` Indica la accion del boton primario
  Posibles valores:
  - close: Cierra la ventana modal y fija como resultado 'closed'
  - submit: Cierra la ventana modal y fija como resultado 'submited'
  - cancel: Cierra la ventana modal y fija como resultado 'canceled'
- secondaryAction: `String` Indica la accion del boton secundario
  Posibles valores:
  - close: Cierra la ventana modal y fija como resultado 'closed'
  - submit: Cierra la ventana modal y fija como resultado 'submited'
  - cancel: Cierra la ventana modal y fija como resultado 'canceled'
- isOpen: `Boolean` Indica si la modal comienza abierta o cerrada


## Resultado

El resultado de la ventana modal devuelto en el dataset result (atrributo data-result) del contenedor de la ventana (div con clase "modal-container")

Posibles resultados: 
- closed: indica que la ventana se cerro sin aceptar ni cancelar
- submited: indica que la ventana se cerro con respuesta positiva de parte del usuario
- canceled: indica que la ventana se cerro con respuesta negativa de parte del usuario

# Uso

1. Incluir al final del body el partial modal.ejs con los [parametros](#parametros) detallados anteriormente.
2. Para abrir la ventana modal via JS quite la clase 'hidden' del conteneror de la ventana el cual tiene la clase 'modal-container'.

	> Un ejemplo seria hacer lo siguiente:
	> const container = document.querySelector(".modal-container")
	> const openModal = () => {
	> 	container.classList.remove("hidden")
	> }
	> openModal()
