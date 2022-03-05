"use strict";
var slideIndex = 1;

var slides = document.getElementsByClassName("imageSlides");
setInterval(function() {
    if (slideIndex <= slides.length) {
        console.log(slideIndex);
        showSlide(slideIndex);
        if (slideIndex === 6) {
            setTimeout(function() {
                slides[slideIndex - 1].style.display = "none";
                slideIndex = 1;
            }, 1500);
        } else {
            slideIndex++;
        }

    }

}, 1500);


function showSlide(n) {

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    slides[slideIndex - 1].style.display = "block";

    if ((slideIndex - 2) >= 0) {
        slides[slideIndex - 2].style.display = "none";
    }


}