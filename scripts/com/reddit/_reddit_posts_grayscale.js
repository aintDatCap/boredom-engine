/**
 * Used internally to test the style
 */

const style = 
`img, video, shreddit-player {
    filter: grayscale(100%) !important;
    -webkit-filter: grayscale(100%) !important;
}`;

const styleElement = document.createElement("style");
styleElement.textContent = style;
document.head.appendChild(styleElement);
