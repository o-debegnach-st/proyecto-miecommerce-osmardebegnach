const button = document.querySelector('.header-user-card');
const userMenu = document.querySelector('#userMenu')

button.addEventListener('click',()=>{
    console.log('click')
     userMenu.classList.toggle('open')
})