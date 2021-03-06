import Wheel from "./Wheel.js";
import Round from "./Round.js";
import Player from "./Player.js";
// import Puzzle from "./Puzzle.js"
// import BonusWheel from "./BonusWheel.js"
import data from "./data.js";
import domUpdates from "./domUpdates.js";



class Game {
  constructor() {
    this.round = null;
    this.roundCount  = 0;
    this.players = [];
    this.allData = []
    // this.currentPuzzle = null;
  }


  startGame() {
    let wheel = new Wheel();
    this.createPlayers(domUpdates.playerNames());
    this.getRandomData();
    this.createRound(wheel)
  }

  resetGame() {
    location.reload();
  }

  getRandomData () {
    let puzzlesArr = Object.keys(data.puzzles)
    puzzlesArr.forEach(puzzleCat =>{
      this.allData.push(data.puzzles[puzzleCat].puzzle_bank)
    })
  }

  createRound (wheel) {
    this.roundCount++;
    domUpdates.updateRoundText(this.roundCount);
    if (this.roundCount === 4) {
      alert("You have solved every level of puzzle!");
      alert("The page will now reload");
      location.reload();
    }
    let round = new Round(this.players, wheel);
    this.round = round;
    round.currentWheel = wheel;
    this.currentPuzzle = round.getPuzzle(this.allData[this.roundCount - 1]);
    this.currentPuzzle.checkPuzLength();
    domUpdates.setCategoryText(this.currentPuzzle.category);
  }

  createPlayers(array) {
    this.players = array.map((person, ind) => {
      return person = new Player(person, (ind + 1));
    });
    domUpdates.hiddenBoard(this.players);
  }


}
export default Game;