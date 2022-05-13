const button = document.querySelector('.header-user-card');
const userMenu = document.querySelector('#userMenu')
const body = document.querySelector('body')
const popUp = document.querySelector('#fondoBlur')

button.addEventListener('click',(e)=>{
    e.stopPropagation();
    popUp.classList.toggle('hidden')
    userMenu.classList.toggle('open')
})

popUp.addEventListener('click',()=>{
    if (userMenu.classList.contains('open')){
        userMenu.classList.toggle('open')
        popUp.classList.toggle('hidden')
    }
})