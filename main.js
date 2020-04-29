//Variables
const bk = document.querySelectorAll('.bk');

window.addEventListener('scroll', (e) => {
    if (scrollY > window.innerHeight - window.innerHeight + 100) {
        bk[0].style.opacity = '1';
        bk[0].style.marginTop = '0px';
        bk[0].style.transition = '0.4s ease-in';
    }
    if (scrollY > window.innerHeight + 100) {
        bk[1].style.opacity = '1';
        bk[1].style.marginTop = '0px';
        bk[1].style.transition = '0.4s ease-in';
    }
    if (scrollY > (window.innerHeight * 2) + 100) {
        bk[2].style.opacity = '1';
        bk[2].style.marginTop = '0px';
        bk[2].style.transition = '0.4s ease-in';
    }
})

function onReload() {
    if (scrollY == 0) return;
    if (performance.navigation.type == 1) {
        bk.forEach(b => {
            b.style.opacity = '1'
            b.style.marginTop = '0px';
            b.style.transition = '0.4s ease-in';
        })
    }
}

onReload();