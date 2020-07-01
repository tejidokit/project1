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

//################ TEMPLATE STRINGS #######################################
//const title = 'Best Reads of 2020';
//const author = 'Kit';
//const likes = '30';

//################ concatenation way ##########################################################################################################
//let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
//console.log(result);


//################ template strings way or template literal way.... this is easier to read if you have a lot of variables #####################
/*
let result = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result);


//################ creating html templates for dynamic contenct ################################################################################

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

//################ OBJECT DATA TYPE ==== ARRAYS (collection of values on a variable) ###########################################################

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


//################ NULL AND UNDEFINED DATA TYPES - used for clearing out forms ############################################################
//let age = null;
//console.log(age, age + 3, `the age is ${age}`); // the answer is null 3 the age is null


//################ BOOLEANS true/false ######################################################

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


//################ Comparison operators #####################################################

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



//######### strict comparison ##################################

//let age = 25;
//console.log(age === 25); // still true
//console.log(age === '25'); // now false, because of ===, instead of just ==, now the number/integer cannot be equal to a string/word value

//let age = 25;
//console.log(age !== 25); // false. duh
//console.log(age !== '25'); // true, coz age is NOT equal to string 25

//############################ TYPE CONVERSION ############################################### 
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

//###################### CONTROL FLOW #########################################################

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


// ############ BREAK AND CONTINUE ############################################################
/*
const scores = [50, 20, 0, 30, 100, 20, 10,];

for(let i = 0; i < scores.length; i++){

    if(scores[i] === 0){
        continue;
    }

    console.log('your scores;', scores[i]);

    if(scores[i] === 100){
        console.log('congrats, you go the top score');
        break;
    }

}
*/
// i++ each cycle i gets added 1
//Answer would be:
/* 
your scores; 50     
your scores; 20      
your scores; 30     
your scores; 100        
congrats, you go the top score
*/
// the break keyworkd breaks us out of the loop after fulfilling certain conditions like above
//if the score is 0 then the code will not proceed to the next block, so 0 will not show on the console




//################# FOR LOOPS for Database #####################################################
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


/* ############## WHILE LOOP #################################### */

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



// ############# DO WHILE LOOP ############################################################
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
/*
const ninjas = ['naruto', 'kakashi', 'sai', 'shikamaru'];

if(ninjas.length > 3){
    console.log("that's a lot of ninjas");
}
// so if the number of ninjas is more than 3, execute the code
//answer: that's a lot of ninja
*/

/*
// ############ IF ELSE STATEMENTS #############################################################

const password = 'passwordyfdfdfdf';


if(password.length >= 12){

    console.log('that password is super stronk');

} else if(password.length >= 8){

    console.log('that password is long enough');

} else {

    console.log('password is not long enough');
}
// Only ONE of the conditions will run
//answer from above would be: that password is super stronk
*/


// ############ LOGICAL OPERATORS ####################################################
/*
const password = 'pa@s';


if(password.length >= 12 && password.includes('@')){

    console.log('that password is super stronk');

} else if(password.length >= 8 || password.includes('@') && password.length > 5){

    console.log('that password is strong enough');

} else {

    console.log('password is strong');
}
// answer would be: that password is strong.... That is because it didn't pass additional conditional of having @ symbol so it goes down to the next conditional
// || symbol means OR.
*/

// ########## LOGICAL NOT ###############################################################
/*
 let user = false;

 if(!user){

     console.log('you must be logged in to continue');
 }
 //code blocks means, that if the user is NOT false, then log will say: you must be logged in to continue.
*/

// ################ SWITCH STATEMENTS #####################################################################################
// good for evaluating variables
/*
const  grade = 'D';

switch(grade){
    case 'A':
        console.log('You got an A');
        break;
    case 'B':
        console.log('You got an B');
        break;
    case 'C':
        console.log('You got an C');
        break;    
    case 'D':
        console.log('You got an D');
        break;
    case 'E':
        console.log('You got an E');
        break;
    default:
        console.log('not a valid grade');
}
*/
// break needs to be written so the code will only run on the specific value (in this case is D) and not everything else that comes after is as well.
// default case doest need to have a semi colon since it's the last one


// ############# VARIABLES AND BLOCK SCOPE #################################################################################

// block scope with variables, the area as to where the variable value is relevant

/*
let age = 30;

if(true){
    console.log('inside 1st code block:', age);
}

console.log('outside code block:', age);

//this code block has global scope so the answer would be: inside 1st code block: 30 outside code block: 30
*/

/*
let age = 30;

if(true){
    age = 40;
    console.log('inside 1st code block:', age);
}

console.log('outside code block:', age);
// answer is: inside 1st code block: 40 outside code block: 40
*/
/*
let age = 30;

if(true){
    let age = 40;
    let name = 'kittyboo';
    console.log('inside 1st code block:', age, name);
}

console.log('outside code block:', age, name);
// answer is: inside 1st code block: 40 kittyboo outside code block: 30 <empty string>
// putting LET on the age, redefines it inside that particular code block, its only valid inside that code block
*/
/*
let age = 30;

if(true){
    //let age = 40;
    let name = 'kittyboo';
    console.log('inside 1st code block:', age, name);

    if(true){
        console.log('inside 2nd code block: ', age);
    }
}

console.log('outside code block:', age, name);
// answer is: inside 2nd code block:  30
// this is because the code will take whatever is closest variable's value first.
*/

/*
let age = 30;

if(true){
    let age = 40;
    let name = 'kittyboo';
    console.log('inside 1st code block:', age, name);

    if(true){
        let age = 50;
        console.log('inside 2nd code block: ', age);
    }
}

console.log('outside code block:', age, name);
// Answer: inside 1st code block: 40 kittyboo, inside 2nd code block:  50, outside code block: 30 <empty string>
// the same concept applies to both either CONST and LET 
// VAR ignores block scope so it's Bad.
*/



//############################################# CHAPTER 4 FUNCTIONS ############################################# FUNCTIONS #########################################################

// A METHOD IS JUST A FUNCTION THAT IS ALSO AN OBJECT PROPERTY

// Functions like Variables are also given names, but Functions need to be called
// Below is an example of a FUNCTION DECLARATION
// javascript only HOISTS FUNCTION DECLARATIONS
/*
function greet() {
    console.log('Hello There');
}

// the Function greet is being called down / invoked below
// also know as FUNCTION DECLARATION
/*
greet();
greet();
greet();
*/


//below is what is called an FUNCTION EXPRESSION, when you store a FUNCTION INSIDE A VARIABLE unlike the Function Declaration where you dont.
// The variable can be set equal to something like a function, string, or number/integer. 
// FUNCTION EXPRESSIONS always end with a semi colon
//You can call a FUNCTION as many times as you want as seen below
//Javascripts DOES NOT HOIST Function Expressions
/*
const speak = function(){
    console.log('good day');
};

speak();
speak();
speak();
*/

//#################### ARGUMENTS AND PARAMETERS
// a template string was used, notice the weird apostrophes
// place values in order or else it wont work
/*
const speak = function(name, time){
    console.log(`good ${time} ${name}`);
};

speak('Kit', 'afternoon');
//output is good afternoon Kit
*/
/*
const speak = function(name = 'naruto', time = 'night'){
    console.log(`good ${time} ${name}`);
};

speak();
//answer: good night naruto
speak('kakashi', 'day');
//answer: good day kakashi
// the values on the code block are overwritten when assigning a value after it
*/


//#################### RETURNING VALUES
/*
const calcArea = function(radius){
    return 3.14 * radius**2;
}

const area = calcArea(5);
console.log(area);
//value is stored in new const, in this case "a" in order to be outputed
//answer is 78.5
// const of area can now be used over and over for whatever reason

*/

//#################### ARROW FUNCTION
/*
const calcArea = (radius) => {
    return 3.14 * radius**2;
};

const area = calcArea(5);
console.log('area is:', area);
//answer is. area is: 78.5


//convert regular functions to arrow functions
//sample 1, you can remove parethesis if theres only one parameter on the function
function isPositive(number) {
    return number >= )
};

const isPositive = number => number >= 0;

//sample 2
function randomNumber() {
    return Math.random
};

const randomNumber = () => Math.random;

//sample 
document.addEventListener('click', function() {
    console.log('click')
});

document.addEventListener('click', function() => console.log('click'));
*/
/*
//FUNCTIONS VS METHODS
const name = 'kenshin';
//Funtions
const greet = () => 'hello';
let resultOne = greet();
console.log(resultOne);
//answer hello


//Method uses DOT NOTATION, and defined on an object or data type

let result = name.toUpperCase();
console.log(result);
//answer is KENSHIN
*/

//#################### CALLBACKS AND FOREACH 
/*
const myFunc = (callbackFunc) => {
    //do something
    let value = 50;
    callbackFunc(value);
};

myFunc(value => {
    //do something
    console.log(value);
});
*/

//########################## CALLBACKS
//normal functions that passed in to another function
/*
let people = ['kenshin', 'yusuke', 'gon', 'kilua', 'ryu'];

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
};

people.forEach(logPerson);
//answer is below
/*
0 - hello kenshin sandbox.js:775:13
1 - hello yusuke sandbox.js:775:13
2 - hello gon sandbox.js:775:13
3 - hello kilua sandbox.js:775:13
4 - hello ryu
*/

//######## get a reference to the 'ul'
/*
const ul = document.querySelector('.people');

const people = ['kenshin', 'yusuke', 'gon', 'kilua', 'ryu'];

let html = ``;

people.forEach(function(person){
    //create an HTML template
    html +=`<li style="color: purple">${person}</li>`;
});

console.log(html);
//answer is 
//<li style="color: purple"> kenshin</li><li style="color: purple"> yusuke</li><li style="color: purple"> gon</li><li style="color: purple"> kilua</li><li style="color: purple"> ryu</li>

ul.innerHTML = html;

*/


//#################### OBJECTS
/*
Objects in real life have properies and things it can do

OBJECTS = cellphone
PROPERTIES = color, size, model
things it can do/METHODS/FUNCTIONS = move, take a picture, play music

*/

//######### OBJECT LITERAL
/* 
let user = {
    name: 'yasuke',
    age: 29,
    email: tejidoyasuke@gmail.com,
    location: 'japan',
    blog: ['how to defeat demons', '10 things to do when in the spirit world'];
};

console.log(user);
console.log(user.name);

user.age = 35;
console.log(user.age); //update a property using DOT notation

console.log(user['name']); //access using square bracket notation

user['name'] = 'eugene';
console.log(user['name']); //update a property using square bracket notation

const key =  'location';

console.log(typeof user); //checking the type of variable
//answer would be OBJECT
*/



//################## ADDING METHODS (THINGS IT CAN DO) TO THE OBJECTS
/*
let user = {
    name: 'yasuke',
    age: 29,
    email: 'tejidoyasuke@gmail.com',
    location: 'japan',
    blog: ['how to defeat demons', '10 things to do when in the spirit world'],
    //add methods
    login: function(){
        console.log('the ghost detective is in');
    },

    logout: function(){
        console.log('ghost detective is out');
    },

    logBlogs: function(){
        //use THIS KEYWORD
        this.blogs(this,blogs);
    },
};

//call out the method
user.login();
//answer: the ghost detective is in

user.logout();
//answer: the ghost detective is out
 */

/*
let user = {
    name: 'yasuke',
    age: 29,
    email: 'tejidoyasuke@gmail.com',
    location: 'japan',
    blogs: ['how to defeat demons', '10 things to do when in the spirit world'],
    //add methods using SHORT HAND style on the functions
    login(){
        console.log('the ghost detective is in');
    },

    logout(){
        console.log('ghost detective is out');
    },

    logBlogs(){
        console.log('this user has writtent he following blogs');
        this.blogs.forEach(blog => {
            console.log(blog)
        });
    }
};

user.logBlogs();
//answer: 
/*
this user has writtent he following blogs
how to defeat demons 
10 things to do when in the spirit world


console.log(this);
*/

//################ OBJECTS IN ARRAYS
/*
let user = {
    name: 'yasuke',
    age: 29,
    email: 'tejidoyasuke@gmail.com',
    location: 'japan',
    blogs: [
        { title: 'why bulalo rules', likes: 30},
        { title: 'ten things to make kimchi', likes: 10}
    ],
    //add methods using SHORT HAND style on the functions
    login(){
        console.log('the ghost detective is in');
    },

    logout(){
        console.log('ghost detective is out');
    },

    logBlogs(){
        console.log('this user has writtent he following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        });
    }
};

user.logBlogs();
//answer:
// this user has writtent he following blogs: sandbox.js:945:17
// why bulalo rules 30 sandbox.js:947:21
// ten things to make kimchi 10
*/

//############ MATH OBJECT

// console.log(Math);

// console.log(Math.PI);

// console.log(Math.E);

// const area = 7.7;

// console.log(Math.round(area));
//answer is 8


// const area = 7.7;

// console.log(Math.floor(area));
//answer is just 7


// const area = 7.7;

// console.log(Math.ceil(area));
//answer is just 8


// const area = 7.7;

// console.log(Math.trunc(area));
//answer is just 7


// ########## GENERATE RANDOM NUMBERS using Math object

// const random = Math.random();
// console.log(random);
// console.log(Math.round(random * 100)); //generates a random number between 1 and 100

// ################### PRIMITIVE AND REFERENCE TYPES

//PRIMITIVE TYPES - stored on the STACK (less space but faster)
/*
numbers
strings
booleans
null
undefined
symbols
*/

//REFERENCE TYPES - stored on the HEAP (more space but slower)
/*
all types of objects
object literals
arrays
functions
dates
all other objects
*/

// PRIMITIVE VALUES EXAMPLES

// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);
// //answer is scoreOne: 50 scoreTwo: 50

// scoreOne = 100;
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);
//answer is scoreOne: 50 scoreTwo: 50
//answer is scoreOne: 100 scoreTwo: 50


// REFERENCE VALUES EXAMPLES stored once with different pointers

// const userOne =  {name: 'ryu', age: 30};
// const userTwo = userOne;

// console.log(userOne, userTwo);
//answer is 
// Object { name: "ryu", age: 30 }
// Object { name: "ryu", age: 30 }



//############## Examples 

// const userOne =  {name: 'ryu', age: 30};
// const userTwo = userOne;

// console.log(userOne, userTwo);
//answer is 
// Object { name: "ryu", age: 30 }
// Object { name: "ryu", age: 30 }

// userOne.age = 40;
// console.log(userOne, userTwo);
//answer is 
// Object { name: "ryu", age: 40 } Object { name: "ryu", age: 40 }

// userOne.name = 'honda';
// console.log(userOne, userTwo);
//answer is 
// Object { name: "honda", age: 40 } Object { name: "honda", age: 40 }

 

//############## DOCUMENT OBJECT MODEL #########################

//####### 2 METHODS OF SELECTING OBJECTS FROM THE HTML DOCUMENT #########


//############ Query Selector
/* 
const para = document.querySelector('p'); //grabs the <p> tag

console.log(para);
*/



//grabs the <p>  with a class of error or <p class="error">

/*
const para = document.querySelector('.error');

console.log(para);
 */


//time to get specific
/*
const para = document.querySelector('div.error');

console.log(para);
 */

 /*
const para = document.querySelector('body > h1');

console.log(para);
*/


//############ Query SelectorALL

// selecting multiple objects
/*
const para = document.querySelectorALL('p');
console.log(para);
//answer is Nodelist(3) [p, p, p.error]
*/


//selecting a specific object from the group
/*
const para = document.querySelectorALL('p');
console.log(para[2]);
//answer is <p class="error">this is an error message </p>
*/


//using FOR EACH combo
/*
const para = document.querySelectorALL('p');

paras.forEach(para => {
    console.log(para);
});

console.log(para[2]);
//the result would show all of the <p> 
*/
/*
const paras = document.querySelectorALL('p');

const errors = document.querySelectorALL('.error');

const.log(errors);
*/


//##################### OTHER WAYS TO SELECT ELEMENTS ##########################

// YOu cant use ForEach methods on this, you have to convert them into arrays first



//########### Get Element by ID

/* 
const title = document.getElementById('page-title');
console.log(title);
//answer <h1 id="page-title">
*/


// ########## Get Elements by their class name
/* 

const errors = document.getElementsByClassName('error');
console.log(errors);
//answer HTMLCollection { 0: p.error, 1: div.error, length: 2 }

// to get the first element
console.log(errors[0]);
//answer <p class="error"></p>
*/


// ########## Get Elements by their tag name
/* 
const paras =  document.getElementsByTagName('p');

console.log(paras);

console.log(paras[1]);

//answer <p> lorem ipsum </p>
*/    



// ################## ADDING AND CHANGING PAGE CONTENT
/* 
const para = document.querySelector('p');

//console.log(para.innerText); //this is a property not a method

para.innerText = 'ninjas are awesome!';
//answer ON HTML WEB PAGE ninjas are awesome! 
*/


// appendding instead of replacing
/* 
const para = document.querySelector('p');

//console.log(para.innerText); //this is a property not a method

para.innerText += ' ninjas are awesome!';
//answer ON HTML WEB PAGE -> Hello World ninjas are awesome! 
*/



//############### CHANGING THE TEXT OF SEVERAL ITEMS AT ONCE
/*
const paras = document.querySelectorAll('p');

//callback function
paras.forEach(para => {
    console.log(para.innerText);
    para.innerText += ' new text';
});
/* 
answer: 
Hello World new text

lorem ipsum new text

this is an error message new text

this is another error 
*/



//###########  CHANGE THE HTML 
/* 
const content = document.querySelector('.content');

//console.log(content.innerHTML);

content.innerHTML += '<h2>THIS IS THE NEW H2</h2>';

//ANSWER ->
// this is the content 
//THIS IS THE NEW H2
*/


//############### OUTPUT AN HTML TEMPLATE FOR EACH ITEM / PERSON / ELEMENT FROM A DATABASE

    // make an arrray
/* 
const content = document.querySelector('.content');

const dragon = ['nadare', 'saiha', 'homura'];

dragon.forEach(hokage => {
    content.innerHTML += `<p>${hokage}</p>`;
});

//answer on htmpl page would be nadare saiha homura
*/



//################### GETTING AND SETTING html ATTRIBUTES
/*
const link = document.querySelector('a');

console.log(link.getAttribute('href'));
//ans: htttps://www.google.com
 */


//### CHANGING THE ATTRIBUTE
/* 
const link = document.querySelector('a');

console.log(link.getAttribute('href'));

link.setAttribute('href', 'https://duckduckgo.com');

link.innerText = 'the better browser';

//ans: the better browser and will link to ddg

const mssg = document.querySelector('p');

console.log(mssg.getAttribute('class'));

//ans: error class


mssg.setAttribute('class', 'success');

//ans: error class
*/


//###### SET ATTRIBUTE THAT DOESN'T EXISTS YET 
/* 
const mssg = document.querySelector('p');

console.log(mssg.getAttribute('class'));

mssg.setAttribute('class', 'success');

mssg.setAttribute('style', 'color: yellow');

*/
//ans: erro on html page turns to yellow
//ans: on console, this happens <p class="success" style="color: yellow">errror</p>



//########################### CHANGING CSS STYLES ##########################
/* 
const title = document.querySelector('h2');

//title.setAttribute('style', 'margin: 50px;');

//### CHECKING THE STYLE PROPERTY OF AN OBJECT FROM THE CONST ABOVE
console.log(title.style);
console.log(title.style.color);

//#### ADD STYLES the BEST way
title.style.margin = '50px';
// answer: color: orange; margin: 50px;

//add color style
title.style.color = 'crimson';
//ans: color: crimson;

//changing font style
title.style.fontSize = '60px';

// deleting a style
title.style.margin = '';

*/



//############ ADDING AND REMOVING CLASSES FROM ELEMENTS
/* 
const content = document.querySelector('p')

console.log(content.classList);

content.classList.add('toinks');

content.classList.remove('toinks');

content.classList.add('yehey');
*/


//check for a specific element line 49-56 @ html file
/*
const paras = document.querySelectorAll('p');

// check error tag on an html
paras.forEach(p => {
    if(p.textContent.includes('error')){
        p.classList.add('error'); 
    } // now any html tag that has the word error on it gets an "error" class

    if(p.textContent.includes('success')){
        p.classList.add('success'); 
    } // now any html tag that has the word success on it gets an "success" class
});

*/

//########## USING THE TOGGLE method
/*
const title = document.querySelector('.title');

title.classList.toggle('test);

title.classList.toggle('test);

//removes the class if it has one, if it doesnt have one it give it one

*/

// DOM HIERARCHY. QUERYING PARENTS, CHILDREN AND SIBLINGS IN A DOM line 64 -  72 in the HTML file
// you cannot use FOREACH on an HTML collection only on nodelists, or arrays
/* 
const article = document.querySelector('article');

console.log(article.children);
//ans: HTMLCollection { 0: h2, 1: p, 2: p, 3: p, 4: p, 5: p, 6: div, length: 7 }
*/
//####### take HTML collection and turn it into an array #########
/* 
Array.from('article.children');
console.log(Array.from('article.children'));
//ans: Array(16) [ "a", "r", "t", "i", "c", "l", "e", ".", "c", "h", … ]


//##### Now FOREACH can be used ####/

const article = document.querySelector('article');
Array.from(article.children).forEach(child => {
    child.classList.add('article-element');
});

//ans: every element inside the article would now have a class of "article-element"
*/

//##### Find the PARENT element instead of the CHILD
/* 
const title = document.querySelector('h6');
console.log(title.parentElement);
//ans: <article>

console.log(title.parentElement.parentElement);
//ans: <body>

console.log(title.nextElementSibling);
//ans: <p>

console.log(title.previousElementSibling);
//ans: <p> this would be the <p> before the <h6> tag
*/


//########## EVENT BASICS (CLICK EVENTS) ##############
/*
const button = document.querySelector('button');

button.addEventListener('click', () => {
    console.log('you clicked me');
}) 
//add method, then add an event of 'click' as argument within method, and add call back arrow functon
//ans on console after clicking button: 'you clicked me'
*/

/* 
const items = document.querySelectorAll('li');

items.forEach( item => {
    item.addEventListener('click', (event) => {
        console.log('item clicked');
    });
})

//when clicking an li element the console will output 'item clicked'
*/

/* 
const items = document.querySelectorAll('li');

items.forEach( item => {
    item.addEventListener('click', (event) => {
        console.log(event)
        console.log(e.target);
    });
})

//ans after clicking one of the li elements: click { target: li, buttons: 0, clientX: 326, clientY: 274, layerX: 326, layerY: 274 }
//MouseEvent.mozPressure is deprecated. Use PointerEvent.pressure instead.
//target property on dropdown @ console would reveal that li was clicked. target: <li>
*/

/* 
//change console.log to reveal
const items = document.querySelectorAll('li');

items.forEach( item => {
    item.addEventListener('click', (event) => {
        console.log(event.target);
        //or
        console.log(item);
    });
})

//ans: <li>
//ans: <li>
*/


/* 
//#### adding a css property when the element gets clicked ####
const items = document.querySelectorAll('li');

items.forEach( item => {
    item.addEventListener('click', (event) => {
        event.target.style.textDecoration = 'line-through'; //line through is a css property
    });
})

// result: the element gets a line when clicked
*/



//############# CREATING AND REMOVING/DELETING ELEMENTS FROM THE DOM ############### 
/*
//use the "remove" method

const items = document.querySelectorAll('li');

items.forEach(item => {
    item.addEventListener('click', (event) => {
        event.target.remove();          
    });
});

*/


/*
//####### add something whenever button get's clicked ##########

//first grab the button
const button = document.querySelector('button');

//grab the ul
const ul = document.querySelector('ul');
//add click event to button and even listener that fires when button is clicked
button.addEventListener('click', () => {
    ul.innerHTML += '<li>something new</li>';
});


//or use a createElement Method, and place a 'li' tag on the argument on the createElement Method
/*
button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'something new to do'; 

    //### now insert the li to the DOM using the APPEND method, append means put the tag (li) at the bottom of the parent tag (ul), you can also use PREPEND which does the opposite, and sends the new (li) he top ###

    ul.append(li);
});



const items = document.querySelectorAll('li');

items.forEach(item => {
    item.addEventListener('click', (event) => {
        event.target.remove();          
    });
});
*/ 


//####### EVENT BABBLING AND DELEGATION ##########
/* 
const button = document.querySelector('button');
const ul = document.querySelector('ul');

button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'something new to do'; 
    ul.append(li);
});

const items = document.querySelectorAll('li');

items.forEach(item => {
    item.addEventListener('click', (event) => {
        console.log('event in LI');
        event.stopPropagation();
        event.target.remove();          
    });
});

ul.addEventListener('click', (event) => {
    console.log('event in UL');
})

//ans would be: event in LI, event in UL, you don't want the UL to fire up, after the LI fires up, so to prevent this a stopPropagation METHOD is used on the LI, the event object
//after stop propagation method is placed, answer on console would now be: event in LI
*/



// ############## DELEGATION #################
//callback function fires up not on element itself but bubbles to the next element that has the evenr listener which is the UL, 
//so you can just have an even listener on the UL and not have to do it for each Li tag
/* 
const button = document.querySelector('button');
const ul = document.querySelector('ul');

button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'something new to do'; 
    ul.append(li);
});

ul.addEventListener('click', (event) => {
    console.log(event.target);
    if(event.target.tagName === 'LI') {
        event.target.remove();
    }
});
//ans: every click on the li would show: <li>

//#######  TODO LIST IS DONE!!!! YEY!!!! #############
*/



//########### MORE DOM EVENTS ########## 
/*
//show a copy event on the console

const copy =  document.querySelector('.copy-me');          // call out the element on javascript
copy.addEventListener('copy', () => {
    console.log('OI! my content is copyright')            //add an event listener
});    

//ans: when using mouse to copy the first paragraph, the console will show OI! my content is copyright


// show x and y position of mouse on the screen when hovering over element with class of box

const box = document.querySelector('.box');

box.addEventListener('mousemove', (event) => {
    //console.log(event.offsetX, event.offsetY);
    box.textContent = `x pos - ${event.offsetX} y pos - ${event.offsetY}`;
});


//show mouse wheel movement on console
document.addEventListener('wheel', (event) => {
    console.log(event.pageX, event.pageY);
});
 
// THERE'S MORE TYPES OF EVENTS 
*/




//########### BUILDING A POPUP ##########
/* 
const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper'); 
const close = document.querySelector('.popup-close');


button.addEventListener('click', () => {
    popup.style.display = 'block';
});

close.addEventListener('click', () => {
    popup.style.display = 'none';
});

popup.addEventListener('click', () => {
    popup.style.display = 'none';
});
*/
//########## end of popup #################




//########## BASIC FORM #################
//remember that the form itself is where you put the event listener not the submit button
/* 
const form = document.querySelector('.signup-form');
const username = document.querySelector('#username');

//remove the default action of refreshing afterm submitting

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(username.value);
})


//#### or you can use dot notation ####

const form = document.querySelector('.signup-form');

//remove the default action of refreshing afterm submitting
form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(form.username.value) //this matches ID on the HTML you can also use a NAME html attribute instead of an ID
});
*/


//############ Setting up the parameters of a form submission by using REGEX or Regular Expression ###################
/* 
const username = 'kittyboo1234';
const pattern = /[a-z]{6,}/ //lower case letters and at least 6 characters long

//test is a regex method
/*let result = pattern.test(username);

console.log(result);
//ans: true

//if this is written instead
//const pattern = /^[a-z]{6,}$/ //only alphabet on the beginning and end and then only 6 characters are allowed.

if(result){ 
    console.log('regex test passed');
} else {
    console.log('regex test failed');
}

//ans, for the username on console: regex test passed
 */

//### or you can use this method
/*
let result = username.search(pattern);
console.log(result);
//ans: 0
*/


//############ BASIC FORM VALIDATION #############

// const form = document.querySelector('.signup-form');
// const feedback = document.querySelector('.feedback');
// const usernamePattern = /^[a-z]{6,12}$/;

// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     //validation
//     const username = form.username.value;
//     const usernamePattern = /^[a-z]{6,12}$/;

//     if(usernamePattern.test(username)){
//         //feedback good info
//         feedback.textContent = 'that username is valid';
//     } else {
//         //feedback help info
//         feedback.textContent = 'username must contain letters only and be between 6 & 12 characters long';
//     }
// });

//### live feeback for keyboard events ###
//use the keyup event 

// form.username.addEventListener('keyup', event => {
//     //console.log(event.target.value, form.username.value);
//     if(usernamePattern.test(event.target.value)){
//         //console.log('pass');
//         form.username.setAttribute('class', 'success');
        
//     } else {
//         //console.log('failed');
//         form.username.setAttribute('class', 'error');
//     }
// });

//result: if true then box turns green and red if not.


// ######### FILTER METHOD ########

// const users = [
//     {name: 'yoshimitsu', premium: true},
//     {name: 'akira', premium: false},
//     {name: 'yusuke', premium: false},
//     {name: 'sakura', premium: true},
// ];

// const premiumUsers = users.filter((user) => {
//     return user.premium;
// });

// console.log(premiumUsers);
// //ans: 0: Object { name: "yoshimitsu", premium: true }
// 1: Object { name: "sakura", premium: true }
// length: 2



// ############ MAP METHOD ###############

// const prices = [20, 10, 30, 25, 15, 40, 85, 5];

// const salePrices = prices.map((price) => {
//     return price / 2;
// });

// console.log(sale.Prices);



// ### change products of price over 30 without editing the original variable/value containing the array

// const products = [
//     {name: 'gold star', price: 20},
//     {name: 'mushroom', price: 40},
//     {name: 'green shells', price: 30},
//     {name: 'banana skin', price: 10},
//     {name: 'red shells', price: 50},
// ];

// const saleProducts = products.map((product) => {
//     if(product.price > 30){
//         return {name: product.name, price: product.price / 2}
//     } else {
//         return product;
//     }
// });

// console.log(saleProducts);

//ans below: 
// 0: Object { name: "gold star", price: 20 }
// ​
// 1: Object { name: "mushroom", price: 20 }
// ​
// 2: Object { name: "green shells", price: 30 }
// ​
// 3: Object { name: "banana skin", price: 10 }
// ​
// 4: Object { name: "red shells", price: 25 }


// ############ REDUCE METHOD ###############

// const scores = [10, 20, 60, 40, 70, 90, 30];

// const result = scores.reduce((acc, curr) => {
//     if (curr > 50){
//         acc++;
//     }
//     return acc;
// }, 0);

// console.log(result);


// ############ REDUCE METHOD second example

// const scores = [
//     {player: 'mario', score: 50},
//     {player: 'yoshi', score: 30},
//     {player: 'mario', score: 70},
//     {player: 'crystal', score: 60},
// ];

// const marioTotal = scores.reduce((acc, curr) => {
//     if(curr.player === 'mario'){
//         acc += curr.score; 
//     }
//     return acc;
// }, 0);

// console.log(marioTotal);

//ans: 120


// ############ FIND METHOD ###############

// const scores = [10, 5, 0, 40, 60, 10, 20, 70];

// const firstHighScore = scores.find((score) => {
//     return score > 50;
// });

// console.log(firstHighScore);

//ans: 60


