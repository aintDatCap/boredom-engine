/**
 * Used internally to test the style
 */

const style = 
`.tw-image {
    filter: grayscale(100%) !important;
    -webkit-filter: grayscale(100%) !important;
}`;

const styleElement = document.createElement("style");
styleElement.textContent = style;
document.head.appendChild(styleElement);
