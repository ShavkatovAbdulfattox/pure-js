const surah = document.querySelector("audio"),
  btnPlay = document.querySelector(".play"),
  btnStop = document.querySelector(".stop"),
  btnVolume = document.getElementById("volume"),
  parent = document.querySelector(".content-btn"),
  buttons = document.querySelectorAll(".content-btn button");

let vol = 1,
  muted = false;

function playOrPause() {
  btnStop.textContent = "Stop";
  if (!surah.paused) {
    surah.pause();
    this.textContent = "Play";
  } else {
    surah.play();
    this.textContent = "Pause";
  }
}

function stop() {
  surah.pause();
  this.textContent = "Stopped";
  btnPlay.textContent = "Play";
  surah.currentTime = 0;
  document.getElementById("seek").value = 0;
}

function skip(target) {
  console.log(target);
  if (target.textContent === "Skip Back") {
    console.log((surah.currentTime -= 5));
  } else if (target.textContent === "Skip Forward") {
    console.log((surah.currentTime += 5));
  }
}

function checkActive(target) {
  buttons.forEach((btnActive) => {
    btnActive.classList.remove("btn-active");
  });
  target.classList.add("btn-active");
}

function setVolume(volume) {
  surah.volume = volume;
  vol = volume;
}

// ******************** !Handle events *************************

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("seek").value = 0;
  btnVolume.value = 1;
});

surah.addEventListener("timeupdate", () => {
  let currentTime = parseInt(surah.currentTime, 10);
  document.getElementById("seek").max = surah.duration;
  document.getElementById("seek").value = currentTime;
});

btnPlay.addEventListener("click", () => {
  playOrPause.call(btnPlay);
});

btnStop.addEventListener("click", () => {
  stop.call(btnStop);
});
btnVolume.addEventListener("input", (e) => {
  setVolume(e.target.value);
});
parent.addEventListener("click", (e) => {
  const target = e.target;
  skip(target);
  checkActive(target);
});
// setInterval(() => {
//   document.getElementById("time").textContent = Math.trunc(surah.currentTime);
// }, 1000);
