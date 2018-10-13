# Jquery Code Samples
It must be located at the top of the page, just below the ```<head>```  tag.</br>

All samples gained from freecodecamp's jQuery tutorial. here is the <a href="https://learn.freecodecamp.org/front-end-libraries/jquery/">link</a>. I definetly recommend FreeCodeCamp. There are tons of different tut's both related back-en and front-end.
```
<script>
  $(document).ready(function() {                // work after all page installed
    $("button").addClass("animated bounce");    // add css class "animated" and "bounce" to "button" type element
    $(".well").addClass("animated shake");      // add css class "animated" and "shake" to the elements which have ".well" class
    $("#target3").addClass("animated fadeOut"); // add css class "animated" and "fadeOut" to the elements which are have "#target3"
  });
</script>

<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");
    $("#target3").addClass("animated fadeOut");
    $("button").removeClass("btn-default");    // removed selected class
    $("#target1").css("color", "red");         // edit css ".color" class' "red" color.
  });
</script>
```
## .prop( ) function
You can change the non-CSS properties of HTML elements with jQuery. For example, you can disable buttons.</br>

When you disable a button, it will become grayed-out and can no longer be clicked.</br>

jQuery has a function called .prop() that allows you to adjust the properties of elements.</br>
```
<script>
  $(document).ready(function() {
    $("#target1").prop("disabled", true);
  });
</script>
```
## .html( ) and .text( ) function
Using jQuery, you can change the text between the start and end tags of an element. You can even change HTML markup.</br>

jQuery has a function called .html() that lets you add HTML tags and text within an element.</br>

Any content previously within the element will be completely replaced with the content you provide using this function.
```
<script>
  $(document).ready(function() {
    $("#target4").html("<em>#target4</em>"); // change html in the element that has an id o "#target4"
  });
</script>
```
jQuery also has a similar function called .text() that only alters text without adding tags.</br>

In other words, this function will not evaluate any HTML tags passed to it, but will instead treat it as the text you want to replace the existing content with.
```
<script>
  $(document).ready(function (){
    $("#target4").text("use this code instead of everything; <html></html") // it will write, exactly the same thing int he quotes even the " <html></html> part
  });
</script>  
```
## Removing the elements
Let's remove an HTML element from your page using jQuery.</br>

jQuery has a function called .remove() that will remove an HTML element entirely
```
<script>
  $(document).ready(function (){
    $("#target4").remove(); // removes element that has "#target4" id.
  });
</script>

<script>
  $(document).ready(function(){
    $("div").remove(".but-primary"); remove elements in divs that have ".but-primary" class
  });
</script>  
```
## .appendTo( ) function
jQuery has a function called appendTo() that allows you to select HTML elements and append them to another element.
```
<script>
  $(document).ready(function() {
    $("#target2").appendTo("#right-well"); // "#target2" element append to "#right-well" id'ed div. 
  });
</script>
```
## .clone( ) function and function chaining
jQuery has a function called clone() that makes a copy of an element.</br>
```
<script>
  $(document).ready(function() {
    $("#target5").clone().appendTo("#left-well"); //Clone your target5 element and append it to your left-well.
  });
</script>
```
Did you notice this involves sticking two jQuery functions together? This is called function chaining and it's a convenient way to get things done with jQuery.

## .parent( ) function
Every HTML element has a parent element from which it inherits properties.</br>

For example, your jQuery Playground h3 element has the parent element of <div class="container-fluid">, which itself has the parent body.</br>

jQuery has a function called parent() that allows you to access the parent of whichever element you've selected.</br>
```
<script>
  $(document).ready(function() {
    $("#target1").parent().css("background-color", "red"); //Give the parent of the #target1 element a background-color of red.
  });
</script>
```











