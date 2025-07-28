// var, let, const

// console.log(nm);
// var nm = 25;


// console.log(nm);
// let nm = 25;


// var can be redeclared

// var a = 15;

// {
//     var a = 10;
// }
// console.log(a)


// var doesnt respect block scoped

// {
//     var a=15;
// }
// console.log(a)

// let and const are block scoped cannot be accesed out sidr the block

// {
//     let a=15;
// }
// console.log(a)

// var -> hoist -> undefined

// for let and const no value set just ref error
// let -> hoist ->
// const -> hoist ->


// let respect block

// let a = 20;

// {
//     let a = 30;
//     console.log("Inside:", a)
// }
// console.log("Outside:", a)

// var g = null;
// console.log(g)

// for (let i = 1; i<101 ; i++){
//     console.log(i)
// }


// let i=1;
// while(i<32){
//     console.log(i)
//     i++
// }


//break and continue

// for (let i = 1; i < 201; i++) {
//     console.log(i)

//     if (i === 32){
//         break;
//     }
// }

// for (let i = 1; i < 201; i++) {
//     if (i === 32) {
//         continue;
//     }

//         console.log(i)

// }



// let x = 20;
// let y = 30;

// if (x > 15 && x < 25){
//     console.log("success")
// } else{
//     console.log("failed")
// }



// let isAdmin = true;
// let isLoggedIn = false;

// if (isAdmin || isLoggedIn){
//     console.log("success")
// } else{
//     console.log("failed")
// }

// let score = 25;

// let grade = score >= 90 ? "A" : score >= 75 ? "B" : score >= 60 ? "C" : "Fail"

// console.log(grade)



// let loggedIn = true;
// let hasToken = false;

// let access = loggedIn && hasToken ? "Allow" : "Deny";

// console.log(access)


// let a= 1;
// a++;
// console.log(a)


// let b= 1;
// ++b;
// console.log(b)


// let x = 3;
// let y = x++;
// console.log(x, y)

// let n = 5;
// let result = n++ + ++n;
// console.log(result);

// let likes =100;

// function likePost(){
//     return ++likes;
// }

// console.log(likePost());
// console.log(likes)

// let count = 5;

// if (count-- === 5) {
//     console.log("Matched")
// } else {
//     console.log("Not Matched")
// }


// using early return simple code instead of if-else
// function getGrade(score) {
//     if (score >= 90 && score <= 100) return "A";
//     if (score >= 80 && score <= 89) return "B";
//     if (score >= 70 && score <= 79) return "C";
//     if (score >= 60 && score <= 69) return "D";
//     if (score >= 33 && score <= 59) return "E";
//     if(score >= 0 && score <= 32) return "Fail";
//     return "Invalid Marks";
// }

// console.log(getGrade(12));


// rock paper scissor logic
// function rps(user, computer) {
//     if (user === computer) return "Draw";

//     if (user === "rock" && computer === "scissor") return "rock";
//     if (user === "paper" && computer === "scissor") return "scissor";
//     if (user === "rock" && computer === "paper") return "paper";

// }

// rps("rock", "scissor");

// or this approach

// function rps(user, computer) {
//     if (user === computer) return "Draw";

//     if (user === "rock" && computer === "scissor") return "user";
//     if (user === "scissor" && computer === "paper") return "user";
//     if (user === "paper" && computer === "rock") return "user";

//     return "computer";

// }

// console.log(rps("rock", "paper"));



//Qs loops

// 1. Print 1 to 10 using a for loop

// for( let i=1 ; i<11 ; i++){
//     console.log(i)
// }



// 2. Print 10 to 1 using Reverse a string using while loop

// for (let i = 10; i > 0 ; i--) {
//     console.log(i)
// }

// i = 10;
// while (i > 0) {
//     console.log(i);
//     i--;
// }



// 3. Print even numbers between 1 to 20 using a for loop

// for (let i = 1; i < 21; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }


// 4. print odd numbers from 1 to 15 using a while loop

// let i = 1;
// while (i < 16) {
//     if (i % 2 === 1) {
//         console.log(i)
//     }
//     i++;
// }


// 5. print the multiplication table of 6

// for (let i = 1; i< 11; i++) {
//     console.log(6 * i)
// }


// 6. find the sum of numbers from 1 to 100 using a loop

// let sum = 0;

// for (let i = 1; i < 101; i++) {
//     sum = sum + i;
// }
//     console.log(sum)


// 7. print no from 1 to 50 that are divisible by 3

// for (i=1 ; i < 51 ;i++){
//     if(i % 3 === 0) {
//         console.log(i)
//     }
// }


// 8. Ask the user for a number and print whether each number from 1 to that number is even or odd.

// let val = prompt('Enter The Value')

// for (let i = 1; i <= val; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i} is even`)
//     }

//     else {
//         console.log(`${i} is odd`)
//     }
// }

// 9. Count how many numbers between 1 to 100 are divisible by both 3 and 5.

// for (let i = 1; i < 101; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i)
//     }

// }
 

//Qs Related to Break and Continue

// Q1: Stop at first multiple of 7

// write a loop that prints numbers from 1 to 100,
// prints each number, but stops completely when it finds the first number divisible by 7.

// for (let i = 1; i < 101; i++){
//         if (i % 7 === 0){
//             break;
//         }
//         console.log(i);
// }


// Q2: Skip Multiples of 3

// // Write a loop from 1 to 20 that:
// Skips numbers divisible by 3
// Prints all others

// Use continue

// Expected output:

// 1 2 4 5 7 8 10 11 .. ... (no 3, 6, 9, etc.)

// for(i =1 ; i<21 ; i++){
// if( i % 3 === 0) {
//         continue;
//     }
//     console.log(i);
// }

// Q3: Print First 5 Odd Numbers Only

//  Write a loop from 1 to 100 that:

// Prints only 5 odd numbers
// Then stops the loop

//  Use both if, continue, and a counter + break

//  Expected output:

// 1 3 5 7 9

// let count = 0;
// for (i = 1; i < 101; i++) {
//     if (i % 2 !== 0) {
//         count++;
//         console.log(i)
//     }

//     if (count ===5 ) break;
// }


//FUNCTIONS

// Type 1: Function Declaration
// function abcd() {

// }

// Type 2: Function Expression
// let expp = function () {

// }

// Type 3: Arrow Function (aka fat arrow fn)
// let abde = () => {

// }


//Parameters and Arguments

// syntax:
// function chacha(param1 ,param2){
//     console.log(kaam1 + kaam2 )
// }

// chacha(arg1 ,arg2)


// function chacha(kaam1 ,kaam2){
//     console.log(kaam1 + kaam2 )
// }

// chacha(1, 2)
// chacha(3, 3)