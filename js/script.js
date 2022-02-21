
{

  const playGame = function(){
    let tiktokArray = [[]];

    //create table via js
    const generateTable = function(){
      let boardSize = 3;
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
    generateTable();

    //Add event for clicking element;
    let firstPlayer = 0;
    let secondPlayer = 1;

    const ticOrTak = function(event) {
      const elementClassList = event.classList;
      const row = event.parentNode.rowIndex;
      const col = event.cellIndex;
      if (!(elementClassList.contains('played'))) {
        if (firstPlayer != secondPlayer){
          elementClassList.add('xmark', 'played');
          tiktokArray[row][col] = 'X';
          console.log(tiktokArray[row][col]);
          firstPlayer=1;
        } else {
          elementClassList.add('circle', 'played');
          tiktokArray[row][col] = 'O';
          console.log(tiktokArray[row][col]);
          firstPlayer=0;
        }
      } else {
        console.log('powtórz');
      }
    };

    const titleClickHandler = function(event){
      event.preventDefault();
      const clickedElement = this;
      ticOrTok(clickedElement);
      console.log(`firstPlayer${firstPlayer}`);
    };

    //call to event listener
    const tok = document.querySelectorAll('tr');

    for(let tik of tok){
      const toe = tik.querySelectorAll('td');

      for(let cell of toe){
        cell.addEventListener('click', titleClickHandler);
      }
    }

  };
  playGame();
}
