// CHAPTER 26-30

// TASK 1
var integer = +prompt("Enter any positive integer");
var roundOfValue = Math.round(integer);
var floorValue = Math.floor(integer);
var ceilValue = Math.ceil(integer);
document.write("Number : " + integer + "<br>Round Of Value : " + roundOfValue + "<br>Floor Value : " + floorValue + "<br>Ceil Vlaue : " + ceilValue);

// TASSK 2
var integer = +prompt("Enter any negative integer");
var roundOfValue = Math.round(integer);
var floorValue = Math.floor(integer);
var ceilValue = Math.ceil(integer);
document.write("Number : " + integer + "<br>Round Of Value : " + roundOfValue + "<br>Floor Value : " + floorValue + "<br>Ceil Vlaue : " + ceilValue);

// TASK 3
var number = -4;
var absolute = Math.abs(number);
document.write("The absolute value of " + number + " is " + absolute);

// TASK 4
var number = (Math.random() * 6) + 1;
document.write("Random Dice Value : " + Math.floor(number));

// TASK 5
var number = Math.floor((Math.random() * 2) + 1);
if (number === 1) {

    document.write(number + "<br>Random coin value : Tails");

}else{

    document.write(number + "<br>Random coin value : Heads");

}

// TASK 6
var number = Math.floor((Math.random() * 100) + 1 );
document.write("Random number between 1 and 100 : " + number); 

// TASK 7
var weight = prompt("Enter your weight in kilogram");
var weightAfterIntParse = parseInt(weight);
var weightAfterFloatParse = parseFloat(weight);

if(+weight === weightAfterIntParse || +weight === weightAfterFloatParse){

    document.write("The weight of user is : " + weight);
}else if(weight === weightAfterIntParse + "kgs"){

    document.write("The weight of user is : " + weightAfterIntParse + " kgs");

}else if(weight === weightAfterFloatParse + "kgs"){

    document.write("The weight of user is : " + weightAfterFloatParse + " kgs");

}else if(weight === weightAfterFloatParse + "kilograms"){

    document.write("The weight of user is : " + weightAfterFloatParse + " kilograms");
    
}

// TASK 8
var secretNumber = Math.floor(Math.random() * 10 + 1)

for(var i = 0; i >= 0 ; i++){

    var guessNumber = +prompt("Guess the number");
    
    if(secretNumber === guessNumber){

        alert("Congratulation! \r\nYou guess the correct number");
        break;
    
    }else{

        alert("Please try again");
    }
}

