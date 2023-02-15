// ! src for images
const images = [
  {
    img: "./images/inverted-dice-1.png",
    count: 1,
  },
  {
    img: "./images/inverted-dice-2.png",
    count: 2,
  },
  {
    img: "./images/inverted-dice-3.png",
    count: 3,
  },
  {
    img: "./images/inverted-dice-4.png",
    count: 4,
  },
  {
    img: "./images/inverted-dice-5.png",
    count: 5,
  },
  {
    img: "./images/inverted-dice-6.png",
    count: 6,
  },
];
// ** =================================== selectors =========================================== **
const gameImg = document.querySelector(".game-img"),
  button = document.getElementById("dice-buttons");
const sectionActive = document.querySelector(".player-active"),
  section = document.querySelectorAll("section");

// variable
let index = 0;
let countFirst = 0;
let countSecond = 0;

// ** =================================== functions =========================================== **

const generateImages = () => {
  const image = images.map((item, index) => {
    return `<img src="${item.img}" alt="image__dice" class="first" data-count="${item.count}"  /> `;
  });
  gameImg.innerHTML = image[randomImg()];
};

function randomImg() {
  index = Math.floor(Math.random() * 5) + 1;
  return index;
}

// ** =================================== events =========================================== **

button.addEventListener("click", (e) => {
  const target = e.target;

  if (target.classList.contains("btn-danger")) {
    generateImages();
    const currentFirstCount = document.getElementById("current-scrore-first");
    const currentSecondCount = document.getElementById("current-scrore-second");
    const currentDiceImg = document.querySelector(".game-img img");
    const currentDiceCount = currentDiceImg.getAttribute("data-count");
    if (section[0].classList.contains("player-active")) {
      currentFirstCount.textContent = currentDiceCount;
    }
    if (section[1].classList.contains("player-active")) {
      currentSecondCount.textContent = currentDiceCount;
    }
    // getCurrentDiceCount(currentFirstCount, currentDiceCount);
  } else if (target.classList.contains("btn-success")) {
    holdCurrentCount();
    section[0].classList.toggle("player-active");
    section[1].classList.toggle("player-active");
    showWinner();
  } else if (target.classList.contains("btn-primary")) {
    resetAll();
  }
});

function holdCurrentCount() {
  const firstScore = sectionActive.children[1];
  const secondScore = document.querySelector(".player-active").children[1];
  const currentFirstCount = document.getElementById("current-scrore-first");
  const currentSecondCount = document.getElementById("current-scrore-second");

  if (section[0].classList.contains("player-active")) {
    countFirst += parseInt(currentFirstCount.textContent);
    firstScore.textContent = countFirst;
    currentFirstCount.textContent = 0;
  }
  if (section[1].classList.contains("player-active")) {
    countSecond += parseInt(currentSecondCount.textContent);
    secondScore.textContent = countSecond;
    currentSecondCount.textContent = 0;
  }
}

function showWinner() {
  let difference;
  if (countFirst >= 10) {
    alert(
      `The first player is the winner \n difference between them is ${(difference =
        countFirst - countSecond)}`
    );
  }
  if (countSecond >= 10) {
    alert(
      `The first player is the winner \n difference between them is ${(difference =
        countSecond - countFirst)}`
    );
  }
}

function resetAll() {
  const scoreFirstPlayer = document.getElementById("score--1");
  const scoreSecondPlayer = document.getElementById("score--2");

  scoreFirstPlayer.textContent = 0;
  scoreSecondPlayer.textContent = 0;
  countFirst = 0;
  countSecond = 0;
}

// function getCurrentDiceCount(first, currentCount) {
//   if (sectionActive) {
//     first.textContent = currentCount;
//     countNum = currentCount;
//   } else {
//     first.textContent = 0;
//   }
// }
