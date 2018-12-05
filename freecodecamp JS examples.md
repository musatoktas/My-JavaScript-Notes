# Array Manipulation

Alter new array items to the existing array.


```
var array = ["sdfa",11];
array.push(["asd",23]);
```

Split last element of an array


```
var array2 = [3,4,2,"sfsa"];
var lastItemOfArr = array2.pop();
//array2 will become [3,4,2]
```

Split first element of an array


```
var lostFirstElemnt= array2.shift();
//removes first element of an array

```

Insert an element to the first place of an array

```
myArray.unshift(["Paul",35]);
```

# Functions
Basic Function Declaration
```
function myFunction(){
    console.log("Output on your Console!"); // sample order
}

myFunction();// Call the function
```
> Note: There is an important thing exist that you must keep in mind while defining the functions that; there are two different tyoes variables declarations depends on where to declare them. Please checkout "Global & Local Scopes"

Sample Multiplier Function
```
function multiplySeven(param1){
    return param1 * 7;
}

muliplySeven(4);
```

# Condition Operators

### Inequality Operator
Inequality operator (!=) 
```
1 != 2 // true
1 != "1" // false
1 != '1' // false
1 != true // false
0 != false // false
```
### Strick Inequality Operators
Types are different but values are the same..
```
3 !== 3 // false
3 !== '3' // true
4 !== 3 // true
```
### Logical Operators
|| means *or*
&& means *and*

### Chaining If-Else Elements
if/else statements can be chained together for complex logic. Here is pseudocode of multiple chained if / else if statements:
```
if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else if (condition3) {
  statement3
. . .
} else {
  statementN
}
```

### Switch-Case with Default
Switch case operation with default option pseudocode;
```
switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  default:
    defaultStatement;
    break;
}
```

# Object Manipulation
### Access Object with Dot Notation
```
var myDog{
  name: "Dunki",
  age: 13,
  color: "black",
}

var dogName = mydog.name; \\ dogName set "Dunki"
```
### Access Object with Brackets

```
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};


var entreeValue = testObj["an entree"];   
var drinkValue = testObj["the drink"];
```

### Update Object
```
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
}; 

testObj["an entree"] = "iskender"; \\ entree value updated hamburger to iskender (great food google it!)
```

### Insert New Property to the Object
```
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};


myDog["bark"] = "woof"; \\Alter new property named bark 
```

### Delete Property

```
delete myDog.name;
```
### Testing Property Existence
```
var myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top"); // true
myObj.hasOwnProperty("middle"); // false
```

# <strong>Assignment:</strong> Testing Objects for Properties
### Description
Sometimes it is useful to check if the property of a given object exists or not. We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name. .hasOwnProperty() returns true or false if the property is found or not.

Example

var myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top"); // true
myObj.hasOwnProperty("middle"); // false

Modify the function checkObj to test myObj for checkProp. If the property is found, return that property's value. If not, return "Not Found".
### My Code
```
// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};
var result = ""; 

function checkObj(checkProp) {
  
  if (myObj.hasOwnProperty(checkProp)){
  result = myObj[checkProp];
  
  return result;
  }
  else{
    return "Not Found";
  }
}

// Testing the code by modifying these values
checkObj("gift");
```
### Access Nested Objects
The sub-properties of objects can be accessed by chaining together the dot or bracket notation.

Here is a nested object:
```
var ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};
ourStorage.cabinet["top drawer"].folder2; // "secrets"
ourStorage.desk.drawer; // "stapler"
```
### Access Nested Arrays
As we have seen in earlier examples, objects can contain both nested objects and nested arrays. Similar to accessing nested objects, Array bracket notation can be chained to access nested arrays.

Here is an example of how to access a nested array:
```
var ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];
ourPets[0].names[1]; // "Fluffy"
ourPets[1].names[0]; // "Spot"
```
Retrieve the second tree from the variable myPlants using object dot and array bracket notation.