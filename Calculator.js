const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true})); // urlencoded: pass data that comes from a html form. extended true: allows us to post nested objects.

app.get("/", function(req, res){
   res.sendFile(__dirname + "/index.html"); // sendFile transfers the file over to the file when a request is made.
// // __dirname gives the file path of the current file no matter where it is hosted
 });

 app.post("/", function(req, res){
 console.log(req.body);
 console.log(req.body.num1);
 var num1 = Number(req.body.num1); // parsed as text, so we need to turn it into a number.
 var num2 = Number(req.body.num2);
 var result = num1 + num2;
    
   res.send("The result of the calculation is " + result);
 })

const port = process.env.port || 3000;
app.listen(port, function() {
  console.log("Server is running on port" +port);
});