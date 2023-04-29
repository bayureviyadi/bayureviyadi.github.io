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
