const express= require("express");
const bodyParser= require ("body-parser");
const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(request, response) {
	response.send("<h1>heyyyaaahhhh</h1>");
});

app.post("/", function(request,response){


response.send("Data posted Thankyou.");
});

app.listen(3000,function() {
	console.log("The server has started on port 3000");
});
