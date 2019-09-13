var express=require('express');
var bodyParser = require('body-parser');
var path=require('path')
/*  end      */



/* Configuration to connect to database */


//creating express object
app=express();



//seting view engine to ejs
app.set('view engine','ejs');


// using bodyparser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('./public'));

//file handeling

app.get('/project',function(req,res){
    res.render("project");
   });
   app.get('/facility',function(req,res){
    res.render("facility");
   });
   app.get('/contact',function(req,res){
    res.render("contact");
   });
   
   
//port
app.listen(4000); //our app is running on port no 8080
console.log('Server started at port 4000');