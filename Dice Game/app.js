/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

// dice = Math.floor(Math.random() * 6) + 1;
// //Creates a variable that holds the result of a dice roll
//
//
// document.querySelector('#current-' + activePlayer).textContent = dice;
// //Code above uses the method 'querySelector' from the object 'document' (html)
// //to change the score of the active player to whatever the dice roll is
//
// //HTML review: '#' is used to access a class, '.'' is used for an ID

//
// var x = document.querySelector('#score-0').textContent;
// console.log(x);
//Shows that querySelector can be used to assign values, not just read them
//like the code above

document.querySelector('.dice').style.display = 'none';
//Takes selects the class '.dice' and sets its display to 'none'
//Works by manipulating CSS, not html ('display = none' is CSS)
//This is done so that when the game starts, the dice isn't there until someone
//actually makes a roll.

document.getElementById('score-0').textContent='0'
document.getElementById('current-0').textContent='0'
document.getElementById('score-1').textContent='0'
document.getElementById('current-1').textContent='0'


document.querySelector('.btn-roll').addEventListener('click', function() {
    //When the roll button is clicked we need it to:
    //  1. Generate a random number
    dice = Math.floor(Math.random() * 6) + 1;
    // 2. Display the result of that number
    var diceDOM = document.querySelector('.dice')
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    //3. Update the round score if they didnt roll a 1 (ONE)
    if (dice !== 1) {
      //Add score
      roundScore += dice;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;

    }
    else {
      ///If player rolls a one, then activePlayer should be switched
      nextPlayer();
      ///Called a "ternary operator", works like an if statement but is less verbose

    }


})

document.querySelector('.btn-hold').addEventListener('click',function() {
    //Add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;
    //Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    //Check if player won the game
    if (scores[activePlayer] >= 100) {
      alert('Player ' +activePlayer + ' won the game!')

    } else {
      nextPlayer();
    };
});

function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;
  document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');
}
