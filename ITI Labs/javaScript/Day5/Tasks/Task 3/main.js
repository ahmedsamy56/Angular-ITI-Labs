var slides = document.getElementsByClassName("slider");
console.log(slides);
var index = 0;
var timer = null;

function showSlide(n) {
    slides[index].style.display = "none";

    if (n == slides.length) index = 0;
    else if (n < 0) index = slides.length - 1;
    else index = n;

    slides[index].style.display = "block";
}

function nextSlide() {
    showSlide(index + 1);
}

function prevSlide() {
    showSlide(index - 1);
}

function looping() {
    timer = setInterval(nextSlide, 500);
}

function stopLooping() {
    clearInterval(timer);
}