/**
 * Class representing a gallery.
 */
export class Gallery {
    /**
     * Create a gallery.
     * @param {Array} images - The array of image objects.
     * @param {string} containerId - The ID of the container element.
     */
    constructor(images, containerId) {
        this.images = images;
        this.container = document.getElementById(containerId);
        this.onThumbnailClick = null;
    }

    /**
     * Set the callback function for thumbnail click events.
     * @param {function} callback - The callback function to be called when a thumbnail is clicked.
     */
    setOnThumbnailClick(callback) {
        this.onThumbnailClick = callback;
    }

    /**
     * Create a thumbnail element for an image.
     * @param {Object} image - The image object.
     * @param {string} image.thumbnail - The URL of the thumbnail image.
     * @param {string} image.caption - The caption for the image.
     * @param {string} image.id - The ID of the image.
     * @returns {HTMLElement} The thumbnail container element.
     */
    createThumbnail(image) {
        const container = document.createElement('div');
        container.className = 'thumbnail-container';
        
        const img = document.createElement('img');
        img.src = image.thumbnail;
        img.alt = image.caption;
        img.loading = 'lazy';
        
        container.appendChild(img);
        container.addEventListener('click', () => {
            if (this.onThumbnailClick) {
                this.onThumbnailClick(image.id);
            }
        });
        
        return container;
    }

    /**
     * Render the gallery by creating and appending thumbnails to the container.
     */
    render() {
        this.container.innerHTML = '';
        this.images.forEach(image => {
            this.container.appendChild(this.createThumbnail(image));
        });
    }
}