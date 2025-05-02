let mybutton = document.getElementById("scrollToTopBtn");
window.onscroll = function() {
    scrollFunction();
};
function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
mybutton.onclick = function() {
    scrollToTop();
};
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
