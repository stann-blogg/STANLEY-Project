// // 
// strings

// console.log("good morning stanley")
// let email = "stanleydzombo10@gmail.com"
// console.log(email);

// let firstName = "Stanley"
// let lastName = "Dzombo"
// let fullName = firstName + " " + lastName
// console.log(fullName);
// console.log(fullName [0]);
// console.log(fullName.length);

// // string methods
// console.log(fullName.toUpperCase());
// let result = fullName.toLowerCase();
// console.log(result);


// // arguments
// console.log(fullName.indexOf("D")); 

// // common string methods
// let index = email.lastIndexOf("a");
// console.log(index);

// let email = "stanleydz0mb010@gmail.com";
// console.log(email.slice(0, 15));

// making a sybstring

// let email = "stanleydz0mb010@gmail.com";
// let result = email.replace("stanleydz0mb010", "stanley");
// console.log(result);

// let email = "stanleydz0mb010@gmail.com";
// let result = email.substring(5, 10);
// console.log(result);

// numbers
// let radius = 10;
// const pi = 3.14;
// 
// math operators +, -, *, /, **, %

// 
// 
// let result = pi * radius**2;
// console.log(result); 

// // order of operations - B I D M A S

// let result2 = 5 * (10 - 3)**2;
// console.log(result2);

// // let likes = 10;
// // likes++;
// // console.log(likes);

// let likes = 10;
// likes += 10;
// likes -= 5;
// likes *= 2;
// likes /= 2; 
// likes %= 3;

// NaN means not a number. It is a value that is not a legal number.

// console.log(likes);
// console.log(4 / "hello"); // NaN
// let result3 = "the blog has " + likes + " likes";
// console.log(result3);
// templatte strings

 //concatenation way
// const title = "Best class of 2019-BARANI";
// const author = "Stanley Dzombo";
// const likes = 30;
// console.log(" The " + title + " by " + author + " has " + likes + " likes");

//template string way. we dont use quotes but backticks and we use ${} to insert variables into the string.
const title = "Best class of 2019-BARANI";
const author = "Stanley Dzombo";
const likes = 30;
// console.log(` The ${title} by ${author} has ${likes} likes`);

// creating html templates
const html = `
<h1>${title}</h1>
<p>By ${author}</p>
<span>This blog has ${likes} likes</span>

`;
console.log(html);

//arrays
//we use square brackets to create an array. we can store any data type in an array. we can also store arrays in an array.
let siblings = ["Stanley", "Simon", "Nessy"];
console.log(siblings[1].replaceAll('n', 'a')); //SIMON

let ages = [20, 25, 30, 35];
console.log(ages[2] + 5); //35

//arrays can also store different data types in one array. we can also store arrays in an array.
//"true" is a boolean value. it can be either true or false. it is used to represent the truth value of a statement.
let random = ["Stanley", 25, true];
console.log(random[0]); //Stanley

let random2 = ["Stanley", 25, true, [1, 2, 3]]; 
console.log(random2[3][0]); //1

//ovewriting values in an array. we can overwrite values in an array by using the index of the value we want to overwrite.
siblings[0] = "Stanley Dzombo";
console.log(siblings[0]); //Stanley Dzombo

//array methods
let colors = ["red", "blue", "green"];
console.log(colors.length); //3
console.log(colors[colors.length - 1]); //green

//array methods
let fruits = ["apple", "banana", "orange"];
fruits.push("grape"); //adds to the end
console.log(fruits); //["apple", "banana", "orange", "grape"]

fruits.pop(); //removes from the end
console.log(fruits); //["apple", "banana", "orange"]

fruits.shift(); //removes from the beginning
console.log(fruits); //["banana", "orange"]

fruits.unshift("kiwi"); //adds to the beginning
console.log(fruits); //["kiwi", "banana", "orange"]
