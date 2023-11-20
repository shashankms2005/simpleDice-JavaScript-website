var firstNumber=Math.random();
var secondNumber=Math.random();
firstNumber=firstNumber*6;
secondNumber=secondNumber*6;
firstNumber=Math.ceil(firstNumber);
secondNumber=Math.ceil(secondNumber);

var img1="./images/dice"+firstNumber+".png";
var img2="./images/dice"+secondNumber+".png";

document.querySelector(".img1").setAttribute("src",src=img1);
document.querySelector(".img2").setAttribute("src",src=img2);


if(firstNumber>secondNumber){
    document.querySelector("h1").innerHTML="🚩Player 1 is the winner!";
}else if(secondNumber>firstNumber){
    document.querySelector("h1").innerHTML="Player 2 is the winner!🚩";
}else {
    document.querySelector("h1").innerHTML="Its a Draw!";
}

