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