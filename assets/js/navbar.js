const navbarElement = document.querySelector("nav.navbar");
window.addEventListener("scroll", () => {
    if (window.scrollY >= 56) {
        navbarElement.classList.add("navbar-opaque");
    } else {
        navbarElement.classList.remove("navbar-opaque");
    }
});
