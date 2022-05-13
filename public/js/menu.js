const button = document.querySelector('.header-user-card');
const userMenu = document.querySelector('#userMenu')
const body = document.querySelector('body')

button.addEventListener('click',(e)=>{
    e.stopPropagation();
    userMenu.classList.toggle('open')

})

body.addEventListener('click',(e)=>{
    console.log('click')
    if (userMenu.classList.contains('open')){
        userMenu.classList.remove('open')
    }
})