const readlinesync = require("readline-sync");
const chalk = require("chalk");
const log = console.log;
const right = chalk.bgHex("#3ae374").black;
const wrong = chalk.bgHex("#ff4d4d").black;

let score = 0;
let userName;
let highScores = [
  {
    name: "Suryakant",
    score: 5,
  },
  {
    name: "Sujeet",
    score: 3,
  },
];

// Welcome
function welcome() {
  userName = readlinesync.question("What's your name? ");
  console.log("Welcome ❤️ ", userName, "to DO YOU KNOW SURYAKANT QUIZ!");
}

// Play
function play(question, answer) {
  const userAnswer = readlinesync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    score++;
    log(right("Yay!, You are right ✔ "));
    log("Your current score", score);
  } else {
    log(wrong("Sorry! You are wrong ❌ "));
  }
}

const questions = [
  {
    question: "\nWhat is my nickname? ",
    answer: "Sujeet",
  },
  {
    question: "\nWhere do I live? ",
    answer: "Sonpur",
  },
  {
    question: "\nWhere is my college? ",
    answer: "Hajipur",
  },
  {
    question: "\nWhat is my favorite color? ",
    answer: "Orange",
  },
  {
    question: "\nWho is favorite my Superhero? ",
    answer: "Hulk",
  },
];

// game
function game() {
  for (let i = 0; i < questions.length; i++) {
    let currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);
  }
}

// check score and update
function checkScores() {
  highScores.forEach((data) => {
    if (data.score < score) {
      log(
        right(
          "Contrats! You made highscore by beating",
          chalk.bgCyanBright.black(data.name)
        )
      );

      highScores.push({
        name: userName,
        score: score,
      });
    }
  });
}

// showScores
function showHighScores() {
  console.log("\nYou Scored", score);

  highScores.map((data) => log(right(data.name + " Know Suryakant very well")));
}

welcome();
game();
checkScores();
showHighScores();
