# Document Object Model
Note: create an Html file and link this js file before usage
```
// DOM Manipulation
// console.log(document.getElementById("title"));

// console.log(document instanceof HTMLDocument);
function sayHello () {
	var name =
	document.getElementById("name").value;
	var message = "<h1>Hello " + name + "!</h1>";

	// document
	// 	.getElementById("content")
	// 	.textContent = message;
	document
	 	.getElementById("content")
	 	.innerHTML = message;

	 	if (name === "Student"){
	 		var title =
	 			document
	 			.querySelector("#title")
	 			.textContent;
	 		title += " & Lovin it!"; 
	 		var title =
	 			document
	 			.querySelector("#title")
	 			.textContent = title; 
	 	}
}
```
