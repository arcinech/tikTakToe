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

    //Add event for clicking element;
    let i = 0;
    const titleClickHandler = function(event){
        event.preventDefault();
        const clickedElement = this;
        if (clickedElement.innerHTML == "") {
            let j=0;
            if (i==j){
                clickedElement.classList.add("X");
                clickedElement.innerHTML = "X";
                console.log(clickedElement);
                i=1;
            } else {
                clickedElement.classList.add("y");
                clickedElement.innerHTML = "y";
                console.log(clickedElement);
                i=0;
        
            }
        } else {
            console.log("powtórz");
        }

    };

    //call to event listener
    const tok = document.querySelectorAll("tr");

    for(let tik of tok){
        const toe = tik.querySelectorAll("td");

        for(let cell of toe){
            cell.addEventListener('click', titleClickHandler);
        }
    }

}
