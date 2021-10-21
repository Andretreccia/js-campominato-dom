///////////Functions
// funzione per selezionare il livello
function selectLevelFunction(elemento) {
    //costante con l elemento DOM a cui prendere il valore
    let level = elemento.value
    //varbaile con il numero di celle da creare
    let cellsNumber;

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
    return [level, cellsNumber, cellsInline]
}


//Funzione per creare celle
function createCellGrid(container, cellsNumber, cellsInline) {

    //creare un elemento vuoto
    container.innerHTML = ""
    // ciclo per creare n celle 
    for (let i = 0; i < cellsNumber; i++) {
        //creare elemento
        let cell = document.createElement("div")
        cell.className = "cell"
        // definire misura della cella
        cell.style.cssText = `width: calc(100% / ${cellsInline}) ; height: calc(100% / ${cellsInline}) ;`
        let text = `<span>${i}</span>`
        cell.innerHTML += text
        cell.addEventListener("click", function () {
            this.style.backgroundColor = "blue"
        })


    }
}



//costante per selezionare il bottone nella DOM
const BtnElement = document.getElementById("choi_btn")

let selectLevelElement = document.getElementById("level")
BtnElement.addEventListener('click', function () {

    let levelSelected = selectLevelFunction(selectLevelElement)
    console.log(levelSelected)
    const container = document.querySelector(".container")
    let creazione = createCellGrid(levelSelected[0], levelSelected[1], levelSelected[2])
    console.log(creazione)

    /* if (levelSelected[0] == '1') {
        for (let i = 1; i <= levelSelected; i++) {

            let cell_10 = document.createElement("div");
            cell_10.className = "cell_10"
            container.append(cell_10)
            let text = `<span>${i}</span>`
            cell_10.innerHTML += text
            cell_10.addEventListener("click", function () {
                this.style.backgroundColor = "blue"
            })



        }
    }

    else if (levelSelected[1] == '2') {
        for (let i = 1; i <= 81; i++) {

            let = cell_9 = document.createElement("div");
            cell_9.className = "cell_9"
            container.append(cell_9)
            let text = `<span>${i}</span>`
            cell_9.innerHTML += text
            cell_9.addEventListener("click", function () {
                this.style.backgroundColor = "blue"
            })
        }
    }
    else if (levelSelected[2] == '3') {
        for (let i = 1; i <= 49; i++) {

            let cell_7 = document.createElement("div");
            cell_7.className = "cell_7"
            container.append(cell_7)
            let text = `<span>${i}</span>`
            cell_7.innerHTML += text
            cell_7.addEventListener("click", function () {
                this.style.backgroundColor = "blue"
            })
        }
    } */
})






