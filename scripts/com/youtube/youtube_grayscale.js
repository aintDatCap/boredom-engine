function setupGrayscale() {
  const videoElement = document.querySelector(".video-stream.html5-main-video");

  if (videoElement) {
    videoElement.style.filter = "grayscale(100%)";
  } else {
    console.error("Video element not found!");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setupGrayscale();
});
