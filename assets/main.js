///////////Functions
// funzione per selezionare il livello


//Funzione per fenerare bombe random
function bombGenerator(cellsNumber) {
    //creare un array che dovra contenere le bombe
    let bombs = []
    //creare un ciclo della durata di 16 (bombe che dovranno essere inserite)
    while (bombs.length < 16) {
        const randomNumber = Math.floor(Math.random() * (16 - 1 + 1)) + 1;
        //se il numero generato è gia incluso con .includes()
        if (!bombs.includes(randomNumber)) {
            bombs.push(randomNumber)
            console.log(bombs)
        }

    }
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

    bombGenerator(cellsNumber)
})






