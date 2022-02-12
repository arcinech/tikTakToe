{
    //create table via js   
    const generateTable = function(){
        let z = 0;
        while ( z < 3 ){
            z = prompt("Size of tiktok grid (min.3)", z);
        }
        const tableBody = document.getElementById("tictoc");

        for(let x = 0; x < z; x++){

            const row = document.createElement('tr');
            const createRow = tableBody.appendChild(row);
            createRow.setAttribute('id',x);
            for(let y = 0; y < z; y++){
                const cell = document.createElement('td');
                createRow.appendChild(cell).setAttribute('id',x + '-' + y);
            }
        }
    }
    generateTable();

}
