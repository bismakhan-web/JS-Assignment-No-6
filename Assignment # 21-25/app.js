// CHAPTER 21-25 

// TASK 1
var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
var fullName = firstName + " " + lastName;
alert("Welcome " + fullName + "!");

// TASK 2
var favModel = prompt("Enter your favourite mobile model");
document.write("My favourite phone is : " + favModel + "<br>Length of String : " + favModel.length);

// TASK 3
var country = "Pakistani";
document.write("String : " + country + "<br>Index of 'n' : " + country.indexOf("n"));

// TASK 4
var word = "Hello World";
document.write("String : " + word + "<br>Last Index of 'l' : " + word.lastIndexOf("l"));

// TASK 5
var country = "Pakistani";
document.write("String : " + country + "<br>Character at index 3 : " + country.charAt(3));

// TASK 6
var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
var fullName = firstName.concat(lastName);
alert("Welcome " + fullName + "!");

// TASK 7
var city = "Hyderabad";
var afterReplacement = city.replace("Hyder","Islam");
document.write("City : " + city + "<br>After Replacement : " + afterReplacement);

// TASK 8
var str = "Ali and sami are best friends. They play cricket and football together."
document.write("String : " + str + "<br>After Replacement of 'and' with '&' : " + str.replace(/and/g,"&"));

// TASK 9
var str = "472";
document.write("Value : " + str + "<br>Type : String <br>");
var toNum = parseInt(str);
document.write("Value : " + toNum + "<br>Type : Number <br>");

// TASK 10
var input = prompt("Enter any thing you want");
document.write("User Input : " + input + "<br>Upper Case : " + input.toUpperCase());

// TASK 11
var input = prompt("Enter any thing you want");
var firstChar = input.charAt(0);
var otherChars = input.slice(1);
var upperFirstChar = firstChar.toUpperCase();
var lowerOtherChars = otherChars.toLowerCase();
var concat = upperFirstChar.concat(lowerOtherChars);
document.write("User Input : " + input + "<br>Title Case : " + concat);

// TASK 12
var num = 35.36;
var tostring = num.toString();
var afterRemovingDot = tostring.replace(".","");
document.write("Number : " + num + "<br>Result : " + afterRemovingDot);

// TASK 13
var userName = prompt("Enter User Name");

if (userName.search("!") || userName.search(",") || userName.search(".") || userName.search("@")){
    
    userName = prompt("Please enter a valid username");
}

// OR

for (var i = 0 ; i < userName.length ; i++){

    if (userName[i] === "!" || userName[i] === "," || userName[i] === "." || userName[i] === "@") {

        userName = prompt("Please enter a valid username");
        break;
    }
}

// TASK 14
var arr = ["cake","apple pie","cookie","chips","patties"];
var searchItem = prompt("Welcome to United Bakery \r\nWhat do you want to order Sir/Ma'am");

var toLower = searchItem.toLowerCase();
var flag = 0;

for (var i = 0 ; i < arr.length ; i++){
    
    if (toLower === arr[i]){

        document.write(arr[i] + "<b> is available</b> at index " + i + " in our bakery");
        flag = 1;
        break;
    }
}

if (flag === 0){

    document.write("We are Sorry. " + searchItem + "<b> is not available</b> in our bakery");
}

// TASK 15
var password = prompt("Enter your password");
var count = 0;
if (password.length == 6) {

    if (password.charAt(0) >= "a" && password.charAt(0) <= "z" || password.charAt(0) >= "A" && password.charAt(0) <= "Z") {

        for (var i = 1; i < password.length; i++) {

            if (password[i] >= "a" && password[i] <= "z" || password[i] >= "A" && password[i] <= "Z" || password[i] >= "0" && password[i] <= "9") {

                count++;
            }
        }
        if (count === password.length - 1) {
            alert("Welcome!");
        }
        else {
            password = prompt("Entered password : " + password + "\r\nPassword must contain alphabets or numbers\r\nPlease enter a valid password");

        }
    }
    else {
        password = prompt("Entered password : " + password + "\r\nPassword can't begin with a Number\r\nPlease enter a valid password");
    }
} else {

    password = prompt("Entered password : " + password + "\r\nPassword must be 6 characters long\r\nPlease enter a valid password");

}

// TASK 16
var str = "University of Karachi";
var arr = str.split(" ");
for(var i = 0 ; i < arr.length ; i++){

    document.write(arr[i] + "<br>");
}

// TASK 17
var input = prompt("Enter any thing");
var lastchar = "";
for (var i = 0 ; i < input.length ; i++){

    lastchar = input[i];
}
document.write("User Input : " + input + "<br>Last char of input : " + lastchar);

//TASK 18
var str = "The quick brwon fox jumps over the lazy dog";
var strToLower = str.toLowerCase();
var theStr = str.slice(0,3);
var theStrToLower = theStr.toLowerCase();
var splitStr = strToLower.split(" ");
var count = 0 ;
for(var i = 0 ; i < splitStr.length ; i++){


    if(splitStr[i] === theStrToLower){
        
        count++;
    }
}
document.write("Text : " + str + "<br>There are " + count + " occurence(s) of word 'the'"); 

