let playTracker = {};
let winTracker = {'X': 0, 'O': 0, last: null, gameOver: false};
let clickCounter = 0;
const squares = document.getElementsByTagName('td');
const reset = document.getElementById('reset');

for(let square of squares) {
  square.addEventListener('click', ()=>{
    if(square.innerHTML.length === 0 && !winTracker.gameOver) {
      if(clickCounter === 0 || clickCounter % 2 === 0) {
        playTracker[square.id] = 'X';
        square.innerHTML = 'X';
      } else {
        playTracker[square.id] = 'O';
        square.innerHTML = 'O';
      }
      checkForWinner(playTracker, square.id);
      clickCounter++;
    }
  });
}

reset.addEventListener('click', ()=>{
  resetToggle();
  for(let square of squares) {
    square.innerHTML = '';
  }
  playTracker = {};
  winTracker.gameOver = false;
  if (winTracker.last === 'X') {
    clickCounter = 0;
  } else {
    clickCounter = 1;
  }
});

const checkForWinner = (obj ,key)=>{
  const row = key[0];
  const col =key[1];
  if (obj[row + 'a'] === obj[row + 'b'] && obj[row + 'b'] === obj[row + 'c']) {
    resolveWinner(obj[key]);
  } else if (obj['A' + col] === obj['B' + col] && obj['B' + col] === obj['C' + col]) {
    resolveWinner(obj[key]);
  } else if(obj.Aa === obj.Bb && obj.Bb === obj.Cc && obj.Bb === obj[key]) {
    resolveWinner(obj[key]);
  } else if(obj.Ca === obj.Bb && obj.Bb === obj.Ac && obj.Bb == obj[key]) {
    resolveWinner(obj[key]);
  } else if (Object.keys(obj).length === 9) {
    alert('Cat\'s Game!');
    resetToggle();
  }
};

resolveWinner = (player) => {
  alert (player + ' Wins!');
  winTracker.last = player;
  winTracker[player]++;
  winTracker.gameOver = true;
  document.getElementById(player).innerHTML = 'Player ' + player + ' : ' + winTracker[player];
  resetToggle();
};

var resetToggle = () => {
  if(reset.style.display = 'none') {
    reset.style.display = 'block';
  } else {
    reset.style.display = 'none';
  }
};