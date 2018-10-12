# JavaScript Types

<code>var message = "hi"</code></br>
- Variables always start with var
```
function a () {..}
var a= function () {..}
a();
funtion compare (x, y) {
  return x > y;
}
funtion compare () {..}
var a = compare(4, 5);
compare(4, "a");
compare();

```
### Global
- Variables and functions defined here are available verywhere
### Function Scope exist
- Variables and functions defined here are available only within this function

Referenced (not defined) variable will be searched for in its current scope first. If not found, the outer Reference will be searched/ If not found,
the outer reference's outer reference will be searched, etc. This will keep going until the Global scope. If not found in global scope, the variable
is undefined.


