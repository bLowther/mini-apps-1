/* the first move always starts with player X
the app detects a win or tie and displays an appropriate message
a button resets the game for a new round of gameplay */
let clickCounter = 0;
const squares = document.getElementsByTagName('td');
for(let square of squares) {
  square.addEventListener('click', ()=>{
    if(square.innerHTML.length === 0) {
      if(clickCounter === 0 || clickCounter % 2 === 0) {
        square.innerHTML = 'X';
        clickCounter++;
      } else {
          square.innerHTML = 'O';
          clickCounter++;
      }
    }
  });
}

