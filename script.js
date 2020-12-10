const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarlink = document.getElementsByClassName('navbar-link')[0]

toggleButton.addEventListener('click', () => {
    navbarlink.classList.toggle('active')
})