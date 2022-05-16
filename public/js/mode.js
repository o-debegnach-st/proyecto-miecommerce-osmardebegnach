const changeMode = document.querySelector('#changeMode')
const userMenuTexto = document.querySelector('.user-menu-tema-texto')

if (localStorage.darkMode) {
    body.classList.toggle("darkMode")
    userMenuTexto.innerText = "Claro"
} else {
    userMenuTexto.innerText = "Oscuro"
}

changeMode.addEventListener('click',()=>{
    body.classList.toggle("darkMode")
    if (localStorage.darkMode) {
        localStorage.removeItem("darkMode")
        userMenuTexto.innerText = "Oscuro"
    } else {
        localStorage.setItem("darkMode", "true")
        userMenuTexto.innerText = "Claro"
    }
})
