const clicker = document.querySelector('.clicker');
const hamburgerMenu = document.querySelector('.hamburger');
const navContainer = document.querySelector('.ulControl');
const xButton = document.querySelector('.ulControl p');

//Hamburger menu event listener
function hamburger() {
    clicker.addEventListener('click', (e) => {
        navContainer.classList.toggle('ulReveal');
        if (hamburgerMenu.classList.contains('hamburger-animator')) {
            hamburgerMenu.className = 'hamburger' + '';
            hamburgerMenu.classList.add('hamburger-animator-reverse');
        } else {
            hamburgerMenu.className = 'hamburger' + '';
            hamburgerMenu.classList.add('hamburger-animator');
        }
    });

    //Closes menu
    xButton.addEventListener('click', (e) => navContainer.classList.remove('ulReveal'));

    //Closes menu when clicking outside of it also animates hamburger menu to initial state when clicking outside of menu
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('ulControl') || e.target.classList.contains('clicker')) {
            return;

        } else {
            navContainer.classList.remove('ulReveal')
        };
        if (hamburgerMenu.classList.contains('hamburger-animator')) {
            hamburgerMenu.className = 'hamburger' + '';
            hamburgerMenu.classList.add('hamburger-animator-reverse');
        }
    })
}
hamburger();