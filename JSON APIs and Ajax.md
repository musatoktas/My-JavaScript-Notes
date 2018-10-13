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
