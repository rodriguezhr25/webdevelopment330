const divBoard = document.querySelector('.divBoard');
const resetButton = document.getElementById('reset');
const player1 = 'X';
const player2 = 'O';
let player = player1;

function addPiece(e){
    console.log(e);
    e.target.innerText = player;

    if(player == 'X'){
        player = player2 
    }else{
        player = player1;
    }
}

function resetBoardDiv(){
    const children = [...divBoard.children];
    /*for (const value of children){
        value.innerHTML = "";
    }*/
    children.forEach((child)=>child.innerText= "");
}

divBoard.addEventListener('click',addPiece);
resetButton.addEventListener('click', resetBoardDiv);

