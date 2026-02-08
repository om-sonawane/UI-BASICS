let rockButton=document.querySelector('#rock-btn')
let paperButton=document.querySelector('#paper-btn')
let scissorsButton=document.querySelector('#scissors-btn')
let resetButton=document.querySelector('#reset-btn')
let autoplayButton=document.querySelector('#autoplay-btn')

let movesPara=document.querySelector('#moves')
let resultPara=document.querySelector('#result')
let scoreboardPara=document.querySelector('#scoreboard')

rockButton.addEventListener("click", ()=>playGame("Rock"))
paperButton.addEventListener("click", ()=>playGame("Paper"))
scissorsButton.addEventListener("click", ()=>playGame("Scissors"))
resetButton.addEventListener("click", resetScore)
autoplayButton.addEventListener("click", autoplay)
    let win=0;
    let lose=0;
    let tie=0;

function playGame(playerMove)
{
    const computerMove=generateComputerMove1()
    
    let result="";
    switch(playerMove)
    {
        case "Rock" :
                        switch(computerMove)
                        {
                            case "Rock" : result = "Tie"; break;
                            case "Paper" : result = "Lose"; break;
                            case "Scissors" : result = "Win"; break;
                        }
                        break;
        case "Paper" :
                        switch(computerMove)
                        {
                            case "Rock" : result = "Win"; break;
                            case "Paper" : result = "Tie"; break;
                            case "Scissors" : result = "Lose"; break;
                        }
                        break;

        case "Scissors":
                        switch(computerMove)
                        {
                            case "Rock" : result = "Lose"; break;
                            case "Paper" : result = "Win"; break;
                            case "Scissors" : result = "Tie"; break;
                        }
                        break;
                      
    }

    
    switch(result)
    {
        case "Win" : win++; break;
        case "Lose" : lose++; break;
        case "Tie" : tie++; 
    }
    
    movesPara.innerHTML=`Player Move <img src="../images/${playerMove}-emoji.png"/>  Computer Move <img src="../images/${computerMove}-emoji.png"/>`
    
    
    resultPara.innerHTML=`Result: ${result}`
    resultPara.style.color = "#c92a2a"
    resultPara.style.backgroundColor = "#ffe0e0"
    resultPara.style.borderColor = "#ff6b6b"
    
    if(result === "Win") {
        resultPara.style.color = "#155724"
        resultPara.style.backgroundColor = "#d4edda"
        resultPara.style.borderColor = "#28a745"
    } else if(result === "Tie") {
        resultPara.style.color = "#004085"
        resultPara.style.backgroundColor = "#d1ecf1"
        resultPara.style.borderColor = "#0c5460"
    }
    
    scoreboardPara.innerHTML=`Scoreboard: Win ${win}  |  Lose ${lose}  |  Tie ${tie}`
}
function generateComputerMove()
{
    const random=Math.random()
    console.log(random)
    if(random<1/3)
        return "Rock"
    else if(random>1/3 && random<2/3)
    {
         return "Paper"
    }
    else
    {
         return "Scissors"
    }
}


function generateComputerMove1()
{
    const moves=["Rock","Paper","Scissors"]
    const randomIndex=Math.floor(Math.random()*moves.length)
    return moves[randomIndex]
}


function generateComputerMove2()
{
   
   const randomIndex=Math.floor(Math.random()*moves.length)
   switch(randomIndex)
   {
    case 0 : return "Rock"; break;
    case 1 : return "Paper"; break;
    case 2 : return "Scissors"; 
   }
}

function resetScore()
{
  win=0;
  lose=0;
  tie=0;
  movesPara.innerHTML = ""
  resultPara.innerHTML = ""
  scoreboardPara.innerHTML = ""
  console.clear()
  console.log(`Scoreboard Win ${win}  Lose ${lose}  Tie ${tie}`)
}


function test2()
{
    console.log("feature test2")
}

function autoplay(){
    let autoplayWins = win;
    let autoplayLoses = lose;
    let autoplayTies = tie;
    let moveCount = 0;
    
    autoplayButton.disabled = true;
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
    resetButton.disabled = true;
    
    const autoplayInterval = setInterval(() => {
        if(moveCount < 10) {
            const moves = ["Rock", "Paper", "Scissors"];
            const randomIndex = Math.floor(Math.random() * moves.length);
            playGame(moves[randomIndex]);
            moveCount++;
        } else {
            clearInterval(autoplayInterval);
            
            
            let playerAutoplayWins = win - autoplayWins;
            let computerAutoplayWins = lose - autoplayLoses;
            
            let autoplayWinner = "";
            if(playerAutoplayWins > computerAutoplayWins) {
                autoplayWinner = "🏆 PLAYER WINS THE AUTOPLAY! 🏆";
                resultPara.style.backgroundColor = "#d4edda";
                resultPara.style.borderColor = "#28a745";
                resultPara.style.color = "#155724";
            } else if(computerAutoplayWins > playerAutoplayWins) {
                autoplayWinner = "🏆 COMPUTER WINS THE AUTOPLAY! 🏆";
                resultPara.style.backgroundColor = "#ffe0e0";
                resultPara.style.borderColor = "#ff6b6b";
                resultPara.style.color = "#c92a2a";
            } else {
                autoplayWinner = "🤝 AUTOPLAY IS A TIE! 🤝";
                resultPara.style.backgroundColor = "#d1ecf1";
                resultPara.style.borderColor = "#0c5460";
                resultPara.style.color = "#004085";
                resultPara.style.color = "#004085";
            }
            
            let previousAutoplayResults = JSON.parse(localStorage.getItem('autoplayResults')) || [];
            previousAutoplayResults.push({
                playerWins: playerAutoplayWins,
                computerWins: computerAutoplayWins,
                timestamp: new Date().toISOString()
            });
            localStorage.setItem('autoplayResults', JSON.stringify(previousAutoplayResults));
            
            resultPara.innerHTML = autoplayWinner;
            scoreboardPara.innerHTML = `Autoplay Results: Player: ${playerAutoplayWins} | Computer: ${computerAutoplayWins}<br>Total Scoreboard: Win ${win}  |  Lose ${lose}  |  Tie ${tie}`;
            
            autoplayButton.disabled = false;
            rockButton.disabled = false;
            paperButton.disabled = false;
            scissorsButton.disabled = false;
            resetButton.disabled = false;
        }
    }, 500);
}
