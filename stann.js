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
// console.log(` The ${title} by ${author} has ${likes} likes`);

// // // creating html templates
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

// let age = 45;
// if(age < 30){
//     console.log("you are under 30 years old");
// }
//     else{
//         console.log("you are over 30 years old");
//     }


//     let score = 20;
//     if(score === 100){
//         console.log("you got the top score");
    // }
    // else if(score = 50){
    //     console.log("you got the average score");
    // }
    // else if(score >= 80){
    //     console.log("you got a good score");
    // }
    // else if(score <=30){
    //     console.log("you failed the test");
    // }

    // for(let i = 0; i < 5; i++){
    //     console.log("position", i);
    // }

    // const names = ["Stanley", "Simon", "Nessy"];
    // for(let i = 0; i < names.length; i++){
    //     console.log(names[i]);
    // }

    //while loops
   //while loops are used to repeat a block of code as long as a specified condition is true. the syntax for a while loop is:
//    while(condition){
//        // code block to be executed
//    }  
   //example:
//    let i = 0;   
//     while(i < 5){
//         console.log("position", i);
//         i++;
// //     }


//     let names = ["Stanley", "Simon", "Nessy"];
//     let i = 0;
//     while(i < names.length){
//         console.log(names[i]);
//         i++;
//     }
//     //do while loops are similar to while loops, but the code block is executed at least once before the condition is checked. the syntax for a do while loop is:

//     let r = 0;
//     do{
//         console.log("position", r);
//         r++;
//     }while(r < 5);

//     // if statements can also be used to control the flow of a program. they allow us to make decisions based on certain conditions. the syntax for an if statement is:
//     // if(condition){
//     //     // code block to be executed if the condition is true
//     // }else{
//     //     // code block to be executed if the condition is false
//     // }

//     let number = 4;
//     if(number > 7){
//         console.log("the number is great");
//     }
//     else if(number === 5){
//         console.log("the number is average ");
//     }
//     else{
//         console.log("the number is small");
// } const password = "stanley1234567@";
// if(password.length >= 12 && password.includes("@")){
//     console.log("the password is strong");
// }
// else if(password.length >= 8 || password.includes("@") && password.length >= 5){
//     console.log("the password is medium");
// }       
// else{
//     console.log("the password is weak");
// }

// //logic operators are used to combine multiple conditions and return a boolean value. the main logic operators in JavaScript are && (and), || (or), and ! (not). the && operator returns true if both conditions are true, the || operator returns true if at least one condition is true, and the ! operator returns the opposite boolean value of a condition.
 
// const password2 = "stanley1234567@";
// if(password2.length >= 12 && password2.includes("@")){
//     console.log("the password is strong");
// }
// else if(password2.length >= 8 || password2.includes("@") && password2.length >= 5){
//     console.log("the password is medium");
// }
// // logic not operator is used to reverse the boolean value of a condition. for example, if a condition is true, the ! operator will return false, and if a condition is false, the ! operator will return true. the syntax for the ! operator is:
// // if(!condition){
// //     // code block to be executed if the condition is false
// // }
//  let user = false;
//  if(!user){
//     console.log("you must be logged in to continue");
//  }
//  //break and continue
//   let scores = [50, 25, 0, 30, 100, 20, 10];
//   for(let i = 0; i < scores.length; i++){
//     if(scores[i] === 0){
//       continue;
//     }
//     console.log(scores[i]);
//   }

  let scores2 = [50, 25, 0, 30, 100, 20, 10];
  for(let i = 0; i < scores2.length; i++){
    if(scores2[i] === 100){
      break;
    }
    console.log(scores2[i]);
  }
 const names2 = ["Stanley", "Simon", "Nessy"];
//  for(let i = 0; i < names2.length; i++){
//     console.log(names2[i]);
//  }
 let i = 0;
 while(i < names2.length){
    console.log(names2[i]);
    i++;
 }  
 let i2 = 0;
 do{
    console.log(names2[i2]);
    i2++;
 }while(i2 < names2.length);

 const password3 = "stanley1234567@";
if(password3.length >= 12 && password3.includes("@")){
    console.log("the password is strong");      
}
// switch statements are used to perform different actions based on different conditions. the syntax for a switch statement is:
// switch(expression){
//     case value1:
//         // code block to be executed if expression === value1
//         break;+
//     case value2:
//         // code block to be executed if expression === value2
//         break;
//     default:
//         // code block to be executed if expression doesn't match any case
// }       
// if grade is A, print "Excellent"
// if grade is B, print "Good"
// if grade is C, print "Average"
// if grade is D, print "Poor"
// if grade is F, print "Fail" 

const grade = "A";

if(grade === "A"){
    console.log("Excellent");
}   
else if(grade === "B"){
    console.log("Good");
}
else if(grade === "C"){
    console.log("Average");
}
else if(grade === "D"){
    console.log("Poor");
}
else if(grade === "F"){
    console.log("Fail");
}   

const grade2 = "B";
switch(grade2){
    case "A":
        console.log("Excellent");       
        break;
    case "B":
        console.log("Good");        
        break;
    case "C":
        console.log("Average");
        break;
    case "D":
        console.log("Poor");
        break;
    case "F":
        console.log("Fail");
        break;
    default:
        console.log("Invalid grade");
}

const grade3 = "C";
switch(grade3){
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Good");
        break;
    case "C":
        console.log("Average");
        break;
    case "D":
        console.log("Poor");
        break;
    case "F":
        console.log("Fail");
        break;
    default:
        console.log("Invalid grade");
}

let grade4 = "D";
switch(grade4){
    case "A":  
        console.log("Excellent");
        break;
    case "B":
        console.log("Good");
        break;
    case "C":
        console.log("Average");
        break;
    case "D":
        console.log("Poor");
        break;
    case "F":
        console.log("Fail");
        break;
    default:
        console.log("Invalid grade");
}
//block scope and function scope
//block scope is the scope of a variable that is defined within a block of code. a block of code is defined by curly braces {}. a variable that is defined within a block of code is only accessible within that block of code. a variable that is defined outside of a block of code is accessible within that block of code. a variable that is defined within a function is only accessible within that function. a variable that is defined outside of a function is accessible within that function. a variable that is defined within a function is not accessible outside of that function. a variable that is defined outside of a function is not accessible within that function. a variable that is defined within a function is not accessible within another function. a variable that is defined outside of a function is not accessible within another function.     
 let age3 = 30;
if(true){
    let age3 = 40;
    console.log("inside block:", age3); //40
}
if(true){
    let age3 = 50;
    console.log("inside block:", age3); //50
}
if(true){
    let age3 = 60;
    console.log("inside block:", age3); //60
}
if(true){
    let age3 = 70;
    console.log("inside block:", age3); //70
}   
const name3 = "Stanley";
if(true){
    const name3 = "Simon";
    console.log("inside block:", name3); //Simon
}
if(true){
    const name3 = "Nessy";
    console.log("inside block:", name3); //Nessy
}
const name4 = "Stanley";
if(true){
    const name4 = "Simon";
    console.log("inside block:", name4); //Simon
}   if(true){
    const name4 = "Nessy";
    console.log("inside block:", name4); //Nessy
}
let age4 = 30;
if(true){
    let age4 = 40;
    console.log("inside block:", age4); //40
}
const name5 = "Stanley";
if(true){
    const name5 = "Simon";
    console.log("inside block:", name5); //Simon
}
//control flows?
// for loops are used to repeat a block of code a certain number of times. the syntax for a for loop is:
// for(initialization; condition; increment/decrement){
//     // code block to be executed
// }           
for(let i = 0; i < 5; i++){
    console.log("position", i);
}
const names3 = ["Stanley", "Simon", "Nessy"];
for(let i = 0; i < names3.length; i++){
    // console.log(names3[i]);
    let html2 = `<div>${names3[i]}</div>`;
    console.log(html2);
}
// functions
// functions are used to group a block of code that can be reused multiple times. the syntax for a function is:
// function functionName(parameters){
//     // code block to be executed

function greet(){
    console.log("hello there");
    }

    greet(); //hello there

    // functions can also take parameters. parameters are values that are passed into a function when it is called. the syntax for a function with parameters is:
    //function declaration
    
    function greet2(name){
        console.log("hello " + name);
    }
    greet2("Alice"); //hello Alice

    //function expression
    const greet3 = function(name){
        console.log("hello " + name);
    };
    greet3("Bob"); //hello Bob

    // passing arguments into functions. we can pass multiple arguments into a function. the syntax for a function with multiple arguments is:
    function greet4(name, age){
        console.log("hello " + name + ", you are " + age + " years old");
    }
    greet4("Charlie", 25); //hello Charlie, you are 25 years old    

    const greet5 = function(name = "stanley", age = 25){
        console.log("hello " + name + ", you are " + age + " years old");
    };
    greet5(); //hello David, you are 30 years old
    greet5("Eve", 35); //hello Eve, you are 35 years old