//This sets a variable for the usernumber this must be declared before the randomNumber function below
const userNumber = 10;
let counter = 0;
let maxTries = 0;
let myScoreWins = 0;
let myScoreLose = 0;
let myGuess = 3;
const winner_span = document.getElementById("winner");
const loses_span = document.getElementById("loses");
const guessLeft_span = document.getElementById("guessLeft");
const randomNumberGen = getRandomValue ()


//Get random number

function getRandomValue (){

 const rand = Math.floor(Math.random() * 100 + 1);
return rand ;
}




//create a user input

function userInput () {
 //get what it is that the user guess
const userGuess = document.getElementById("inputType").value;

//alert (userGuess);


 //compare it with the random number generator
 if (userGuess == randomNumberGen ){

         showOutput("winner");

 } else if (userGuess > randomNumberGen) {

         showOutput("toohigh");

 }  else if ( userGuess < randomNumberGen) {
   
         showOutput("tooLow");

 }
 
 else {
        showOutput("tryAgain")
 }

 



}


//show the output
function showOutput(answer){


switch(answer)
    {
        case "winner":
                document.getElementById("image").src ="./asset/images/win.jpg";
                document.getElementById("startText").textContent = "You Win!!"
                break

         case "toohigh":
                document.getElementById("image").src ="./asset/images/TooHigh.png" ; 
                document.getElementById("startText").textContent = "Too High!!"
                break

        case "tooLow":
                document.getElementById("image").src ="./asset/images/tooLow.png" ;
                document.getElementById("startText").textContent = "You Low!!"  
                break 


        case "tryAgain":
                document.getElementById("image").src ="./asset/images/TryAgain.png";
                document.getElementById("startText").textContent = "Try that again!"
                break
    } 

    

}



//compare computer guess with user input



//if user wins


// if user loses



//create a guess counter to keep track of the amount of guesses use has left


//score to keep score of wins and loses



//reset











//code errors below (references)-------------------------------

//const correctGuess 

// This generates sets the variable = to a random number




// In This prompt after the "string" the + usernumber will pull from the varible we set at the top
//const guess = prompt ("Please Pick a number between 1 and " + userNumber)

//const guess = prompt ("Please Pick a number between 1 and " + userNumber);

// This simply state a condition for happens if the input is not equal to the random value var


//read this statement as i = 0 if i is less than 10 then add one
// what this for loop is saying is that the if statement will run over and over if you guess wrong up to ten times
/*
function startGame() {

for (let i = 0; i <= 5; i++){

         const  guess = prompt("Guess a number between 1 and " + userNumber )
         const myScoreWins = 0;
    
          if (guess == randomValue) {
                console.log("Hooray");
                document.write( "You did it!! The magic number was " + randomValue );
                console.log (myScoreWins);
                break;

            } else {
                console.log("NOPE!!");
              
            }  


}

}

*/

/*
const randomValue = Math.floor(Math.random() * userNumber) + 1;

function clickMe(){
    document.getElementById("button").addEventListener("click",startGame())
}



function startGame() {
    const randomValue = Math.floor(Math.random() * userNumber) + 1;
    
    console.log(randomValue);
    const guess = prompt("Guess a number between 1 and " + userNumber)



     if (guess == randomValue) {
        console.log("Hooray");
        // document.write( "You did it!! The magic number was " + randomValue );
        wins();

        //  myScoreWins ++;
        // console.log ( "Current Score  " + myScoreWins);


         } else {
             console.log("NOPE!!");
            // myScoreLose++;
             myGuess--;
            // loses_span.innerHTML = myScoreLose;
            guessLeft_span.innerHTML = myGuess;
            alert("Guesses Left  " + myGuess )
            guessWrong();
             
             
        }



   function guessWrong(){
    console.log(randomValue);
    const guess = prompt("Guess a number between 1 and " + userNumber)



    if (guess == randomValue) {
        console.log("Hooray");
        // document.write( "You did it!! The magic number was " + randomValue );
        wins();

   }  else {
   
    console.log ("try again");
    
    
    myGuess -- ;
   guessLeft_span.innerHTML = myGuess;
   alert("Guesses Left  " + myGuess )
    lost ()
   }}





function wins() {
   if ( myGuess !== 0){
       myScoreWins++;
       winner_span.innerHTML = myScoreWins;
       
   }
}
 




function lost(){
alert("FINAL GUESS")
console.log(randomValue);
    const guess = prompt("Guess a number between 1 and " + userNumber)



    if (guess == randomValue) {
        console.log("Hooray");
        // document.write( "You did it!! The magic number was " + randomValue );
        wins();

   }  else {
       document.write( "game over press any key to cont.")
       myScoreLose++;
       loses_span.innerHTML = myScoreLose;
       onkeyup = reset();
}
}

}

function reset (){
    location.reload();
}

*/