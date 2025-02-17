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

// Initialize AOS animations
document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
        duration: 1000, // Animation duration (in ms)
        once: true,      // Only animate once
    });
});


// Change navbar background on scroll
window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".sticky-navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const galleryContainer = document.getElementById("gallery-container");
    const totalImages = 4; // Change this number based on your total images

    for (let i = 1; i <= totalImages; i++) {
        // Create a div element for each gallery item
        const colDiv = document.createElement("div");
        colDiv.classList.add("col-md-4");

        // Create a div for the image
        const galleryItem = document.createElement("div");
        galleryItem.classList.add("gallery-item");

        // Create an image element
        const img = document.createElement("img");
        img.src = `/image/gallery/${i}.png`; // Adjust format if needed (jpg, png, webp)
        img.alt = `Hình ảnh ${i}`;
        img.setAttribute("loading", "lazy"); // Enable lazy loading
        img.onclick = function () { openLightbox(`/image/gallery/${i}.png`); }; // Open lightbox when clicked

        
        // Append elements
        galleryItem.appendChild(img);
        colDiv.appendChild(galleryItem);
        galleryContainer.appendChild(colDiv);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.createElement("div");
    scrollToTopBtn.id = "scrollToTop";
    scrollToTopBtn.innerHTML = "&#8593;";
    document.body.appendChild(scrollToTopBtn);

    // Show/hide button on scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            scrollToTopBtn.classList.add("show");
        } else {
            scrollToTopBtn.classList.remove("show");
        }
    });

    // Scroll to top when clicked
    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const banner = document.querySelector(".floating-banner");
    const navbar = document.querySelector(".sticky-navbar");

    function updateNavbarPosition() {
        if (banner) {
            const bannerHeight = banner.offsetHeight;
            document.documentElement.style.setProperty("--banner-height", `${bannerHeight}px`);
        }
    }

    updateNavbarPosition();
    window.addEventListener("resize", updateNavbarPosition);
});