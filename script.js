
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

// Search functionality
const searchInput = document.getElementById('searchInput');
const productList = document.getElementById('productList');
const products = productList.getElementsByTagName('li');

searchInput.addEventListener('input', function() {
    const filter = searchInput.value.toLowerCase();

    for (let i = 0; i < products.length; i++) {
        const item = products[i].textContent.toLowerCase();
        if (item.includes(filter)) {
            products[i].classList.remove('hide');
        } else {
            products[i].classList.add('hide');
        }
    }
});





