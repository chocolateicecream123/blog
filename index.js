document.addEventListener("DOMContentLoaded", () => {
    const picturesDiv = document.getElementById("pictures");

    // Create slideshow container
    const slideshowContainer = document.createElement("div");
    slideshowContainer.id = "slideshow";
    slideshowContainer.style.position = "relative";
    slideshowContainer.style.width = "500px";
    slideshowContainer.style.height = "300px";
    slideshowContainer.style.overflow = "hidden";

    // Array of image URLs
    const images = [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg"
    ];

    let currentIndex = 0;

    // Create image element
    const imgElement = document.createElement("img");
    imgElement.src = images[currentIndex];
    imgElement.style.width = "100%";
    imgElement.style.height = "100%";
    imgElement.style.position = "absolute";
    imgElement.style.transition = "opacity 0.5s";
    slideshowContainer.appendChild(imgElement);

    // Create navigation buttons
    const prevButton = document.createElement("button");
    prevButton.textContent = "Previous";
    prevButton.style.position = "absolute";
    prevButton.style.left = "10px";
    prevButton.style.top = "50%";
    prevButton.style.transform = "translateY(-50%)";
    slideshowContainer.appendChild(prevButton);

    const nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.style.position = "absolute";
    nextButton.style.right = "10px";
    nextButton.style.top = "50%";
    nextButton.style.transform = "translateY(-50%)";
    slideshowContainer.appendChild(nextButton);

    // Add event listeners for buttons
    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        imgElement.style.opacity = "0";
        setTimeout(() => {
            imgElement.src = images[currentIndex];
            imgElement.style.opacity = "1";
        }, 500);
    });

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        imgElement.style.opacity = "0";
        setTimeout(() => {
            imgElement.src = images[currentIndex];
            imgElement.style.opacity = "1";
        }, 500);
    });

    // Append slideshow to pictures div
    picturesDiv.appendChild(slideshowContainer);
});