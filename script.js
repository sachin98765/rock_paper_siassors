
let userScore=0;
let computerScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");       

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");




const genCompChoice = ()=>{
    const options=["rock","paper","scissor"];
    //rock paper scissors
    const randIdx=Math.floor(Math.random()*3);
        return options[randIdx];
    };


const drawGame = () =>{
    console.log("Game Was Draw");
    msg.innerText="Game Was Draw! Play Again.....";
    msg.style.backgroundColor = "#F58504";
};


const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){       
        userScore++;
        userScorePara.innerText=userScore; 
        console.log("You Win!");    
        msg.innerText=`You Win! your  ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        computerScore++;
        compScorePara.innerText=computerScore;
        console.log("You Loss"); 
        msg.innerText=`You Loss~   ${compChoice} beats your ${userChoice}`; 
        msg.style.backgroundColor = "red";                                                              //Emoji
    }

};

const playGame= (userChoice)=>{
    console.log("choice was clicked", userChoice);
    const compChoice=genCompChoice();
    console.log("comp choice=",compChoice);

    if(compChoice===userChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice==="rock"){
            //scissors, paper
            userWin=compChoice==="paper" ? false:true;
        }
        else if(userChoice==="paper"){
            //scissors, rock
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            //rock, paper
            compChoice==="rock"?true:false;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");   
        // console.log("choice was clicked", userChoice)
        playGame(userChoice);

    });
});