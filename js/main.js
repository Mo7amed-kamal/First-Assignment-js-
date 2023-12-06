/* ----------------[1]---------------- */
// var number = Number(prompt("Enter Your number"))
// console.log(number)
// document.getElementById("num").innerHTML = "This is value " +number

/* -----------------[2]---------------- */
// var number = Number(prompt("Enter Your number"))

// if ( number % 3==0 && number % 4==0 ) {
//     console.log("Yes");
// }else {
//     console.log("No");
// }

/* ------------------[3]------------------*/
// var num1 = Number(prompt("Enter Your number"))
// var num2 = Number(prompt("Enter Your number"))

// if (num1 > num2) {
//     console.log(num1);
//     document.getElementById("num").innerHTML = "The max number" +num1
// } else {
//     console.log(num2);
// }

/* ----------------[4]--------------- */
// var num = Number(prompt("Enter Your Number"))

// if(num < 0) {
//     console.log("Num is Negative")
//     document.getElementById("num").innerHTML = "Number is Negative" + num
// }else if (num > 0 ) {
//     console.log("Num is Postive");
//     document.getElementById("num").innerHTML = "Number is Postive" + num
// }

/* ---------------------[5]------------------- */
// var number1 = Number(prompt("Enter first Number"));
// var number2 = Number(prompt("Enter second Number"));
// var number3 = Number(prompt("Enter third Number"));

// if(number1>number2 && number1>number3){
//     console.log("Max element = " + number1);
//     if(number2>number3){
//         console.log("min element = " + number3);
//     }
//     else{
//         console.log("min element = " + number2);
//     }
// }
// else if(number2>number1 && number2>number3){
//     console.log("Max element = " + number2);
//     if(number1>number3){
//         console.log("min element = " + number3);
//     }
//     else{
//         console.log("min element = " + number1);
//     }
// }
// else{
//     console.log("Max element = " + number3);
//     if(number1>number2){
//         console.log("min element = " + number2);
//     }
//     else{
//         console.log("min element = " + number1);
//     }
// }

/* ---------------------[6]------------------- */
// var number = Number( prompt("Enter Your Number") )

// if( number % 2 == 0) {
//     console.log("The number is even")
// }
// else {
//     console.log("The number is odd");
// }

/* ---------------------[7-8]------------------- */
// var character = prompt("Enter Your Character")

// if ( character == "a" || character == "e"|| character == "i" || character == "o" || character == "u" ) {
//     console.log("Character is vowel")
//     document.getElementById("num").innerHTML = "Vowel";
// }else {
//     console.log("Character is consonant");
//     document.getElementById("num").innerHTML = "consonant";
// }

/* ---------------------[9]------------------- */
// var num = Number(prompt("Enter Your number"))

// for( var i = 1; i <= num; i++ ) {
//     console.log(i);
// }

/* ---------------------[10]------------------- */
// var number = Number(prompt("Enter a Number"));

// for(var i = 1; i <= 12 ; i++){
//     var result = i * number;
//     console.log(result);
// }

/* ---------------------[11]------------------- */
// var btnUser = Number( prompt("Enter Your Name") ) 

// for (var i = 1; i <= btnUser; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

/* ---------------------[12]------------------- */
// var num1 = Number(prompt("Enter a Number"));
// var num2 = Number(prompt("Enter a Number"));
// var result = 1;
// for(var  i=1 ; i<= num2; i++){
//     result *= num1;
// }
// console.log(result);

/* ---------------------[12]------------------- */
// var mark1 = Number(prompt("Enter a mark1"));
// var mark2 = Number(prompt("Enter a mark2"));
// var mark3 = Number(prompt("Enter a mark3"));
// var mark4 = Number(prompt("Enter a mark4"));
// var mark5 = Number(prompt("Enter a mark5"));

// var total = mark1 + mark2 + mark3 + mark4 + mark5;
// var average = (mark1 + mark2 + mark3 + mark4 + mark5)/5;  // total / Number
// var percentage = (mark1 + mark2 + mark3 + mark4 + mark5)/5;

// console.log("total marks ="+ total);
// console.log("average marks ="+ average);
// console.log("percentage ="+ percentage + "%");

/* ---------------------[13]------------------- */
// var monthNumber = Number( prompt("Enter Month Number") ) 

// if (monthNumber == 2) {
//     console.log("Days in Month: 28 Or 29");
// }
// else if (monthNumber == 4 || monthNumber == 6 || monthNumber == 9 || monthNumber == 11) {
//     console.log("Days in Month: 30");
// } else {
//     console.log("Days in Month: 31");
// }

/* ---------------------[14]------------------- */
// var grade = prompt("Enter your Grade")

// if ( grade >= 90 ) {
//     console.log(grade + "%: " + "Grad A");
// }
// else if (grade >= 80) {
//     console.log(grade + "%: " + "Grad B");
// }
// else if (grade >= 70) {
//     console.log(grade + "%: "+"Grad C");
// }
// else if (grade >= 60) {
//     console.log(grade + "%: "+ "Grad D");
// }
// else if (grade >= 40) {
//     console.log(grade + "%: "+ "Grad E");
// }
// else if (grade < 40) {
//     console.log(grade + "%: "+ "Grad F");
// }

/* ------------------------------* Using switch case*------------------------ */
/* -----------------[15]--------------- */
// var monthNumber = prompt("Enter Month Number")
// switch(monthNumber) {
//     case "2":
//         console.log("Days in Month: 28 Or 29");
//         break;
//     case "4":
//     case "6":
//     case "9":
//     case "11":
//         console.log("Days in Month: 30");
//         break;
//         default:
//         console.log("Days in Month: 31");
// }

/* -----------------[16]--------------- */
// var character = prompt("Enter Your Character")

// switch(true) {
//     case  (character == "a" || character == "e"|| character == "i" || character == "o" || character == "u" ):
//         console.log("Character is vowel")
//         break;
//         default:
//         console.log("Character is consonant");
// } 

/* -----------------[17]--------------- */
// var num1 = Number( prompt("Enter Your Number") )
// var num2 = Number( prompt("Enter Your Number") )

// switch(true) {
//     case (num1 > num2) :
//         console.log(num1)
//         document.getElementById("num").innerHTML = "The max number is =" +num1
//         break
//         default:
//         console.log(num2);
// }

/* -----------------[18]--------------- */
// var number = Number(prompt("Enter Your Number And Check Even OR Odd"))

// switch(true) { 
//     case ( number % 2 == 0):
//         console.log("The number is even")
//         document.getElementById("num").innerHTML = "The Even =" +number
//         break;
//         default:
//         console.log("The number is odd");
//         document.getElementById("num").innerHTML = "The Odd =" +number
// } 

/* -------------------[19]------------------ */
// var program = number(prompt("Check Your Number"))

// switch(true) {
//     case (program > 0):
//         console.log("Number is Postive");
//         break;
//     case (program < 0):
//         console.log("Number is Negative");
//         break;
//         default:
//         console.log("Zero");
// }

/* --------------------------------[20]----------------------------- */
// var number1 = Number( prompt("Enter first number: "))
// var operator = prompt('Enter operator ( either (+), (-) , (*) or (/) ): ')
// var number2 = Number( prompt("Enter Last number: "))

// let result;

// switch (operator) {
//     case "+":
//         result = number1 + number2;
//         console.log(` ${number1} + ${number2} = ${result}`);
//         document.getElementById("num").innerHTML = `Answer = ${number1} + ${number2} = ${result}` 
//         break;
//     case "-":
//         result = number1 - number2;
//         console.log(`${number1} - ${number2} = ${result}`);
//         document.getElementById("num").innerHTML = `Answer = ${number1} - ${number2} = ${result}` 
//         break;
//     case "*":
//         result = number1 * number2;
//         console.log(`${number1} * ${number2} = ${result}`);
//         document.getElementById("num").innerHTML = `Answer = ${number1} * ${number2} = ${result}`
//         break;
//     case "/":
//         result = number1 / number2;
//         console.log(`${number1} / ${number2} = ${result}`);
//         document.getElementById("num").innerHTML = `Answer = ${number1} / ${number2} = ${result}` 
//         break;
//         default:
//         console.log('Invalid operator');
//         break;
// }
