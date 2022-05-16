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