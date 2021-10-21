///////////Functions //////////////////////////////////////////////

//Funzione per fenerare bombe random
function bombGenerator(cellsNumber) {
    //creare un array che dovra contenere le bombe
    let bombette = []
    //creare un ciclo della durata di 16 (bombe che dovranno essere inserite)
    while (bombette.length < 16) {
        const randomNumber = Math.floor(Math.random() * (16 - 1 + 1)) + 1;
        //se il numero generato è gia incluso con .includes()
        if (!bombette.includes(randomNumber)) {
            bombette.push(randomNumber)
           //console.log(bombette)
        }

    }
    return bombette
}

//Funzione per creare celle
function createCellGrid(container, cellsNumber, cellsInline) {

    //creare un elemento vuoto
    container.innerHTML = ""
    // ciclo per creare n celle 
    for (let i = 1; i <= cellsNumber; i++) {
        //creare elemento
        let cell = document.createElement("div")
        //let cell1 = `<div style="width: calc(100% / ${cellsInline}) ; height: calc(100% / ${cellsInline})" class="cell"> <span>${i}</span> </div>`
       // console.log(cell)
        cell.className = "cell"
        // definire misura della cella
        cell.style.cssText = `width: calc(100% / ${cellsInline}) ; height: calc(100% / ${cellsInline}) ;`
        container.append(cell)
        let text = `<span>${i}</span>`
        cell.innerHTML = text
        //console.log(cell)
        cell.addEventListener("click", function () {
            this.style.backgroundColor = "blue"

        })
    }
}

function bombVerify(cellNumber, bombette) {
    if (bombette.includes(cellNumber)) {
        console.log("Sei esploso");
        let cell = document.getElementsByClassName('cell')
        cell.addEventListener("click", function () {
            this.style.backgroundColor = "red"
        })
    } else {
        console.log("numero");
    }
}

////////////////////////////////////////////////////////////////



//costante per selezionare il bottone nella DOM
const BtnElement = document.getElementById("choi_btn")

let selectLevelElement = document.getElementById("level")
BtnElement.addEventListener('click', function () {
    //costante con l elemento DOM a cui prendere il valore
    let level = selectLevelElement.value

    //varbaile con il numero di celle da creare
    let cellsNumber;
    let cellsInline
    if (level == "1") {
        cellsNumber = 100;
        cellsInline = 10;
    }
    else if (level == "2") {
        cellsNumber = 81;
        cellsInline = 9;
    }
    else if (level == "3") {
        cellsNumber = 49;
        cellsInline = 7;
    }
    let container = document.querySelector(".container")

    createCellGrid(container, cellsNumber, cellsInline)

    let bombette = bombGenerator(cellsNumber)
    console.log(bombette)

    // Select all cells
    const cellForBomb = document.getElementsByClassName('cell');
    //console.log((cellForBomb));

    // ciclare tra le celle
    for (let i = 0; i < cellForBomb.length; i++) {
        const cellForBombClick = cellForBomb[i];
        //console.log(element)
        cellForBombClick.addEventListener('click', function () {
            // prendere il contenuto della cell
            const cellForBomb = parseInt(this.innerText)
            //console.log(cellForBomb);
            // verifica se la cella é una bomba
            bombVerify(cellForBomb, bombette)
        })

    }

})









