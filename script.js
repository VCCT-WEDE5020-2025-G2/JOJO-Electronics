
// Lightbox functionality

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const captionText = document.getElementById("caption");
const closebtn = document.getElementsByClassName("close")[0];

if (lightbox && lightboxImg && captionText && closebtn) {
    document.querySelectorAll(".gallery-img").forEach(img => {
        img.addEventListener("click", function() {
            lightbox.style.display = "block";
            lightboxImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
    });

    closebtn.addEventListener("click",() => {
        lightbox.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

    function closeLightbox() {
        lightbox.style.display = "none";
}
}




