console.log("Welcome to spotify");

// Initializing Variables
const songs = [
  {
    songName: "2 Woofer Hustle 2.0",
    filePath: "Songs/2 Woofer Hustle 2.0 320 Kbps.mp3",
    coverImg: "Assets/cover_1.jpeg",
  },
  {
    songName: "4 Din Hustle 2.0",
    filePath: "Songs/4 Din Hustle 2.0 320 Kbps.mp3",
    coverImg: "Assets/cover_1.jpeg",
  },
  {
    songName: "4 Guna Hustle 2.0",
    filePath: "Songs/4 Guna Hustle 2.0 320 Kbps.mp3",
    coverImg: "Assets/cover_1.jpeg",
  },
  {
    songName: "101 Hustle 2.0",
    filePath: "Songs/101 Hustle 2.0 320 Kbps.mp3",
    coverImg: "Assets/cover_1.jpeg",
  },
  {
    songName: "Azaadi Hustle 2.0",
    filePath: "Songs/Azaadi - Hustle 2.0 320 Kbps.mp3",
    coverImg: "Assets/cover_1.jpeg",
  },
  {
    songName: "Glitch Hustle 2.0",
    filePath: "Songs/Glitch(Mr-Jatt1.com).mp3",
    coverImg: "Assets/cover_1.jpeg",
  },
  {
    songName: "Heavy Driver Hustle 2.0",
    filePath: "Songs/Heavy Driver(Mr-Jatt1.com).mp3",
    coverImg: "Assets/cover_1.jpeg",
  },
  {
    songName: "Hum Bhi Kya Kam Hain Hustle 2.0",
    filePath: "Songs/Hum Bhi Kya Kam Hain(Mr-Jatt1.com).mp3",
    coverImg: "Assets/cover_1.jpeg",
  },
  {
    songName: "Itni Shakti Hustle 2.0",
    filePath: "Songs/Itni Shakti(Mr-Jatt1.com).mp3",
    coverImg: "Assets/cover_1.jpeg",
  },
  {
    songName: "Jehda Nasha Hustle 2.0",
    filePath: "Songs/Jehda Nasha(Mr-Jatt1.com).mp3",
    coverImg: "Assets/cover_1.jpeg",
  },
  {
    songName: "Mileya ni Hustle 2.0",
    filePath: "Songs/Mileya ni(Mr-Jatt1.com).mp3",
    coverImg: "Assets/cover_1.jpeg",
  },
  {
    songName: "Naina Ki Talwar Hustle 2.0",
    filePath: "Songs/Naina Ki Talwar(Mr-Jatt1.com).mp3",
    coverImg: "Assets/cover_1.jpeg",
  },
  {
    songName: "Rap Relay Hustle 2.0",
    filePath: "Songs/Rap Relay(Mr-Jatt1.com).mp3",
    coverImg: "Assets/cover_1.jpeg",
  },
  {
    songName: "101 Hustle 2.0",
    filePath: "Songs/101 Hustle 2.0 320 Kbps.mp3",
    coverImg: "Assets/cover_1.jpeg",
  },
];
let songIndex = 0;
let audioElement = new Audio(songs[songIndex].filePath);
let play = document.getElementById("play");
let previous = document.getElementById("previous");
let next = document.getElementById("next");
let myProgressBar = document.getElementById("myProgressBar");
let startTime = document.getElementById("startTime");
let endTime = document.getElementById("endTime");
let barImg = document.getElementById("barImg");
let songName = document.getElementById("songName");
let vol = document.getElementById("volume");

// Listen to Events

// Handle song info
audioElement.addEventListener("play", () => {
  barImg.src = songs[songIndex].coverImg;
  songName.innerText = songs[songIndex].songName;
});

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

//Handle volume
volume.addEventListener("change", () => {
  audioElement.volume = vol.value;
});

audioElement.addEventListener("timeupdate", () => {
  // update seekbar
  let progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );
  myProgressBar.value = progress;
  // timeline
  let crtminute = parseInt(audioElement.currentTime / 60);
  let crtseconds = parseInt(audioElement.currentTime % 60);
  startTime.innerText = crtminute + ":" + crtseconds;
  let drtminute = parseInt(audioElement.duration / 60);
  let drtseconds = parseInt(audioElement.duration % 60);
  endTime.innerText = drtminute + ":" + drtseconds;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

previous.addEventListener("click", () => {
  if (songIndex == 0) {
    songIndex = songs.length;
  }
  audioElement.src = songs[songIndex - 1].filePath;
  audioElement.play();
  songIndex = songIndex - 1;
});

next.addEventListener("click", () => {
  if (songIndex == songs.length - 1) {
    songIndex = -1;
  }
  audioElement.src = songs[songIndex + 1].filePath;
  audioElement.play();
  songIndex = songIndex + 1;
});
