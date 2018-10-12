// var x;
// console.log(x);

// if (x == undefined) {
//   console.log("x is undefined");
// }

// x = 5;
// if (x == undefined) {
//   console.log("x is undefined");
// }
// else {
//   console.log("x has been defined");
// }

// var string = "Hello";
// string += " World";
// console.log(string + "!")

// console.log((5 + 4) / 3);
// console.log(undefined / 5);
// function test1 (a) {
//   console.log( a / 5);
// }
// test1();
// leccture 40
// // ** Equality - Without Type Conflict
// var x = "4", y = 5;
// if (x == y){
//   console.log("x=4 is equal to y=4")
// }

// // ** Strict Equality - Types are equal.
// if (x === y){
//   console.log("Strict: x='4' is equal to y=4");
// }
// else {
//   console.log("Strict: x='4' is not equal to y=4");
// }
// Lecture 41 Defining Variables, Function
// var message = "in global";
// console.log("global: message = " + message);

// var a = function(){
//   var message = "inside a";
//   console.log("a: message = " + message);
//   function b(){
//   console.log("b: message = " + message);
//   }
//   b();
// }


// a();
// Lecture 42 Part2
// if ( false || null || undefined || "" || 0 || NaN) {
//   console.log("This line won't ever execute");
// }
// else{
//   console.log("All false");
// }

// if (true && "hello" && 1 && -1 && "false"){
//   console.log("All true");
// }

// Best Practice for curly braces

// function a() //donot choose because js read immeadiate after return so it returns undefined.
// {
//   return
//   {
//     name: "Musa";
//   };
// }

// function b(){
//   return{
//     name: "Toktas"
//   };
// }
// console.log(a());
// console.log(b());

//For Loop 
// var sum = 0;
// for (var i = 0; i < 10; i++) {
//   console.log(sum);
//   sum = sum +i;
// }
// console.log("sum of 0 through 9 is: " + sum);

//Lecture 44 Handling Default Values
// function orderChickenWith(sideDish){
//   // if (sideDish === undefined){
//   //   sideDish = "whatever!";
//   // }
//   sideDish = sideDish || "whatever!";
//   console.log("Chicken with " + sideDish);
// }

// orderChickenWith("noodles");
// orderChickenWith();

// leture 45 object Creation
// var company = new Object();
// company.name = "Facebook";
// company.ceo = new Object()
// company.ceo.firstName = "Mark";
// company.ceo.favColor = "blue";

// console.log(company);
// console.log("Company Ceo name is: " 
//             + company.ceo.firstName);

// console.log(company["name"]);
// var stockPropName = "stock of company";
// company[stockPropName] = 110;

// console.log(company);
// Creating Object Using Object Literal Syntax

// Better way: Object literal

// var facebook = {
//   name: "facebook",
//   ceo: {
//    firstName: "Mark",
//     favColor: "blue"
//   },
//   "stock of company": 110
// };

// console.log(facebook.ceo.firstName);
// there are two ways to create an object 1 new object() the other one is objct literal which is => var objectname ={}

// lecture 46: Object

// function multiply(x, y) {
//   return x * y;
// }

// console.log(multiply(5, 3));
// multiply.version = "v.1.0.0";
// console.log(multiply.version);

//function factory
// function makeMultiplier(multiplier) {
//   var myFunc = function (x) {
//     return multiplier * x;
//   };
//   return myFunc;
// };
// var multiplyBy3 = makeMultiplier(3);
// console.log(multiplyBy3(10));

// // Passing functions as arguments
// function doOperationOn(x, operation){
//   return operation(x);
// }

// var result = doOperationOn(5, multiplyBy3);
// console.log(result)

// // Pass by Reference => Object Type
// var a = {x: 8};
// var b = a;
// b.x = 4;
// console.log(b);
// console.log(a);

// //Pass by Value => Primitive Types
// var l = 2;
// var k = l;
// k = k*3;
// console.log(k);
// console.log(l);


// // Lecture 47 Passing Variables by Value vs. by reference
// var a = 7;
// var b = a;
// console.log("a: " + a);
// console.log("b: " + b);

// b = 5;
// console.log("after b update:");
// console.log("a: " + a);
// console.log("b: " + b);

// Object Literal
// var a= {x: 8};
// var b= a;
// console.log(a);
// console.log(b);

// b.x = 3;
// console.log(" afterb.x update: ");
// console.log(a);
// console.log(b);

// lecture 48: function constructors, prototype, and the 'this' keyword
// function test(){
//   console.log(this);
//   this.myName = "Musa";
// }
// test();

// lecture 49 'this' keyword usage
// var siemens = {
// 	type: "Company",
// 	locationTurkey: "Gebze",
// 	age: 120,
// 	plantNumber: 2,
// 	workerNumber: 3421
// }
// console.log(siemens);

// function test() {
// 	console.log(this);
// 	this.myName = "Musa";
// }
// test();
// console.log(window.myName);

// function Circle (radius) {
// 	this.radius = radius;

// 	this.getArea = 
// 		function () {
// 			return Math.PI * Math.pow(this.radius, 2);
// 		};
// }

// var myCircle = new Circle(10);
// console.log(myCircle);



