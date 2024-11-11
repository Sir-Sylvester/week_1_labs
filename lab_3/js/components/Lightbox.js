import { formatDate } from '../utils/dateFormatter.js';

export class Lightbox {
    constructor(images) {
        this.images = images;
        this.currentIndex = 0;
        this.initializeElements();
        this.bindEvents();
    }

    initializeElements() {
        this.elements = {
            lightbox: document.getElementById('lightbox'),
            image: document.getElementById('lightboxImage'),
            caption: document.getElementById('lightboxCaption'),
            prevButton: document.getElementById('prevButton'),
            nextButton: document.getElementById('nextButton'),
            closeButton: document.getElementById('closeButton')
        };
    }

    bindEvents() {
        this.elements.prevButton.addEventListener('click', () => this.navigate('prev'));
        this.elements.nextButton.addEventListener('click', () => this.navigate('next'));
        this.elements.closeButton.addEventListener('click', () => this.close());
        document.addEventListener('keydown', (e) => this.handleKeyPress(e));
    }

    open(imageId) {
        this.currentIndex = this.images.findIndex(img => img.id === imageId);
        this.updateContent();
        this.elements.lightbox.classList.add('active');
        this.updateNavigationState();
    }

    close() {
        this.elements.lightbox.classList.remove('active');
    }

    navigate(direction) {
        if (direction === 'prev' && this.currentIndex > 0) {
            this.currentIndex--;
            this.updateContent();
        } else if (direction === 'next' && this.currentIndex < this.images.length - 1) {
            this.currentIndex++;
            this.updateContent();
        }
        this.updateNavigationState();
    }

    updateContent() {
        const image = this.images[this.currentIndex];
        this.elements.image.src = image.fullSize;
        this.elements.image.alt = image.caption;
        this.elements.caption.textContent = `${image.caption} - ${formatDate(image.timestamp)}`;
    }

    updateNavigationState() {
        this.elements.prevButton.disabled = this.currentIndex === 0;
        this.elements.nextButton.disabled = this.currentIndex === this.images.length - 1;
    }

    handleKeyPress(event) {
        if (!this.elements.lightbox.classList.contains('active')) return;

        const keyActions = {
            'ArrowLeft': () => this.navigate('prev'),
            'ArrowRight': () => this.navigate('next'),
            'Escape': () => this.close()
        };

        const action = keyActions[event.key];
        if (action) {
            event.preventDefault();
            action();
        }
    }
}