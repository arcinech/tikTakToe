'use strict';
{
  const printMessage = function(msg){
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
  };

  const clearMessages = function(){
    document.getElementById('messages').innerHTML = '';
    document.getElementById('tictoc').innerHTML = '';
  };
  const boardGrid = function(){
    const button = document.getElementById('submitSize');

    const checkBoard = function() {
      clearMessages();
      const board = document.getElementById('boardSize').value;
      if (2 < board < 11){
        document.getElementById('prompt').classList.add('hidden');
        document.getElementById('board-title').classList.remove('hidden');
        playGame(board);
      } else {
        printMessage('Wrong size of board');
      }
    };

    button.addEventListener('click', checkBoard);
  };
  const playGame = function(boardSize){
    let tiktokArray = [[]];
    //create table via js3
    const generateTable = function(boardSize){
      /*while ( boardSize < 3 ){
        boardSize = prompt('Size of tiktok grid (min.3)', boardSize);
      }*/
      const tableBody = document.getElementById('tictoc');

      for(let row = 0; row < boardSize; row++){

        const createRow = document.createElement('tr');
        const rowElement = tableBody.appendChild(createRow);
        tiktokArray[row] = [];
        for(let col = 0; col < boardSize; col++){
          const createCell = document.createElement('td');
          rowElement.appendChild(createCell).setAttribute('id', row + '-' + col);
          tiktokArray[row][col] = '';
        }
      }
    };
    generateTable(boardSize);

    let firstPlayer = 0;
    const ticOrTak = function(event) {
      const elementClassList = event.classList;
      const row = event.parentNode.rowIndex;
      const col = event.cellIndex;
      if (!(elementClassList.contains('played'))) {
        if (firstPlayer == 0){
          elementClassList.add('xmark', 'played');
          tiktokArray[row][col] = 'X';
          console.log(tiktokArray);
          checkWin('Winner is player with x mark');
          firstPlayer = 1;
        } else {
          elementClassList.add('circle', 'played');
          tiktokArray[row][col] = 'O';
          console.log(tiktokArray[row][col]);
          checkWin('Winner is player with circle');
          firstPlayer = 0;
        }
      } else {
        console.log('repeat');
      }
    };

    const addEventListeners = function() {
      const rows = document.querySelectorAll('tr');

      for(let row of rows){
        const cols = row.querySelectorAll('td');

        for(let col of cols){
          col.addEventListener('click', titleClickHandler);
        }
      }
    };
    const removeListeners = function() {
      const rows = document.querySelectorAll('tr');
      for(let row of rows){
        const cols = row.querySelectorAll('td');
        for(let col of cols){
          col.removeEventListener('click', titleClickHandler);
        }
      }
    };
    const titleClickHandler = function(event){
      event.preventDefault();
      const clickedElement = this;
      ticOrTak(clickedElement);
      console.log(`firstPlayer${firstPlayer}`);
    };

    const checkHorizontal = function(){
      console.log(boardSize);
      for(let row = 0; row < boardSize; row++){
        let winCondition = 0;
        for(let col = 0; col < (boardSize-1); col++){
          /* compare current column with next column */
          if (tiktokArray[row][col] == tiktokArray[row][col+1] && (tiktokArray[row][col] != '')){
            console.log(winCondition);
            winCondition++;
          }
          if (winCondition == (boardSize-1)) return true;
        }
      }
      return false;
    };
    const checkVertical = function() {
      for(let col=0; col<boardSize; col++){
        // console.log("start of loop y" + x);
        let winCondition = 0;
        for(let row=0; row < (boardSize - 1); row++){
          if ((tiktokArray[row][col] == tiktokArray[row+1][col]) && (tiktokArray[row][col] != '')){
            winCondition++;
          }
          if (winCondition == (boardSize-1)) return true;
        }
      }
      return false;
    };
    //first diagonal check
    const checkDiagonal = function() {
      let winCondition = 0;
      let col;
      for(let row=0; row < (boardSize - 1); row++){
        col = row;
        if ((tiktokArray[row][col] == tiktokArray[row+1][col+1]) && (tiktokArray[row][col] != '')){
          winCondition++;
          console.log(winCondition);
        }
        //  console.log(winCondition);
        if (winCondition == (boardSize-1)) return true;
      }
      return false;
    };

    const checkReversediagonal = function() {
      let winCondition = 0;
      let col = 0;
      for(let row=(boardSize - 1); row > 0; row--){
        console.log('reversed row: ' + row + ' col: ' + col);
        if ((tiktokArray[row][col] == tiktokArray[row-1][col+1]) && (tiktokArray[row][col] != '')){
          winCondition++;
        }
        if (winCondition == (boardSize-1)) return true;
        col++;
      }
      return false;
    };
    const checkWin = function(player) {
      console.log('check win run');
      if (checkHorizontal() == true || checkVertical() == true || checkReversediagonal() == true || checkDiagonal() == true) {
        removeListeners();
        printMessage(player);
        return true;
      }
    };

    addEventListeners();
  };

  boardGrid();
  document.getElementById('restartButton').addEventListener('click', function() {
    document.getElementById('prompt').classList.remove('hidden');
    document.getElementById('board-title').classList.add('hidden');
    clearMessages();
    boardGrid();
  });
}
