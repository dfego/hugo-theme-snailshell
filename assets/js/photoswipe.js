import PhotoSwipeLightbox from "/photoswipe/dist/photoswipe-lightbox.esm.js";
import PhotoSwipe from "/photoswipe/dist/photoswipe.esm.js";

const lightbox = new PhotoSwipeLightbox({
    gallery: ".gallery",
    children: ".gallery-item",
    pswpModule: PhotoSwipe,
    loop: false,
    tapAction: "close",
    doubleTapAction: false,
});

lightbox.init();
