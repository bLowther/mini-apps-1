/* the first move always starts with player X
the app detects a win or tie and displays an appropriate message
a button resets the game for a new round of gameplay */
let playTracker = {};
let clickCounter = 0;
const squares = document.getElementsByTagName('td');
for(let square of squares) {
  square.addEventListener('click', ()=>{
    if(square.innerHTML.length === 0) {
      if(clickCounter === 0 || clickCounter % 2 === 0) {
        playTracker[square.id] = '1';
        square.innerHTML = 'X';
      } else {
        playTracker[square.id] = '2';
        square.innerHTML = 'O';
      }
    }
    clickCounter++;
    checkForWinner(playTracker, square.id);
  });
}
const checkForWinner = (obj ,key)=>{
  const row = key[0];
  const col =key[1];
  if (obj[row + 'a'] === obj[row + 'b'] && obj[row + 'b'] === obj[row + 'c']) {
    console.log('Player ' + obj[key] + ' Wins!');
  } else if (obj['A' + col] === obj['B' + col] && obj['B' + col] === obj['C' + col]) {
    console.log('Player ' + obj[key] + ' Wins!');
  } else if(obj.Aa === obj.Bb && obj.Bb === obj.Cc && obj.Bb !== undefined) {
    console.log('Player ' + obj[key] + ' Wins!');
  } else if(obj.Ca === obj.Bb && obj.Bb === obj.Ac && obj.Bb !== undefined) {
    console.log('Player ' + obj[key] + ' Wins!');
  } else {
    console.log('No winner...');
  }
}