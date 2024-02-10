/* -->Print to the user */
console.log("Hello World");
// document.write("Test");
// alert("Day 1 Test");


/*--> Simple Operations */
console.log(1+2);           //3
console.log("1"+2);         //12
console.log('1'+'2'-'1');   //11
console.log("1"+"2"-1);     //11


/*--> Variables */ 
    // let and var are used to declare variables
    // can change values
let $name = "Subodh";
console.log($name);

    // const used to declare constants
const color ='red';
console.log(color);


/* --> String */
    // Everything inside a " " is string
let $value = "123";
console.log($value);
document.getElementById("p1").innerHTML = "Welcome Home " + $value;
console.log("This is a string");
console.log('That\'s a string \n Understood');  // "\" is escape character

console.log("Welcome" + " Home");               // String concatenate




/* --> Mathmatical Operations */
let x = 8;
x = 10;
let y = 2;
console.log(x+1);       // 11
console.log(x**y);      // 10 to the power 2
console.log(x%y);       // Remainder
x++;                    // Increment
console.log(x);         // 11

    //Postfix Increment
console.log(x++);       // 11 
console.log(x);         // 12
    //Prefix Increment
console.log(++x);       // 13

/* --> Assignment operators */
let a = 10, b = 20, c = 30;
a+=b;                   // a=a+b
console.log(a);         // 30


/* --> Template Literals */
    // uses ` ` operator
    // lets us to print on new lines without /n 
let $f_name = "Subodh";
let msg = `Hey
How are you? ${$f_name}`;
console.log(msg);


    /* --> Booleans */
let isactive = true;
console.log(isactive);

    // Comparision Operators
let price = 150;
console.log(price > 120);
let xyz = 7;

console.log(xyz == 7)     //true
console.log(xyz!=8)       //true
console.log(xyz > 10)     //false
console.log(xyz < 2)      //false
console.log(xyz >= 7)     //true
console.log(xyz <= 7)     //true

    // "==" compares values whereas "===" compares datatype
let w = 5;
let z = '5';
console.log(z == w);    //true
console.log(z === w);   //false
