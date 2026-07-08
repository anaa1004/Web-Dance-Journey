const slides = document.querySelector('.slides');
const moments = document.querySelectorAll('.moment');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const sections = document.querySelectorAll("#content article");
const navLinks = document.querySelectorAll("nav a[href^='#']");

let currentIndex = 0;

function updateSlider() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;

    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === moments.length - 1;
}

nextButton.addEventListener("click", () => {
    if (currentIndex < moments.length - 1) {
        currentIndex++;
        updateSlider();
    }
});

prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

updateSlider();

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 160;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute("id");
            }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active")
        }
    });

});
