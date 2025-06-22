const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const closeButton = document.querySelector("#close-btn");
const lightboxImage = document.querySelector("#lightbox-image");

galleryItems.forEach(function (galleryItem) {
	galleryItem.addEventListener('click', function (e) {
		lightbox.style.display = "flex";
		lightbox.style.justifyContent = "space-between";
		lightboxImage.src = e.target.src.replace("-thumbnail", "");
	});
});

closeButton.addEventListener("click", function () {
	lightbox.style.display = "none";
});

lightbox.addEventListener("click", function () {
	lightbox.style.display = "none";
});