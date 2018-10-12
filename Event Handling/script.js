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
document.querySelector("button")
	.addEventListener("click", sayHello);
