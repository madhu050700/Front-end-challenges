const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.set('view engine','ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.render("rate");
});
app.post("/",function(req,res){
  const rating = req.body.rating;
  res.render("thankyou",{rating:rating});
});


app.listen(3000);
