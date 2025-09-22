
    var currentImageIndex = 0;
    var images = [
        "images/galeria-img1.png",
        "images/galeria-img2.png",
        "images/galeria-img3.png",
        "images/galeria-img4.png",
        "images/galeria-img5.png"
    ];

    function showImage(index) {
        document.getElementById('mainImage').src = images[index];
        currentImageIndex = index;
    }

    function changeImage(index) {
        showImage(index);
    }

    function prevImage() {
        if (currentImageIndex > 0) {
            showImage(currentImageIndex - 1);
        }
    }

    function nextImage() {
        if (currentImageIndex < images.length - 1) {
            showImage(currentImageIndex + 1);
        }
    }
    showImage(0);

    function toggleMenu() {
    const navbar = document.querySelector('.main-navbar ul');
    navbar.classList.toggle('active');
	}
