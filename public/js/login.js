window.addEventListener('load', (event) => {
  let form = document.querySelector('form')
  let check = document.querySelector('form #recuerdame')
  let userName = document.querySelector('#email')
 
  if(localStorage.userName){
    userName.value = localStorage.userName
    check.checked = true
  }

  form.addEventListener('submit', ()=>{
    let recordar = check.checked
    if(recordar){
      localStorage.setItem('userName', userName.value)
    }else if (localStorage.userName){
      localStorage.removeItem('userName')
    }
  })
});


//Estraido de login.ejs
window.addEventListener("load",function() {
  const passwordElement = document.querySelector('#password');
  let formulario = document.querySelector('form.inputs')
  const button = document.querySelector('.boton')
  let email = document.querySelector('#email');

  function isEmpty() {
    let flag = false;
    if (email.value === '') {
      flag = true;
    }
    if (passwordElement.value === '') {
      flag = true;
    }


    if (flag === true) {
      button.disabled = true;
      button.style.backgroundColor = 'grey'
    } else {
      button.disabled = false;
      button.style.backgroundColor = 'var(--verde)'
    }
  }

  formulario.addEventListener("keyup", isEmpty)

})
