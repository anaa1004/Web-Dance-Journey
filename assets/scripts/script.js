const slides = document.querySelector('.slides');
const moments = document.querySelectorAll('.moment');

let currentIndex = 0;

document.querySelector(".next").addEventListener("click", () => {
    currentIndex++;

    if (currentIndex >= moments.length) {
        currentIndex = 0;
    }

    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
});

document.querySelector(".prev").addEventListener("click", () => {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = moments.length - 1;
    }

    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
});
