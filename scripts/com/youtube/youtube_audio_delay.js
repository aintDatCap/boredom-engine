function addAudioDelay(seconds) {
  const video =
    document.querySelector(".html5-main-video") ||
    document.querySelector("video");

  if (!video) {
    console.error("Video element not found.");
    return;
  }

  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioContext();

    const source = ctx.createMediaElementSource(video);
    const delayNode = ctx.createDelay(5.0);
    delayNode.delayTime.value = seconds;

    source.connect(delayNode);
    delayNode.connect(ctx.destination);

    // If the video gets paused, the audio should also stop immediately
    video.addEventListener("pause", () => {
      if (ctx.state === "running") {
        ctx.suspend();
      }
    });

    video.addEventListener("play", () => {
      if (ctx.state === "suspended") {
        ctx.resume();
      }
    });

    if (!video.paused) {
      ctx.resume();
    }

    console.log(`Audio delayed by ${seconds}s. Sync logic applied.`);
  } catch (error) {
    console.error(
      "CORS Error: Unable to capture audio from this video source.",
      error
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  addAudioDelay(2); // two seconds delay between audio and video
});
