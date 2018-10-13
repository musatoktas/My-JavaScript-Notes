# JSON APIs and Ajax
You want your code to execute only once your page has finished loading. For that purpose,</br>
you can attach a JavaScript event to the document called DOMContentLoaded. Here's the code that does this:
```
<script>
document.addEventListener('DOMContentLoaded',function() {

});
</script>
```
You can implement event handlers that go inside of the DOMContentLoaded function. You can implement an onclick event</br>
handler which triggers when the user clicks on the element with id getMessage, by adding the following code:
```
<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('getMessage').onclick=function(){};
  });
</script>
```
## Change Text with click Events
When the click event happens, you can use JavaScript to update an HTML element.

For example, when a user clicks the "Get Message" button, it changes the text of the element with the class message</br> 
to say "Here is the message".

This works by adding the following code within the click event:
```
<script>
  document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('getMessage').onclick=function(){  
      document.getElementsByClassName('message')[0].textContent="Here is the message";
    };
  }):
</script>  
```
## Get JSON with the JavaScript XMLHttpRequest Method
You can also request data from an external source. This is where APIs come into play.</br>

Remember that APIs - or Application Programming Interfaces - are tools that computers use to communicate with one another.</br>

You'll learn how to update HTML with the data we get from APIs using a technology called AJAX.</br>

Most web APIs transfer data in a format called JSON. JSON stands for JavaScript Object Notation.</br>

JSON syntax looks very similar to JavaScript object literal notation. JSON has object properties and their current values, sandwiched between a { and a }.</br>

These properties and their values are often referred to as "key-value pairs".</br>

However, JSON transmitted by APIs are sent as bytes, and your application receives it as a string. These can be converted into JavaScript objects, but they are not JavaScript objects by default. The JSON.parse method parses the string and constructs the JavaScript object described by it.</br>

You can request the JSON from freeCodeCamp's Cat Photo API. Here's the code you can put in your click event to do this:
```
req = new XMLHttpRequest();
req.open("GET", '/json/cats.json', true);
req.send();
req.onload=function(){
 json=JSON.parse(req.responseText);
 document.getElementsByClassName('message')[0].innerHTML=JSON.stringify(json);
};
```
Here's a review of what each piece is doing. The JavaScript XMLHttpRequest object has a number of properties and methods that are used to transfer data. First, an instance of the XMLHttpRequest object is created and saved in the req variable.

Next, the open method initializes a request - this example is requesting data from an API, therefore is a "GET" request. The second argument for open is the URL of the API you are requesting data from. The third argument is a Boolean value where true makes it an asynchronous request.

The send method sends the request. Finally, the onload event handler parses the returned data and applies the JSON.stringify method to convert the JavaScript object into a string. This string is then inserted as the message text.

## Access the JSON Data from an API
In the previous challenge, you saw how to get JSON data from the freeCodeCamp Cat Photo API.

Now you'll take a closer look at the returned data to better understand the JSON format. Recall some notation in JavaScript:

-  [] -> Square brackets represent an array
* { } -> Curly brackets represent an object
* " " -> Double quotes represent a string. They are also used for key names in JSON
Understanding the structure of the data that an API returns is important because it influences how you retrieve the values you need.

On the right, click the "Get Message" button to load the freeCodeCamp Cat Photo API JSON into the HTML.>/br>

The first and last character you see in the JSON data are square brackets [ ]. This means that the returned data is an array. The second character in the JSON data is a curly { bracket, which starts an object. Looking closely, you can see that there are three separate objects. The JSON data is an array of three objects, where each object contains information about a cat photo.

You learned earlier that objects contain "key-value pairs" that are separated by commas. In the Cat Photo example, the first object has "id":0 where "id" is a key and 0 is its corresponding value. Similarly, there are keys for "imageLink", "altText", and "codeNames". Each cat photo object has these same keys, but with different values.

Another interesting "key-value pair" in the first object is "codeNames":["Juggernaut","Mrs. Wallace","ButterCup"]. Here "codeNames" is the key and its value is an array of three strings. It's possible to have arrays of objects as well as a key with an array as a value.

Remember how to access data in arrays and objects. Arrays use bracket notation to access a specific index of an item. Objects use either bracket or dot notation to access the value of a given property. Here's an example that prints the "altText" of the first cat photo - note that the parsed JSON data in the editor is saved in a variable called json:
```
console.log(json[2].codeNames[1]);
// For the cat with the "id" of 2, print to the console the second value in the codeNames array.
```
## Convert JSON Data to HTML
It's not easy to understand it that if you not familiar with programming mindset like me. I spend almost one hour to comprehend thiis subject. So, let me explain whats gonna happen. We have get data from the server using "GET" method through XMLHttpResquest, and now we shall turn it comprehensible data, for the user. For this we have to manipulate it. We  know that JSON format consists, the chain of key-value pairs. In this section we will make bold the keys in the each array values, and when the line or key-value finishes, we want to pass new line with <br> element. We use for Loop to achieve this. Ive put my code below, think about it and eventually you will understand what I mean.
```
var html = "";
json.forEach(function(val){
  var keys = Object.keys(val);
  html += "<div class='cats'>";
  keys.forEach(function(key){
    html += "<strong>" + key + "</strong>" + val[key] + "<br>";
  });
  html += "</div><br>";
});
```
## Post Data with the JavaScript XMLHttpRequest Method

```
req = new XMLHttpRequest();
req.open("POST", url, true);
req.setRequestHeader('Content-Type', 'text/plain');
req.onreadystatechange=function(
  if(req.readystate == 4 && req.status == 200){
    document.getElementsByClassName("message")[0].innerHTML=req.responseText;
    });
req.send(userName);
```








