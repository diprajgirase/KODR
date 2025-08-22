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


// rest and spread

// function abcd(a,b,c,...val){
// console.log(a,b,c,val)
// }

// abcd(1,2,3,4,5,6)


//return means in fn some qs

// function abcd (){
//    return 12; 
// }

// let val = abcd();
// console.log(val)




// function abcd (hi){
//     return 12 + hi
// }

// let val = abcd(23);
// console.log(val)



//first class function  /high order function


// function abcd(val){
//     val();
// }

// abcd(
//     function(){
//         console.log("hey")
//     }
// )


// pure & impure functions

// var a= 1;

// function abc(){
//     console.log(a);
// }

// function abd(){
//     a++
//     console.log(a)
// }

// abc(); 
// abd();



//iife [Immediately invoked function expression]

// (function(){
// console.log(12)
// })()


// Qs Based on functions

// Q1. What's the difference between function declaration and expression in terms of hoisting?

// abcd();


// function abcd(){
//     console.log("heyyy")
// }

//  Q2.convert to arrow fn

// function abcd (a, b) {
//     return a * b;
// }

// console.log(2,4)


// let abcd = () => {
//     return a * b;
// }


// Q3. how arguments and parameters this fn has

// function abb(a,b,c){
//    console.log(a,b,c)
// }
// abb(2,4)


//Q4. Use rest parameter to accept any number of scores and return the total.

// function getScore(...scores) {
//     let total = 0;
//     scores.forEach(function (val) {
//         total = total + val;
//     });

//     return total;
// }

// console.log(getScore(20, 25, 15, 20))


// Q5. fix this fn using early return

// function checkAge(age) {
//     if (age < 18) {
//         console.log("Too Young");
//     }
//     else {
//         console.log("Allowed");
//     }
// }

// checkAge(22);


// function checkAge(age) {
//     if (age < 18) return "Too Young";
//     return "Allowed";
// }

// console.log(checkAge(22));



//Q6. pass a fn into another fn and execute it inside

// function raj (val){
//     val()
// }

// raj(
//     function(){
//         console.log("huihui")
//     }
// )

// Q7. convert above Fn into pure fn

// let total=0;

// function totalNum(num){
//     total += num;
// }


// let total= 0 ;

// function totalNum(num){
//     let totalE =total
//     totalE += num;
// }



// function outer() {
//   let count = 0;
//   return function () {
//     count++;
//     console.log(count);
//   };
// }

// const counter = outer();
// counter(); 
// counter();  


// conver normal function to IIFE

// function abc(){
//     console.log("huihui")
// }


// (function abc(){
//     console.log("huihui")
// })();


// what will be output here and why?  

// greet(); 

// let greet = function() {
//   console.log("Hi!");
// }


// mutable in js but not in react
// var arr= [1,2,3,4];

// var arr2 =arr;

// arr2.pop()

//approach to be followed in react copy and then update
// state = { name: "harshita" , age: "24" }

// copy = {...state}

// copy.age= 21; 



//destructuring object

// var chacha = {
//     name: "ram", age: 24, social: {
//         facebook: {
//             first: "lalala",
//             second: "huihui"
//         }
//     }
// }

// const {first ,second} = chacha.social.facebook;


//destructuring array

// var arr = [ 12 , function(){}]

// var [shyam, john ] = arr ;


// var arr =[ 12,function(){},50]

// var [sui,,mui] = arr;



//fat arrow fn implicit return

// const nonu = () => ({name:"dip" ,age:"22"})

// console.log(nonu())



//map on array

// var arr = [1,23, 43, 54]
// const ans = arr.map(val => val*2)



// var set = [21, 2, 33, 44]
// var ans = set.map(values => values+1)
// set =ans



// var state =[ 22,11,44,2,3,4,5,23,53]
// const ans= state.map(elem => elem>5 ? elem+4 : elem)