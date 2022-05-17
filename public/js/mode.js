const changeMode = document.querySelector('#changeMode')
const userMenuTexto = document.querySelector('.user-menu-tema-texto')
const changeText = () => {
    if (userMenuTexto) {
        localStorage.darkMode ? userMenuTexto.innerText = "Claro" : userMenuTexto.innerText = "Oscuro"
    }
}
const toggleDarkMode = () => {
    body.classList.toggle("darkMode")
}


window.onload = (() => {
    changeText()
    if (localStorage.darkMode) {
        toggleDarkMode()
    }

    changeMode?.addEventListener('click', () => {
        localStorage.darkMode ? localStorage.removeItem("darkMode") : localStorage.setItem("darkMode", "true")
        toggleDarkMode()
        changeText()
    })
})