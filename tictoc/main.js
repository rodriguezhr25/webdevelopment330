const divBoard = document.querySelector('.divBoard');
const resetButton = document.getElementById('reset');
const divResult = document.getElementById('result');
const player1 = 'X';
const player2 = 'O';
let player = player1;
const children = [...divBoard.children];
let counter = 0;
let winingMessage= " Won the game!";
const tieGameMessage= "Game tied!";
let roundWon = false;
function addPiece(e) {

    if (counter < 9) {
        /*Get the id of the child element*/
        const index = children
            .filter(el => el.localName.indexOf('div') > -1)
            .indexOf(e.target);

        if (children[index].innerText == "") {
            e.target.innerText = player;
            counter++;
            if(verifyGame()){
                winingMessage = player + winingMessage;
                counter = 9;
                divResult.innerHTML= winingMessage;
            }
            if(counter == 9 && !roundWon){
              
                    divResult.innerHTML= tieGameMessage;
              
            }
            if (player == 'X') {
                player = player2
            } else {
                player = player1;
            }
         
        }
    }
}

function resetBoardDiv() {

    /*for (const value of children){
        value.innerHTML = "";
    }*/
    children.forEach((child) => child.innerText = "");
    divResult.innerHTML = "";
    counter = 0;
    //divBoard.addEventListener('click', addPiece);
}
function verifyGame() {
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = children[winCondition[0]].innerText;
        let b = children[winCondition[1]].innerText;
        let c = children[winCondition[2]].innerText;
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }
    return roundWon;
}
divBoard.addEventListener('click', addPiece);
resetButton.addEventListener('click', resetBoardDiv);

