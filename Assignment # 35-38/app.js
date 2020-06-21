// CHAPTER 35-38

// TASK 1
function currentDateTime(){

    var date = new Date();
    document.write(date);
}

currentDateTime();

// TASK 2

function greetingUser(firstName, lastName){

    alert("Welcome " + firstName + " " + lastName + "!");
}
greetingUser("Bisma","Khan");

// TASK 3

function add(num1 = +prompt("Enter first number"), num2 = +prompt("Enter second number")){

    return num1+num2;
}
document.write(add());

// TASK 4
function calculator(num1 = +prompt("Enter first number"), operator = prompt("Enter operator"), num2 = +prompt("Enter second number")){

    if(operator === "+"){
        return num1 + num2;
    }else if(operator === "-"){
        return num1 - num2;
    }else if(operator === "*"){
        return num1 * num2;
    }else if(operator === "/"){
        return num1 / num2;
    }else if(operator === "%"){
        return num1 % num2;
    }else{
        return "Invalid operator";
    }
}
document.write("<b>Result is : </b>" + calculator());

// TASK 5
function square(number = +prompt("Enter number to be squared")){

    return number * number;
}
document.write("Square is : " + square());

// TASK 6
function factorial(number = +prompt("Enter any number")){

    var fact = 1;

    for(var i = number ; i >= 1 ; i--){

        fact = fact * i;
    }

    return fact;
}

document.write("Result is : " + factorial());

// TASK 7

function counting(start = +prompt("Enter start number"), end = +prompt("Enter end number")){

    for(var i = start ; i <= end ; i++){

        document.write(i + "<br>");
    }
}

document.write("<h3>COUNTING</h3> <br>" + counting());

// TASK 8

function calculateHypotenuse(base = +prompt("Enter base of a triangle"), perp = +prompt("Enter perpendicular of a triangle")){

    function calculateSquare(num){

        return num * num;
    }

    return calculateSquare(base) + calculateSquare(perp);
}

document.write("Hypotenuse square is : " + calculateHypotenuse());

// TASK 9
function area(width = 15 , height = 20){

    return width * height;
}

function area(width, height){

     return width * height;
}

// TASK 10
function checkPlaindrome(string = prompt("Enter any string")) {

    var reverse = [];
    var count = 0;
    for (var i = string.length - 1; i >= 0; i--) {

        reverse.push(string[i]);
    }
    for (var i = 0, j = 0; i < string.length; i++, j++) {

        if (string[i] === reverse[j]) {

            count++;
        }
    }
    document.write("String : " + string + "<br>Reverse String : " + reverse.join("") + "<br>");
    if (count === string.length) {
        document.write("The string is palindrome")
    }
    else {
        document.write("The string is not palindrome")
    }
}

checkPlaindrome();

// TASK 11
function convertFirstLetter(string = prompt("Enter any String")){

    // var firstChar = string.charAt(0);
    // var upper = firstChar.toUpperCase();

    // var firstChar = string.charAt(0).toUpperCase();
    // document.write(firstChar);

    for( var i = 1 ; i < string.length ; i++){

        if(string.charAt(i) === " "){

            var otherChar = string.charAt(i+1).toUpperCase();
            document.write(string.replace(string.charAt(i+1),otherChar));
        }
    }
}
convertFirstLetter();

// TASK 12
function longestWord(string = prompt("Enter any string")){

    var afterSplit = string.split(" ");

    for(var i = 0 ; i < afterSplit.length ; i++){

        var word = afterSplit[i];
        var wordLength = afterSplit[i].length;
        
        if(wordLength < afterSplit[i+1].length){

            word = afterSplit[i+1];
            wordLength = afterSplit[i+1].length;
            break;
        }
    }

    document.write("String : " + string + "<br>Longest Word : <b>" + word + "</b> Word length : <b>" + wordLength + "</b>");
}
longestWord();


// TASK 13
function letterCount(string = prompt("Enter String"), letter = prompt("Enter letter")){

    for (var i = 0; i < string.length ; i++){

        var count = 0;
        if(string.search(letter)){

            count++;
        }
    }
    document.write("String : " + string + "<br>Occurence of " + letter + " is : " + count);
}
letterCount();

// TASK 14
function calcCircumference(radius){

    return 2 * 3.142 * radius;
}
function calcArea(radius){

    return 2 * 3.142 * (radius * radius);
}

document.write("Circumference of Circle : " + calcCircumference(5.2).toFixed(2) + " cm<br>Aea of a Circle : " + calcArea(5.2).toFixed(2) + " cm");

