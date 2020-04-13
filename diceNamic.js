// jshint esversion: 7

firstDice = document.getElementById("1").src;

secondDice = document.getElementById("2").src;

num1 = document.getElementById("1").src;


let rollDie = () => {
    dieResult = Math.floor (Math.random() * 6) + 1;

    if (dieResult == 1) {
      document.getElementById("1").src = 'images/die1.gif';
    }

    if (dieResult == 2) {
      document.getElementById("1").src = 'images/die2.gif';
}

    if (dieResult == 3) {
      document.getElementById("1").src = 'images/die3.gif';
}

    if (dieResult == 4) {
      document.getElementById("1").src = 'images/die4.gif';
}

    if (dieResult == 5) {
      document.getElementById("1").src = 'images/die5.gif';
}

    if (dieResult == 6) {
      document.getElementById("1").src = 'images/die6.gif';
}
};


let rollDie2 = () => {
    dieResult2 = Math.floor (Math.random() * 6) + 1;

    if (dieResult2 == 1) {
      document.getElementById("2").src = 'images/die1.gif';
    }

    if (dieResult2 == 2) {
      document.getElementById("2").src = 'images/die2.gif';
}

    if (dieResult2 == 3) {
      document.getElementById("2").src = 'images/die3.gif';
}

    if (dieResult2 == 4) {
      document.getElementById("2").src = 'images/die4.gif';
}

    if (dieResult2 == 5) {
      document.getElementById("2").src = 'images/die5.gif';
}

    if (dieResult2 == 6) {
      document.getElementById("2").src = 'images/die6.gif';
}
};


rollDie();
rollDie2();
console.log('d1 = ' + dieResult + ' d2 = ' + dieResult2);

let diceGuess = document.getElementById("numInput");

let countClicks = 0;

let controller = () => {
rollDie();
rollDie2();
console.log('d1 = ' + dieResult + ' d2 = ' + dieResult2);
  countClicks++;


let oneRoll = "You hit your number in 1 roll!";

if ((diceGuess.value == dieResult + dieResult2) && countClicks == 1) {
document.getElementById('rollDiv').innerHTML = oneRoll;
console.log("You hit your number in 1 roll!");
  }

let multipleRolls = "You hit your number in " + countClicks + " rolls!";

if ((diceGuess.value == dieResult + dieResult2) && countClicks > 1) {
document.getElementById('rollDiv').innerHTML = multipleRolls;
console.log("You hit your number in " + countClicks + " rolls!");
  }
};


window.addEventListener("load", function() {
  //select the button
  let button = document.querySelector("button");

  //register the click handler for the button
  button.addEventListener("click", controller);
});
