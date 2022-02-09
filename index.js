let R = 0;
let G = 0;
let B = 0;

let left = document.getElementById("left-colour");
let middle = document.getElementById("middle-colour");
let right = document.getElementById("right-colour");

let rgb = document.getElementById("rgb-el");

let correctColour = 0;

let streak = 0;
let streakEl = document.getElementById("streak-el");

newGame();

function newGame() {
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

  streak = 0;
}

function checkColour() {
  streakEl.textContent = "STREAK: " + streak;
}

function makeColour() {
  R = Math.floor(Math.random() * 256);
  G = Math.floor(Math.random() * 256);
  B = Math.floor(Math.random() * 256);

  console.log(
    "New Game: RGB(" +
      R +
      ", " +
      G +
      ", " +
      B +
      ")\n" +
      "Correct= " +
      correctColour
  );

  return "rgb(" + R + ", " + G + ", " + B + ")";
}

function makeSimilarColour() {
  let Rsimilar = R + (Math.round(Math.random()) * 2 - 1) * 100;
  let Gsimilar = G + (Math.round(Math.random()) * 2 - 1) * 100;
  let Bsimilar = B + (Math.round(Math.random()) * 2 - 1) * 100;

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
