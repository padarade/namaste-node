const fs = require("fs");
const https = require("https");

https.get("https://dummyjson.com/products/1", (res) => {
  console.log("Fetched Data Successfully");
});

setTimeout(() => {
  console.log("setTimeout after 5 seconds");
}, 5000);

fs.readFile('./file.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });

var a =100
var b = 100
  function multiply(a,b){
    const result = a*b
    return result
  }

  var c = multiply(a,b)
  console.log(c)