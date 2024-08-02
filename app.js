let boxes=document.querySelectorAll('.box')
let resetBtn=document.querySelector('#reset-btn')
let turnO=true;
let turnX=false;
let newGame=document.querySelector("#newGame")
let msgContainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg")
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

const resetGame=()=>{
    turnO=true
    enableBoxes()
    msgContainer.classList.add("hide")
}
let counter=0
boxes.forEach(box=>{
    box.addEventListener('click',(e)=>{
        if(turnO){
            box.innerText="O"
            turnO=false;
        }else{
            box.innerText="X"
            turnO=true;
        }
        counter++;
        box.disabled=true;
        checkWinner();
    })
})
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false
        box.innerHTML=""
    }
}
const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true
    }
}
const showWinner=(winner)=>{
    msg.innerHTML=`Congratualations , Winner is ${winner}`
    newGame.innerText="New Game"
    msgContainer.classList.remove('hide')
    counter=0
}
const draw=()=>{
    msg.innerHTML=`Oops , Game is Draw `
    newGame.innerText="try again"
    msgContainer.classList.remove('hide')
    disabledBoxes()
}
const checkWinner=()=>{
    for(pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText
        let pos2Val=boxes[pattern[1]].innerText
        let pos3Val=boxes[pattern[2]].innerText
        if(pos1Val!="" && pos2Val!=" " && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                showWinner(pos1Val);
            }else if(counter==9){
                draw()
            }
        }
    }
}

newGame.addEventListener('click',resetGame);
resetBtn.addEventListener('click',resetGame)