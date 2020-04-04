/*
//################### STRINGS ####################
console.log('hello world');

let email = 'tejidokit@gmail.com';
console.log(email);

//string concatenation

let firstName =  'Kit';
let lastName =  'Tejido';
let fullName = firstName + ' ' + lastName;
console.log(fullName);

//getting characters
console.log(fullName[0]);                 
//string length                                         
console.log(fullName.length);

// string methods
console.log(fullName.toUpperCase());

let result = fullName.toLocaleLowerCase();
console.log(result);
console.log(result, fullName);
//##############
let index = email.indexOf('@')
console.log(index);
//##############
*/
/*
// common string methods
let email = 'tejidokit@gmail.com';
let result = email.lastIndexOf('e'); //answer on log would be 0
console.log(result);
*/
/*
// common string methods
let email = 'tejidokit@gmail.com';
let result = email.slice(0,3); //splices the first 3 letters and shows them so ans on log would be -> tej
console.log(result);
*/
//##############
/*
let email = 'tejidokit@gmail.com';
let result = email.substring(4,10); //grabs fromt he fourth character until it reached 10 characters
console.log(result);
*/
/*
//##############
let email = 'tejidokit@gmail.com';
//let result = email.replace('t', 'o'); //changes 't' to 'o'.
let result = email.replace('i', 'g'); // only replaces the first 'i' to 'g'
console.log(result);
*/


//##################### NUMBERS #####################
//let radius = 10;
//const pi = 3.14;
//console.log(radius, pi); <-- just regular variable
// let result = radius % 3; <-- just regular variable but divided by 3
//let result = pi * radius**2 <-- pi x radius to the power of 2

//################ ORDER OF OPERATION #####################
// Brackets Exponents Division Multiplication Addition Subtraction
//console.log(result);

//################ ORDER OF OPERATION #####################
/*
let likes = 10;
likes = likes + 1; // <-- 10 + 1 = 11
console.log(likes);

        or

let likes = 10;
likes++;  // <-- 10 + 1 = 11 (same answer as above)
console.log(likes);

        or

let likes = 10;
likes++;  // <-- 10 + 1 = 11 (same answer as above)

likes = likes + 10; // <-- 10 + 10 = 20
        or
likes +=10; // <-- 10 + 10 = 20
console.log(likes);

*/
/*
//################ numbers and strings concatenation #####################
let likes = 10;
let result = 'this blog has ' + likes + ' likes';
console.log(result);
*/

//################ TEMPLATE STRINGS #####################
//const title = 'Best Reads of 2020';
//const author = 'Kit';
//const likes = '30';

//################ concatenation way #####################
//let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
//console.log(result);


//################ template strings way or template literal way.... this is easier to read if you have a lot of variables #####################
/*
let result = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result);


//################ creating html templates for dynamic contenct #####################

let html = `
    <h2>
        ${title}
    </h2>

    <p>
        ${author}
    </p>

    <span>
        This blog has ${likes} likes
    </span>
    `
    ;

    console.log(html);
    */

//################ OBJECT DATA TYPE ==== ARRAYS (collection of values on a variable) #####################

//let ninjas = ['Kit', 'Naruto', 'Rekka'];
//console.log(ninjas);
//console.log(ninjas[1]); // answer would be Naruto as (0=kit, 1=naruto, and 2=rekka)

//###### over riding values example
//let ninjas = ['Kit', 'Naruto', 'Rekka'];
//ninjas[1] = 'Kakashi';
//console.log(ninjas[1]); // answer would now be Kakashi

//let ages = [29, 35, 40, 45];
//console.log(ages[1]); // answer would now be 35

//let random = ['Kit', 'Naruto', 'Rekka', 98, 29, 32];
//console.log(random); // answer would show all values regardles of data types

//let ninjas = ['Kit', 'Naruto', 'Rekka'];
//console.log(ninjas.length); // answer would now be 3, as it is the number of elements inside the array

//let ninjas = ['Kit', 'Naruto', 'Rekka'];
//let result = ninjas.join(','); 
//console.log(result); // answer would join all values/elements on an array and separated by a comma, so it would be Kit,Naruto,Rekka

//let ninjas = ['Kit', 'Naruto', 'Rekka'];
//let result = ninjas.indexOf('Naruto'); 
//console.log(result); // answer would be 1, as Naruto is the 1 position of the array

//let ninjas = ['Kit', 'Naruto', 'Rekka'];
//let result = ninjas.concat(['Luffy', 'Ichigo']); 
//console.log(result); // this method .concat would join two arrays together so answer would be Array(5) [ "Kit", "Naruto", "Rekka", "Luffy", "Ichigo" ]

//let ninjas = ['Kit', 'Naruto', 'Rekka'];
//let result = ninjas.push('Kakashi'); 
//console.log(ninjas); // this method .push would add a new value "Kakashi" to the already existing array from the variable ninjas, answer would be 4, as there are now 4 values inside the array
//the answer would be ---->  Array(4) [ "Kit", "Naruto", "Rekka", "Kakashi" ]
/*
let ninjas = ['Kit', 'Naruto', 'Rekka'];
let result = ninjas.push('Kakashi');
result = ninjas.pop(); // this method .pop removes the last value on an array so the answer would be Array(3) [ "Kit", "Naruto", "Rekka" ]
console.log(result); // by asking for the result the answer would be Kakashi
*/


//################ NULL AND UNDEFINED DATA TYPES - used for clearing out forms #####################
//let age = null;
//console.log(age, age + 3, `the age is ${age}`); // the answer is null 3 the age is null


//################ BOOLEANS true/false #####################

//################ Booleans and comparisons
//console.log(true, false);

//################ Methods can return Booleans
//let email = 'tejidokit@gmail.com';
//let result = email.includes('@'); // includes is a boolean method
//console.log(result);     // answer is true because @ is included inside the string tejidokit


//let email = 'tejidokit@gmail.com';
//let names = ['mario', 'luigi', 'princess peach']; // includes is a boolean method
//let result = names.includes('bowser');
//console.log(result);   // answer is false because bowser is not included inside the array ['mario', 'luigi', 'princess peach'] 


//################ Comparison operators ##

//let age = 25;
//console.log(age == 25); // == is a boolean method, meaning are these two values the same, while = symbol gives value to a variable
// answer is true because age is equal to 25

//let age = 25;
//console.log(age != 50); // != is a boolean method, meaning are these two values NOT the same, while = symbol gives value to a variable
// answer is true because age is NOT equal to 50

//let age = 25;
//console.log(age > 50); // > and < are a booleans method, meaning greater than and less than, while = symbol gives value to a variable
// answer is false because age is NOT greater than 50

//let age = 25;
//console.log(age <= 25); // less than or equal to
// answer is true because age is less than or equal to 25

//let age = 25;
//console.log(age >= 25); // greater than or equal to
// answer is true because age is greater than or equal to 25

/*
let name = 'Kit';
console.log(name == 'Kit'); // answer is true, same everything
console.log(name == 'kit'); // answer is false, lower case first letter 
console.log(name > 'seungji'); // answer is false because "K" in Kit comes firs than the "S" in Seungji, the later the alphabet, the higher its value is
console.log(name > 'kit'); // answer is false because lower case letters are greater than uppercase letters
console.log(name > 'Seungji'); // false. Also if the value for name = kit, this will still be > than something like Alice with a capital A since lower case is king
*/

//######### loose comparison (not very accurate)
//let age = 25;
//console.log(age == 25);
//console.log(age == '25'); // both statements are TRUE even though theyre different types one is an integer 25 and the other is a string 25. it is loose,

//console.log(age != 25);
//console.log(age != '25'); // both statements are FALSE.



//######### strict comparison 

//let age = 25;
//console.log(age === 25); // still true
//console.log(age === '25'); // now false, because of ===, instead of just ==, now the number/integer cannot be equal to a string/word value

//let age = 25;
//console.log(age !== 25); // false. duh
//console.log(age !== '25'); // true, coz age is NOT equal to string 25

//############################ TYPE CONVERSION ############################ 
// Three things inside  
//let score = '100'; // this is a string
//console.log(score + 1);
// the statement below is how to convert
/*
let score = '100';
score = Number(score); // convert the string '100' to a number
console.log(score + 1);


console.log(typeof score); // used to check what kind of data type the variable is
*/

//let result = Number('hello');
//console.log(result);
// NaN, it doesnt make sense

/*
//convert number to string
let score = '100';
let result = String(50);
console.log(result, typeof result); // answer would be 50, the type would be string
*/

/*
//convert number to strong
let score = '100';
let result = Boolean(100);
console.log(result, typeof result); // answer would be true, "Boolean".
*/

/*
let score = '100';
let result = Boolean(0);
console.log(result, typeof result); // answer would be false, "Boolean"
*/

/*
let score = '100';
let result = Boolean('0');
console.log(result, typeof result); // answer would be True, "Boolean" since it is now a string
*/

/*
let score = '100';
let result = Boolean('');
console.log(result, typeof result); // answer would be False, "Boolean" since there is nothing inside.
*/

//###################### CONTROL FLOW ###############################

//################# FOR LOOPS ################
// Elements inside a For Loop include the following: Initilization, a Condition and a Final Expression
/*
for(let i = 0; i < 5; i++){
    console.log('in loop:', i);
};

console.log('loop finished');
//answer on the console would be would be 
    in loop: 0 sandbox.js:307:13
    in loop: 1 sandbox.js:307:13
    in loop: 2 sandbox.js:307:13
    in loop: 3 sandbox.js:307:13
    in loop: 4 sandbox.js:307:13
    loop finished sandbox.js:310:9
Live reload enabled.
*/


//################# FOR LOOPS for Database ################
/*
const names = ['nara', 'yamanaka', 'akimichi'];
for(let i = 0; i < names.length; i++) {
   console.log(i);
}; 
// for as long as i is less than the value, we will cycle through it/each one
//answer would be 0 1 2 
*/


// ##### cyling through an array without knowing the length
/*
const names = ['nara', 'yamanaka', 'akimichi'];
for(let i = 0; i < names.length; i++) {
   console.log(names[i]);
};
//answer would show nara yamanaka akimichi
*/


/*
// ##### cyling through an array, output would be on an html
const names = ['nara', 'yamanaka', 'akimichi'];

for(let i = 0; i < names.length; i++){
    let html = `<div>${names[i]}</div>`;
        console.log(html);
};
//answer would show <div>nara</div> <div>yamanaka</div> <div>akimichi</div>
// Iteration == cycling through an array or some data, each iteration is one cycle through of the data.
*/


/* ############## WHILE LOOP #################### */

// The FOR LOOP and the WHILE LOOP do the exact same thing, the only difference is the syntax
//While loops would only include the Condition inside the parenthesis
/*

let i = 0;

while(i < 5){
    console.log('in loop: ', i);
        i++;
}
//the answer would be an infinite loop since 0 isn't added anything and will always be less than 5 so it will be running over and over and over
// so you need to add i++ so 0 gets added 1, and ultimately will be equal to 5
//answer would be:  
    //in loop:  0 sandbox.js:366:13
    //in loop:  1 sandbox.js:366:13
    //in loop:  2 sandbox.js:366:13
    //in loop:  3 sandbox.js:366:13
    //in loop:  4
*/
/*
const names = ['hokage', 'kazekage', 'mizukage']

let i = 0;

while(i < names.length){
    console.log(names[i]);
        i++;
};

//answer would be hokage kazekage, mizukage
*/



// ############# DO WHILE LOOP ################
// Run the code once then do not execute the code anymore
/*
let i = 5;

do {
    console.log('val of i is: ', i);
    i++;
}
while(i < 5);

//do the CODE, once to begin with, regardless of the condition being true or false
// at the end of the DO BLOCK, 
// this statement only runs once
// if val is 4, it will still only run once, but if val is 3 it will say val of i is 3 val of i is 4, so it ran twice due to the i++
// answer for the statement above is: val of i is 5 and it will only run once
*/

// ############ IF STATEMENTS ############
// Code is executed ONLY if the condition is TRUE. No counter variables since the code block only executes once or not at all. no loops
/*
const age = 25;

if (age > 20){
    console.log('you are over 20 years old');
}
// answer: you are now 20 years old
*/

// using IF Statements to check data

const ninjas = ['naruto', 'kakashi', 'sai', 'shikamaru'];

if(ninjas.length > 3){
    console.log("that's a lot of ninjas");
}
// so if the number of ninjas is more than 3, execute the code
//answer: that's a lot of ninja


