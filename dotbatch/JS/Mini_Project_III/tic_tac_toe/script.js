const boxes=document.querySelectorAll(".box");
const gameInfo=document.querySelector(".game-info");
const newGameBtn=document.querySelector(".btn");

let currentPlayer;
let gameGrid;

const winningPositions=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

// Lets create a function to initialize the game
function initGame(){
    currentPlayer="X";
    gameGrid=["","","","","","","","",""];
    // UI pr rmpty bhi karna pdega boxes ko
    boxes.forEach((box,index)=>{
        box.innerText="";
        boxes[index].style.pointerEvents="all";
        // one more thing is missing,initialise box with css properties again
        box.classList=`box box${index+1}`;
    })
    newGameBtn.classList.remove("active");
    gameInfo.innerText=`Current Player -${currentPlayer}`;

}

function checkGameOver(){
    let answer="";

    winningPositions.forEach((position)=>{
        // all boxes should be non-empty and exactly same in value
        if((gameGrid[position[0]]!=="" || gameGrid[position[1]!==""] || gameGrid[position[2]]!=="") && (gameGrid[position[0]]===gameGrid[position[1]])&& (gameGrid[position[1]]===gameGrid[position[2]])){
            if(gameGrid[position[0]]==="X") answer="X";
            else answer="O";
            // Disable pointer events
            boxes.forEach((box)=>{
                box.style.pointerEvents="none";
            })

            // now we know X/O is a winner
            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");
        }

    });

    // it means we have a winner
    if(answer!==""){
        gameInfo.innerText=`Winner Player - ${answer}`;
        newGameBtn.classList.add("active");
        return;
    }

    // we know No winner found, Lets check whether there is tie
    let fillCount=0;
    gameGrid.forEach((box)=>{
        if(box!="") fillCount++;
    });
    if(fillCount===9){
        gameInfo.innerText="Game Tied !";
        newGameBtn.classList.add("active");
    }
}

initGame();

function swapTurn(){
    if(currentPlayer==="X"){
        currentPlayer="O";
    }else currentPlayer="X";

    // UI Update
    gameInfo.innerText=`Current Player -${currentPlayer}`;

    
}

function handleClick(index){
    if(gameGrid[index]===""){
        boxes[index].innerText=currentPlayer;
        gameGrid[index]=currentPlayer;
        boxes[index].style.pointerEvents="none";
        // Swap karo turn ko
        swapTurn();
        // Check koi jeet toh nhi gya
        checkGameOver();
    } ;
}

boxes.forEach((box,index)=>{
    box.addEventListener("click",()=>{
        handleClick(index);
    })
});

newGameBtn.addEventListener("click",initGame);