const ImageGallery = (() => {
    // Private variables and functions
    const galleryContainer = document.querySelector('.gallery-container');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');

    const images = [
        { full: 'assets/images/1.jpg', thumb: 'assets/images/1_thumb.jpg', caption: 'Caption for image 1' },
        { full: 'assets/images/2.jpg', thumb: 'assets/images/2_thumb.jpg', caption: 'Caption for image 2' },
        { full: 'assets/images/3.jpg', thumb: 'assets/images/3_thumb.jpg', caption: 'Caption for image 3' },
        { full: 'assets/images/4.jpg', thumb: 'assets/images/4_thumb.jpg', caption: 'Caption for image 4' },
        { full: 'assets/images/5.jpg', thumb: 'assets/images/5_thumb.jpg', caption: 'Caption for image 5' },
        { full: 'assets/images/6.jpg', thumb: 'assets/images/6_thumb.jpg', caption: 'Caption for image 6' },
        { full: 'assets/images/7.jpg', thumb: 'assets/images/7_thumb.jpg', caption: 'Caption for image 7' }
    ];

    let currentIndex = 0;

    // Function to open the lightbox
    const openLightbox = (index) => {
        currentIndex = index;
        lightboxImg.src = images[index].full;
        lightboxCaption.textContent = images[index].caption;
        lightbox.style.display = 'flex';
    };

    // Function to close the lightbox
    const closeLightbox = () => {
        lightbox.style.display = 'none';
    };

    // Function to show the previous image
    const showPrevImage = () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        openLightbox(currentIndex);
    };

    // Function to show the next image
    const showNextImage = () => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        openLightbox(currentIndex);
    };

    // Function to add event listeners
    const addEventListeners = () => {
        lightboxClose.addEventListener('click', closeLightbox);
        prevButton.addEventListener('click', showPrevImage);
        nextButton.addEventListener('click', showNextImage);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    };

    // Function to dynamically add thumbnails to the gallery
    const createThumbnails = () => {
        images.forEach((image, index) => {
            const imgElement = document.createElement('img');
            imgElement.src = image.thumb;
            imgElement.alt = image.caption;
            imgElement.classList.add('thumbnail');
            imgElement.addEventListener('click', () => openLightbox(index));
            galleryContainer.appendChild(imgElement);
        });
    };

    // Public API
    return {
        init: () => {
            createThumbnails();
            addEventListeners();
        }
    };
})();

// Initialize the image gallery when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    ImageGallery.init();
});