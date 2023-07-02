let card = document.getElementById("cards");
let sum = document.getElementById("sum");
let result = document.getElementById("result");
let ans = 0;
let isAlive = true;
let Blackjack = false;

function reset(){
     ans = 0;
    card.textContent = "Card :"
    sum.textContent = "Sum :"
    result.textContent = "Take out A New Card";
    Blackjack = false;
    isAlive = true;
}

function cardrender(){
    if(Blackjack=== true){
        result.textContent = "You Won !! Please Start New Game"
       }

    else if(isAlive=== false){
       result.textContent = "You Cant Take Out New Card "+ "You Lost The Game";
   }
   else{
      newCard();
   }
   
}


function newCard(){
    let next = Math.floor((Math.random()*11)+1);
    card.textContent +=" "+next+" "+"-" ;
    ans += next; 
    sum.textContent = "Sum :"+" "+ans;
   
     if(ans>21){
      result.textContent = "You Lost Please Try Again..";
       isAlive =false;
       Blackjack = false;
      }
     else if(ans<21){
        result.textContent = "Take out A New Card";
        isAlive = true;
        Blackjack = false;
      }
     else{
        result.textContent = "Congratulations !!! You Got Blackjack You Won The Game"
        isAlive = false;
        Blackjack = true;
    }
}
