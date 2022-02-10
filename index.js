let R = 0;
let G = 0;
let B = 0;

let clicked = 0;

let left = document.getElementById("left-colour");
let middle = document.getElementById("middle-colour");
let right = document.getElementById("right-colour");

let rgb = document.getElementById("rgb-el");

let instructionEl = document.getElementById("instructions");

let correctColour = 0;

let streak = 0;
let highScore = 0;
let streakEl = document.getElementById("streak-el");
let highScoreEl = document.getElementById("high-score-el");

resetStreak();
newGame();

function newGame() {
  console.log("--New Round--");
  correctColour = Math.floor(Math.random() * 3);

  if (correctColour == 0) {
    left.style.backgroundColor = makeColour();
    middle.style.backgroundColor = makeSimilarColour();
    right.style.backgroundColor = makeSimilarColour();
  } else if (correctColour == 1) {
    middle.style.backgroundColor = makeColour();
    left.style.backgroundColor = makeSimilarColour();
    right.style.backgroundColor = makeSimilarColour();
  } else {
    right.style.backgroundColor = makeColour();
    left.style.backgroundColor = makeSimilarColour();
    middle.style.backgroundColor = makeSimilarColour();
  }

  rgb.textContent = "RGB(" + R + ", " + G + ", " + B + ")";
}

function checkColour() {
  if (clicked == correctColour) {
    streak++;
    correctResult();

    if (streak >= highScore) {
      highScore = streak;
      console.log("New High Score: " + highScore);
    }

    setTimeout(function () {
      instructions();
    }, 500);
  } else {
    incorrectResult();
    resetStreak();
    setTimeout(function () {
      instructions();
    }, 1500);
  }

  streakEl.textContent = "STREAK: " + streak;
  highScoreEl.textContent = "HIGH SCORE: " + highScore;
  newGame();
}

function makeColour() {
  R = Math.floor(Math.random() * 256);
  G = Math.floor(Math.random() * 256);
  B = Math.floor(Math.random() * 256);

  console.log("RGB(" + R + ", " + G + ", " + B + ")\n");

  // console.log(
  //   "RGB(" + R + ", " + G + ", " + B + ")\n" + "Answer: " + correctColour
  // );

  return "rgb(" + R + ", " + G + ", " + B + ")";
}

function makeSimilarColour() {
  let Rsimilar = R + Math.floor((Math.random() * 2 - 1) * 100);
  let Gsimilar = G + Math.floor((Math.random() * 2 - 1) * 100);
  let Bsimilar = B + Math.floor((Math.random() * 2 - 1) * 100);

  if (Rsimilar < 0) {
    Rsimilar = 0;
  }
  if (Gsimilar < 0) {
    Gsimilar = 0;
  }
  if (Bsimilar < 0) {
    Bsimilar = 0;
  }

  console.log(
    "Fake Colour: RGB(" + Rsimilar + ", " + Gsimilar + ", " + Bsimilar + ")"
  );

  return "rgb(" + Rsimilar + ", " + Gsimilar + ", " + Bsimilar + ")";
}

function correctResult() {
  instructionEl.textContent = "CORRECT!";
  instructionEl.style.color = "rgb(0, 185, 0)";
  console.log("Correct! (" + correctColour + ")\nStreak: " + streak);
}

function incorrectResult() {
  instructionEl.textContent = "INCORRECT. Streak: " + streak;
  instructionEl.style.color = "red";
  console.log(
    "Wrong square selected: " +
      clicked +
      "\nAnswer: " +
      correctColour +
      "\nStreak: " +
      streak
  );
}

function leftClicked() {
  clicked = 0;
  checkColour();
}
function middleClicked() {
  clicked = 1;
  checkColour();
}
function rightClicked() {
  clicked = 2;
  checkColour();
}

function resetStreak() {
  streak = 0;
  console.log("-----NEW GAME-----");
}

function instructions() {
  instructionEl.textContent =
    "Choose the colour that matches the given RGB value.";
  instructionEl.style.color = "white";
}

function resetHighScore() {
  highScore = 0;
}
