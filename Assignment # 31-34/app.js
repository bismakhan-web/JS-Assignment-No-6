// CHAPTER 31-34

// TASK 1
document.write(new Date()); 

// TASK 2
var date = new Date();
document.write("Current Month : " + date.toString().slice(4,8));

// TASK 3
var date = new Date();
var tostring = date.toString();
var today = tostring.slice(0,3);
document.write("Today is " + today);

// TASK 4
var date = new Date();
var tostring = date.toString();
var today = tostring.slice(0,3);
var toLower = today.toLowerCase();
if (toLower === "sat" || toLower === "sun") {
    document.write("It's Fun Day");
}

// TASK 5
var date = new Date();
var tostring = date.toString();
var todate = tostring.slice(8,10);
if(todate < "16"){
    document.write("First fifteen days of the month");
}else{
    document.write("Last days of the month");
}

// TASK 6
var date = new Date();
var miliSeconds = date.getTime();
var minutes = miliSeconds / (1000 * 60);
document.write("Current date : " + date + "<br>Elapsed miliseconds since January 1, 1970 : " + miliSeconds + "<br>Elapsed minutes since January 1, 1970 : " + minutes);

// TASK 7
var date = new Date();
var getHour = date.getHours();
if (getHour <= 12){
    alert("It's AM")
}else{
    alert("It's PM");
}

// TASK 8
var newDate = new Date("December 31, 2020");
document.write("Later Date : " + newDate);

// TASK 9
var startingDateOfRamadan = new Date("April 25, 2020");
var ramadanTime = startingDateOfRamadan.getTime();
var ramadanToDays = ramadanTime / (1000 * 60 * 60 * 24);
var today = new Date();
var todayTime = today.getTime();
var toDays = todayTime / (1000 * 60 * 60 * 24);
var diff = toDays - ramadanToDays;
document.write(Math.floor(diff) + " days have passed since 1st Ramadan, 2020");

// TASK 10
var referenceDate = new Date();
var referenceTime = referenceDate.getTime();
var referenceSeconds = referenceTime / (1000);
var beginningDate = new Date("January 1, 2015");
var beginnningTime = beginningDate.getTime();
var beginningSeconds = beginnningTime / (1000);
var diff = referenceSeconds - beginningSeconds;
document.write("On reference date " + referenceDate + ",<br>" + Math.floor(diff) + " seconds had passed since beginning of 2015");

// TASK 11
var date = new Date();
var hourAhead = new Date();
hourAhead.setHours(date.getHours()-1);
document.write("Current Date : " + date +  "<br>1 hour ago : " + hourAhead);

// TASK 12
var date = new Date();
var yearBefore = new Date();
yearBefore.setFullYear(date.getFullYear()-100);
alert("Current Date : " + date + "\r\n100 years back, " + yearBefore);

// TASK 13
var age = +prompt("Enter your age");
var currentDate = new Date();
var birthYear = new Date();
birthYear.setFullYear(currentDate.getFullYear() - age);
document.write("Your Birth Year is : " + birthYear.toString().slice(10,15));

// TASK 14
document.write("<h2>K-Electric Bill</h2>");
var cusName = prompt("Enter Your Name");
var currentDate = new Date();
var currentMonth = currentDate.toString().slice(4,8);
var numOfUnits = 410;
var chargesPerUnit = 16;
var netAmount = numOfUnits * chargesPerUnit;
var latePaymentSurcharge = 350;
var grossAmount = netAmount + latePaymentSurcharge;
document.write("Customer Name : <b>" + cusName + "</b><br>")
document.write("Month : <b>" + currentMonth + "</b><br>")
document.write("Number of Units : <b>" + numOfUnits + "</b><br>")
document.write("Charges per Unit : <b>" + chargesPerUnit + "</b><br>")
document.write("Net Amount Payable ( within duw date ) : <b>" + netAmount + "</b><br>")
document.write("Late Payment Surcharge : <b>" + latePaymentSurcharge + "</b><br>")
document.write("Gross Amount Payable ( after due date ) : <b>" + grossAmount + "</b><br>")