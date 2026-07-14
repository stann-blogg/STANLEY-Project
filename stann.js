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
// const title = "Best class of 2019-BARANI";
// const author = "Stanley Dzombo";
// const likes = 30;
// // console.log(` The ${title} by ${author} has ${likes} likes`);

// // creating html templates
// const html = `
// <h1>${title}</h1>
// <p>By ${author}</p>
// <span>This blog has ${likes} likes</span>

// `;
// console.log(html);

//arrays
//we use square brackets to create an array. we can store any data type in an array. we can also store arrays in an array.
// let siblings = ["Stanley", "Simon", "Nessy"];
// console.log(siblings[1].replaceAll('n', 'a')); //SIMON

// let ages = [20, 25, 30, 35];
// console.log(ages[2] + 5); //35

// //arrays can also store different data types in one array. we can also store arrays in an array.
// //"true" is a boolean value. it can be either true or false. it is used to represent the truth value of a statement.
// let random = ["Stanley", 25, true];
// console.log(random[0]); //Stanley

// let random2 = ["Stanley", 25, true, [1, 2, 3]]; 
// console.log(random2[3][0]); //1

//ovewriting values in an array. we can overwrite values in an array by using the index of the value we want to overwrite.
// siblings[0] = "Stanley Dzombo";
// console.log(siblings[0]); //Stanley Dzombo

// //array methods
// let colors = ["red", "blue", "green"];
// console.log(colors.length); //3
// console.log(colors[colors.length - 1]); //green

// //array methods
// let fruits = ["apple", "banana", "orange"];
// fruits.push("grape"); //adds to the end
// console.log(fruits); //["apple", "banana", "orange", "grape"]

// fruits.pop(); //removes from the end
// console.log(fruits); //["apple", "banana", "orange"]

// fruits.shift(); //removes from the beginning
// console.log(fruits); //["banana", "orange"]

// fruits.unshift("kiwi"); //adds to the beginning
// console.log(fruits); //["kiwi", "banana", "orange"]

//boolean values
//boolean values are either true or false. they are used to represent the truth value of a statement. we can use comparison operators to compare values and return a boolean value. we can also use logical operators to combine boolean values and return a boolean value.
//  let age = 25;
// console.log(age == 25);

// let name = "Stanley";
// console.log(name == "Stanley");
// console.log(true, false); //true false
// console.log("true", "false"); //true false

// //methods can return boolean values. for example, the includes() method returns a boolean value. it returns true if the value is found in the array and false if the value is not found in the array.
// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers.includes(6)); //false

// let names = ["Stanley", "Simon", "Nessy"];
// console.log(names.includes("Stanley")); //true
// console.log(names.includes("stanley")); //false
// console.log(names.includes("Stanley", 0)); //true

//comparison operators
//comparison operators are used to compare values and return a boolean value. they are used in conditional statements to control the flow of the program. they can also be used in loops to control the flow of the loop. they can also be used in functions to control the flow of the function. they can also be used in classes to control the flow of the class. they can also be used in objects to control the flow of the object. they can also be used in arrays to control the flow of the array. they can also be used in strings to control the flow of the string. they can also be used in numbers to control the flow of the number. they can also be used in booleans to control the flow of the boolean.
 
// let age = 25;
// console.log(age == 25); //true
// console.log(age != 25);

// let namess = "Stanno";
// console.log(namess == "Stanno"); //true
// console.log(namess != "Stanno"); //false    
// console.log(namess > "mwangyy"); //false

// //strict comparison (different data types can be equal with == but not with ===)
// let score = 100;
// console.log(score == 100); // true (type coercion)
// console.log(score === 100); // false (no type coercion) 

// //type conversion
// //type conversion is the process of converting a value from one data type to another. we can use the Number() function to convert a string to a number. we can use the String() function to convert a number to a string. we can use the Boolean() function to convert a value to a boolean. we can use the parseInt() function to convert a string to an integer. we can use the parseFloat() function to convert a string to a float. we can use the toString() method to convert a number to a string. we can use the toFixed() method to convert a number to a string with a fixed number of decimal places.    
//  let score2 = "100";
// console.log(typeof score2);
// console.log(typeof Number(score2));
// score2 = Number(score2);
// console.log(typeof score2);
// console.log(score2 + 1); //101      
// console.log(typeof String(score2));

// control flow
// control flow statements are used to control the execution of a program. they allow us to make decisions and repeat actions based on certain conditions. the main control flow statements in JavaScript are if statements, else statements, else if statements, switch statements, for loops, while loops, and do-while loops.

let age = 45;
if(age < 30){
    console.log("you are under 30 years old");
}
    else{
        console.log("you are over 30 years old");
    }


    let score = 20;
    if(score === 100){
        console.log("you got the top score");
    }
    // else if(score = 50){
    //     console.log("you got the average score");
    // }
    // else if(score >= 80){
    //     console.log("you got a good score");
    // }
    else if(score <=30){
        console.log("you failed the test");
    }

    for(let i = 0; i < 5; i++){
        console.log("position", i);
    }