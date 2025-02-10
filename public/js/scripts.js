// Open Lightbox
function openLightbox(imageSrc) {
    document.getElementById("lightbox-img").src = imageSrc;
    document.getElementById("lightbox").style.display = "flex";
}

// Close Lightbox when clicking outside or on the close button
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// Close Lightbox on clicking outside the image
document.getElementById("lightbox").addEventListener("click", function(event) {
    if (event.target === this) {
        closeLightbox();
    }
});