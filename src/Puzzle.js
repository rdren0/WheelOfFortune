import domUpdates from "./domUpdates.js";


class Puzzle {
  constructor(currentPuzzle) {
    this.category = null || currentPuzzle.category;
    this.correctAnswer = null || currentPuzzle.correct_answer;
    this.description = null || currentPuzzle.description;
    this.numLetters = currentPuzzle.total_number_of_letters
    this.numWords = null || currentPuzzle.number_of_words;
    this.splitAnswer = this.correctAnswer.toUpperCase().split('');
    this.firstLine = null;
    this.secondLine = null;
  }
  checkPuzLength() {
    if (this.splitAnswer.length <= 14) {
      domUpdates.appendPuzzle(this.splitAnswer, null)
    } else { 
      this.twoLinePuzzle()
    }
  }

  // TODO: REFACTOR TO SWITCH STATEMENT
  twoLinePuzzle() {
    let words = this.correctAnswer.split(' ');
    if (this.numWords <= 2) {
      this.firstLine = words[0];
      secondLine = words[1];
    } else if (this.numWords === 3) {
      this.firstLine = words[0].concat(` ${words[1]}`);
      this.secondLine = words[2];
    } else {
      this.firstLine = words[0].concat(` ${words[1]}`);
      this.secondLine = words[2].concat(` ${words[3]}`);
    }
    this.firstLine = this.firstLine.toUpperCase().split('');
    this.secondLine = this.secondLine.toUpperCase().split('');
    domUpdates.appendPuzzle(this.firstLine, this.secondLine)
  }

  solvePuzzle(guess) {
    if (this.correctAnswer.toUpperCase() === guess.toUpperCase()) {
      console.log('nailed it')
    }
  }
}


export default Puzzle;


