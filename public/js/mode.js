const changeMode = document.querySelector('#changeMode')
const userMenuTexto = document.querySelector('.user-menu-tema-texto')
const changeText = () => {
    if (userMenuTexto) {
        localStorage.darkMode ? userMenuTexto.innerText = "Claro" : userMenuTexto.innerText = "Oscuro"
    }
}

if (localStorage.darkMode) {
    body.classList.toggle("darkMode")
    changeText()
}

changeMode?.addEventListener('click', () => {
    body.classList.toggle("darkMode")
    changeText()
    localStorage.darkMode ? localStorage.removeItem("darkMode") : localStorage.setItem("darkMode", "true")
})
