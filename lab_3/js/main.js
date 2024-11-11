import { images } from './data/images.js';
import { Gallery } from './components/Gallery.js';
import { Lightbox } from './components/lightbox.js';

class App {
    constructor() {
        this.gallery = new Gallery(images, 'galleryGrid');
        this.lightbox = new Lightbox(images);
        this.initialize();
    }

    initialize() {
        this.gallery.setOnThumbnailClick((imageId) => {
            this.lightbox.open(imageId);
        });
        this.gallery.render();
    }
}

// Initialize the application when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new App();
});