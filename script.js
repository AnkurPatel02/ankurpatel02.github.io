window.addEventListener("scroll", function () {
    var header = document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 0);
})

window.addEventListener("scroll", function () {
    var logoResize = document.querySelector("#logo");
    logoResize.classList.toggle("sticky", window.scrollY > 0);
})

window.addEventListener("scroll", function () {
    var buttonReline = document.querySelector("#navButton");
    buttonReline.classList.toggle("sticky", window.scrollY > 0);
})

window.addEventListener("scroll", function () {
    var buttonReline = document.querySelector(".checkbtn");
    buttonReline.classList.toggle("sticky", window.scrollY > 0);
})

