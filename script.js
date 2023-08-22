console.log("Welcome to spotify");

// Initializing Variables
let songIndex = 0;
let audioElement = new Audio("/Songs/2 Woofer Hustle 2.0 320 Kbps.mp3");
let play = document.getElementById("play");
let myProgressBar = document.getElementById("myProgressBar");
let songs = [
  { songName: "2 woofer", filePath: "/Songs/2 Woofer Hustle 2.0 320 Kbps.mp3" },
  { songName: "101", filePath: "/Songs/101 Hustle 2.0 320 Kbps.mp3" },
  { songName: "4 Din", filePath: "/Songs/4 Din Hustle 2.0 320 Kbps.mp3" },
  { songName: "4 Guna", filePath: "/Songs/4 Guna Hustle 2.0 320 Kbps.mp3" },
];

// Handle play/pause
play.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    play.classList.remove("fa-circle-play");
    play.classList.add("fa-circle-pause");
  } else {
    audioElement.pause();
    play.classList.remove("fa-circle-pause");
    play.classList.add("fa-circle-play");
  }
});

// Listen to Events

audioElement.addEventListener("timeupdate", () => {
  // update seekbar
  let progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});
