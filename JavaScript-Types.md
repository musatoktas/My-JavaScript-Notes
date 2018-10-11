# JavaScript Types
A type is a particular data structure.
- Each lang. defnes some built-in types.
- Built-in types can be used to build other data structures.
- JS has 7 built-in types: 6 primitive and 1 object type.

## Object Type  
Object type is a collection of name/value pairs. Look at the example below;
```
firstName: "Musa",
lastName: "Toktas",
socialMedia: {
   linkedin: "musatoktas",
   twitter: "mtoktas41"
   }
```

## Primitive Types
Primitive type represents a single, immutable value
- Single value, i.e., <u>not</u> an object
- Immutable means once it's set, it can't be changed
  * Value becomes read-only
  * You can create another value based on an existing one
  
<ol><h3><li>Boolean</li></h3>
2 values: True or False, reserved keywords.

<h3><li>Undefined</li></h3>
Signifies no value has ever been set.
<ul>
<li> Can only have one value: undefined,</li>
<li> You can set a variable to undefined, but you should NEVER do it</li>
  <ul>
   <li> meaning is that its never been defined, so defining it to undefined is counter to its core meaning.</li>
  </ul>
</ul>  

<h3><li>Null</li></h3>
Signifies lack of value.
<ul>
<li> As opposed to undefined, which is lack of definition</li>
<li> Can only one value: null</li>
<li> It's ok to explicitly set a variable to null</li>
</ul>

<h3><li>Number</li></h3>
The only numeric type in JS.
<ul>
<li> Always represented under the hood as double-precision 64-bit floating point</li>
<li> JS doesnot have an integer type</li>
<ul><li>Integers are subset of doubles instead of a seperate data type</li></ul>
</ul>

<h3><li>String</li></h3>
Sequence of characters used to represent text
<ul><li>Using single or double quots are allowed, i.e., 'text' or "text"</li></ul>

<h3><li>Symbol</li></h3>
New to ES6
<ul><li>EcmoScript6(released 2015) isnt widely supported or used yet</li></ul>
