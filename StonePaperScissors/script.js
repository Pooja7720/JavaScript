let stone = document.querySelector(".stone");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissor");
let body = document.querySelector(".body");
let textInfo = document.querySelector(".text-info");
let yourSelection = document.querySelector(".yourSelection");
let comSelection = document.querySelector(".comSelection");

let yourCount = 0;
let comCount = 0;

stone.addEventListener("click",()=>{
    let com = getRandomString();
    yourSelection.innerText = `Your Selection : Stone`;
    comSelection.innerText = `Computer Selection : ${com}`;
    if(com === "Stone")
    {
        textInfo.innerText = "You got a Draw!";
    }
    else if(com === "Paper")
    {
        textInfo.innerText = "You Lost! Computer got Paper";
        comCount++;
    }
    else if(com === "Scissor")
    {
        textInfo.innerText = "You Won! Computer got Scissor";
        yourCount++;
    }
    updateScore();
});

paper.addEventListener("click",()=>{
    let com = getRandomString();
    yourSelection.innerText = `Your Selection : Paper`;
    comSelection.innerText = `Computer Selection : ${com}`;
    if(com === "Stone")
    {
        textInfo.innerText = "You Won! Computer got Stone";
        yourCount++;
    }
    else if(com === "Paper")
    {
        textInfo.innerText = "You got a Draw!";
    }
    else if(com === "Scissor")
    {
        textInfo.innerText = "You Lost! Computer got Scissor";
        comCount++;
    }
    updateScore();
});
scissor.addEventListener("click",()=>{
    let com = getRandomString();
    yourSelection.innerText = `Your Selection : Scissor`;
    comSelection.innerText = `Computer Selection : ${com}`;
    if(com === "Stone")
    {
        textInfo.innerText = "You Lost! Computer got Stone";
        comCount++;
    }
    else if(com === "Paper")
    {
        textInfo.innerText = "You Won! Computer got Paper";
        yourCount++;
    }
    else if(com === "Scissor")
    {
        textInfo.innerText = "You got a Draw!";
    }
    updateScore();
})

// BACKGROUND CHANGE
let mode = document.querySelector(".check-mode");
mode.addEventListener("click",()=>{
    let score = document.querySelector(".score");
    if(mode.checked == true)
    {
        // DARK MODE
        body.classList.add("bg-dark");
        body.classList.remove("bg-light");
        score.style.color = "white";
    }
    else
    {
        // LIGHT MODE
        body.classList.add("bg-light");
        body.classList.remove("bg-dark");
        score.style.color = "black";
    }
})

// COMPUTER RANDOM STRING
function getRandomString() {
    const strings = ["Stone", "Paper", "Scissor"];
    const randomIndex = Math.floor(Math.random() * strings.length);
    console.log(strings[randomIndex]);
    return strings[randomIndex];
  }

// COUNT VALUE
function updateScore()
{
    let yourCountDisplay = document.querySelector(".yourCount");
    let computerDisplay = document.querySelector(".computerCount");
    yourCountDisplay.innerText = `You : ${yourCount}`;
    computerDisplay.innerText = `Computer : ${comCount}`; 

    if(comCount == 10 || yourCount == 10)
    {
        yourCount > comCount ? alert("Wow! You won! Congradulations!!!") : alert("You lost! Computer won");
    }
}



