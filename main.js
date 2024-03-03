document.addEventListener("DOMContentLoaded", function() {
    // Code to execute when the page loads
});

document.addEventListener("mousemove", function(event) {
    // Code to execute when the mouse moves
});

document.addEventListener("keydown", function(event) {
    // Code to execute when a key is pressed
});
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("#gallery img");
    images.forEach(function(image) {
        image.setAttribute("tabindex", "0");
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("#gallery img");
    const addImageBtn = document.getElementById("addImageBtn");

    addImageBtn.addEventListener("click", function() {
        const newImageSrc = prompt("Enter the URL of the new image:");
        if (newImageSrc) {
            const newImage = document.createElement("img");
            newImage.src = newImageSrc;
            newImage.alt = "New Image";
            newImage.setAttribute("tabindex", "0");
            document.getElementById("gallery").appendChild(newImage);
        }
    });
});