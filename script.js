// Toggle class active
const menu = document.querySelector ('.menu');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    menu.classList.toggle('active');
};

// NAVBAR I
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector(".container-navbar").style.top = "0";
    } else {
    document.querySelector(".container-navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}
