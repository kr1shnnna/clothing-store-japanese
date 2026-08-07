const reviewContainer = document.querySelector(".review-container");

reviewContainer.addEventListener("wheel", (event) => {
    event.preventDefault();

    reviewContainer.scrollLeft += event.deltaY;
});