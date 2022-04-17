const playerInfo = {
  player1: { score: 0, finalScore: 0 },
  player2: { score: 0, finalScore: 0 },
  who: false,
};
const player1 = document.querySelector(".player1 span");
const player2 = document.querySelector(".player2 span");
const rollBtn = document.querySelector(".btn");
const diceNo = document.querySelector(".dice");
const doneBtn = document.querySelector(".done-btn");
const player1FinaScore = document.querySelector(".player1-finaScore span");
const player2FinalScore = document.querySelector(".player2-finaScore span");
const searchInputArea = document.querySelector(".inputarea");
const winner = document.querySelector(".gamewinner-declare p");
const active1 = document.querySelector(".active1");
const active2 = document.querySelector(".active2");

const randomDiceRoll = () => {
  return Math.floor(Math.random() * 6) + 1;
};
const playerTransfor = (playerInfoWho, playerType) => {
  playerInfo[`${playerType}`].score = 0;
  playerInfo.who = playerInfoWho;
  if (playerInfoWho) {
    active2.innerHTML = "*";
    active1.innerHTML = "&#160;";
  } else {
    active1.innerHTML = "*";
    active2.innerHTML = "&#160;";
  }
};
const doneCode = (playerType, playerInfowho) => {
  playerInfo[`${playerType}`].finalScore += playerInfo[`${playerType}`].score;
  playerInfo.player1.score = 0;
  playerInfo.who = playerInfowho;
  if (!playerInfo.who) {
    active1.innerHTML = "*";
    active2.innerHTML = "&#160;";
  } else {
    active2.innerHTML = "*";
    active1.innerHTML = "&#160;";
  }
};
rollBtn.addEventListener("click", () => {
  if (parseInt(searchInputArea.value) > 0) {
    const diceRollNo = randomDiceRoll();

    if (diceRollNo === 6) {
      if (playerInfo.who) {
        playerTransfor(false, "player1");
      } else {
        playerTransfor(true, "player2");
      }
    } else {
      if (playerInfo.who) {
        playerInfo.player1.score += diceRollNo;
      } else {
        playerInfo.player2.score += diceRollNo;
      }
    }
    player1.innerHTML = playerInfo.player1.score;
    player2.innerHTML = playerInfo.player2.score;

    diceNo.innerHTML = diceRollNo;
  }
});

doneBtn.addEventListener("click", () => {
  if (parseInt(searchInputArea.value) > 0) {
    diceNo.innerHTML = 0;
    if (playerInfo.who) {
      doneCode("player1", false);
    } else {
      doneCode("player2", true);
    }
    player1FinaScore.innerHTML = playerInfo.player1.finalScore;
    player2FinalScore.innerHTML = playerInfo.player2.finalScore;
    player1.innerHTML = playerInfo.player1.score;
    player2.innerHTML = playerInfo.player2.score;

    if (playerInfo.player1.finalScore >= parseInt(searchInputArea.value)) {
      winner.innerHTML = `Player one wins`;
    } else if (
      playerInfo.player2.finalScore >= parseInt(searchInputArea.value)
    ) {
      winner.innerHTML = `Player two wins`;
    }
  }
});
