console.log("Welcome to spotify");

// Initializing Variables
const songs = [
  {
    songName: "2 Woofer Hustle 2.0",
    filePath: "Songs/2 Woofer Hustle 2.0 320 Kbps.mp3",
    coverImg: "Assets/cover_1.jpeg",
    singer: "MC Square",
  },
  {
    songName: "4 Din Hustle 2.0",
    filePath: "Songs/4 Din Hustle 2.0 320 Kbps.mp3",
    coverImg: "Assets/cover_1.jpeg",
    singer: "MC Square",
  },
  {
    songName: "4 Guna Hustle 2.0",
    filePath: "Songs/4 Guna Hustle 2.0 320 Kbps.mp3",
    coverImg: "Assets/cover_1.jpeg",
    singer: "Super Manikk",
  },
  {
    songName: "101 Hustle 2.0",
    filePath: "Songs/101 Hustle 2.0 320 Kbps.mp3",
    coverImg: "Assets/cover_1.jpeg",
    singer: "MC Square",
  },
  {
    songName: "Azaadi Hustle 2.0",
    filePath: "Songs/Azaadi - Hustle 2.0 320 Kbps.mp3",
    coverImg: "Assets/cover_1.jpeg",
    singer: "KhaanZaadi",
  },
  {
    songName: "Glitch Hustle 2.0",
    filePath: "Songs/Glitch(Mr-Jatt1.com).mp3",
    coverImg: "Assets/cover_1.jpeg",
    singer: "Paradox",
  },
  {
    songName: "Heavy Driver Hustle 2.0",
    filePath: "Songs/Heavy Driver(Mr-Jatt1.com).mp3",
    coverImg: "Assets/cover_1.jpeg",
    singer: "Nazz",
  },
  {
    songName: "Hum Bhi Kya Kam Hain Hustle 2.0",
    filePath: "Songs/Hum Bhi Kya Kam Hain(Mr-Jatt1.com).mp3",
    coverImg: "Assets/cover_1.jpeg",
    singer: "UNB",
  },
  {
    songName: "Itni Shakti Hustle 2.0",
    filePath: "Songs/Itni Shakti(Mr-Jatt1.com).mp3",
    coverImg: "Assets/cover_1.jpeg",
    singer: "Paradox",
  },
  {
    songName: "Jehda Nasha Hustle 2.0",
    filePath: "Songs/Jehda Nasha(Mr-Jatt1.com).mp3",
    coverImg: "Assets/cover_1.jpeg",
    singer: "Dee MC, Spectra Music, QK, Super Manikk",
  },
  {
    songName: "Mileya ni Hustle 2.0",
    filePath: "Songs/Mileya ni(Mr-Jatt1.com).mp3",
    coverImg: "Assets/cover_1.jpeg",
    singer: "Paradox",
  },
  {
    songName: "Naina Ki Talwar Hustle 2.0",
    filePath: "Songs/Naina Ki Talwar(Mr-Jatt1.com).mp3",
    coverImg: "Assets/cover_1.jpeg",
    singer: "MC Square",
  },
  {
    songName: "Rap Relay Hustle 2.0",
    filePath: "Songs/Rap Relay(Mr-Jatt1.com).mp3",
    coverImg: "Assets/cover_1.jpeg",
    singer: "Various Artists",
  },
  {
    songName: "After-Effects Hustle 2.0",
    filePath: "Songs/After-Effects_320(PagalWorldl).mp3",
    coverImg: "Assets/cover_1.jpeg",
    singer: "MC Square",
  },
  {
    songName: "All-Contestant-Medley Hustle 2.0",
    filePath: "Songs/All-Contestant-Medley_320(PagalWorldl).mp3",
    coverImg: "Assets/cover_1.jpeg",
    singer: "Various Artists",
  },
  {
    songName: "Badmash-Chora Hustle 2.0",
    filePath: "Songs.Badmash-Chora_320(PagalWorldl).mp3",
    coverImg: "Assets/cover_1.jpeg",
    singer: "MC Square",
  },
  {
    songName: "Drop-the-Beat Hustle 2.0",
    filePath: "Songs/Drop-the-Beat_320(PagalWorldl).mp3",
    coverImg: "Assets/cover_1.jpeg",
    singer: "Various Artists",
  },
  {
    songName: "Le Le Rom Rom Hustle 2.0",
    filePath: "Songs/Le Le Rom Rom - MC Square-(DJMaza).mp3",
    coverImg: "Assets/cover_1.jpeg",
    singer: "MC Square",
  },
  {
    songName: "Represent Hustle 2.0",
    filePath: "Songs/Represent_320(PagalWorldl).mp3",
    coverImg: "Assets/cover_1.jpeg",
    singer: "Gravity",
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
let showCards = document.getElementById("showCards");
let back = document.getElementById("back");

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
document.addEventListener("keypress", (event) => {
  if (event.code == "Space" && audioElement.paused) {
    audioElement.play();
    play.classList.remove("fa-circle-play");
    play.classList.add("fa-circle-pause");
  } else if (event.code == "Space") {
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
// Handle next/previous
previous.addEventListener("click", () => {
  if (songIndex == 0) {
    songIndex = songs.length;
  }
  audioElement.src = songs[songIndex - 1].filePath;
  audioElement.play();
  play.classList.remove("fa-circle-play");
  play.classList.add("fa-circle-pause");
  songIndex = songIndex - 1;
});

next.addEventListener("click", () => {
  if (songIndex == songs.length - 1) {
    songIndex = -1;
  }
  audioElement.src = songs[songIndex + 1].filePath;
  audioElement.play();
  play.classList.remove("fa-circle-play");
  play.classList.add("fa-circle-pause");
  songIndex = songIndex + 1;
});

// Showing all songs
showCards.addEventListener("click", () => {
  window.location = "http://127.0.0.1:5500/all_Cards.html";
});
//Returning to home page
back.addEventListener("click", () => {
  window.location = "http://127.0.0.1:5500/index.html";
});

// Play songs using cards
for (let i = 0; i < songs.length; i++) {
  let card_play = document.getElementById("card_" + i);
  card_play.addEventListener("click", () => {
    audioElement.src = songs[i].filePath;
    audioElement.play();
    play.classList.remove("fa-circle-play");
    play.classList.add("fa-circle-pause");
    songIndex = i;
  });
}
