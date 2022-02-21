
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
  };
  playGame();
}
