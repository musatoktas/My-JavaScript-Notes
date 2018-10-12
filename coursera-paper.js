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
