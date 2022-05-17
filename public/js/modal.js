window.addEventListener("load", (event) => {
	const container = document.querySelector(".modal-container");
  const modal = document.querySelector(".modal");
  const primaryButton = document.querySelector("#primaryButton");
  const secondaryButton = document.querySelector("#secondaryButton");

  const para = document.querySelector('.para')


	container.addEventListener("click", (e) => {
    e.stopPropagation()
    closeModal()
	});

	modal.addEventListener("click", (e) => {
    e.stopPropagation()
	});

  const closeModal = () => {
    container.classList.add('hidden')
    container.dataset.result = 'closed'
  }

  const submitModal = () => {
    container.classList.add('hidden')
    container.dataset.result = 'submited'
  }

  const cancelModal = () => {
    container.classList.add('hidden')
    container.dataset.result = 'canceled'
  }


  const getAction = (action) => {
    switch (action) {
      case 'close':
        return closeModal

      case 'submit':
        return submitModal
    
      case 'cancel':
        return cancelModal
    }
  }

  const getActionMessage = (action) => {
    switch (action) {
      case 'close':
        return 'Cerrar'

      case 'submit':
        return 'Aceptar'
    
      case 'cancel':
        return 'Cancelar'
    }
  }

  let primaryAction = primaryButton.dataset.action || 'close';
  
/*   console.log(primaryButton)
 */
  primaryButton.innerHTML = getActionMessage(primaryAction)
  primaryButton.addEventListener('click', () => {
    console.log('clickeado primario');
    let action = getAction(primaryAction);
    console.log(action);
    action()
  })

  if(secondaryButton){
    let secondaryAction = secondaryButton.dataset.action || 'close';
    
    secondaryButton.innerHTML = getActionMessage(secondaryAction)
    secondaryButton.addEventListener('click', getAction(secondaryAction))
  }

});
