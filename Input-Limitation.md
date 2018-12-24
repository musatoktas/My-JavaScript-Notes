## Limit input type number char length

```
<input name="somename"
    oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
    type = "number"
    maxlength = "6"
 />
 ```
