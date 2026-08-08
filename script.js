const reviewContainer = document.querySelector(".review-container");

reviewContainer.addEventListener("wheel", (event) => {
    event.preventDefault();

    reviewContainer.scrollLeft += event.deltaY;
});



const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});