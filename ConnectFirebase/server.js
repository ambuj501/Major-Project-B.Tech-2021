const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

const ofirebase = require("./firebase/setData");
const getfirebase = require("./firebase/getData");
const update = require("./firebase/updateData");

const deletedata = require("./firebase/deletedata");



app.use(express.static("public"));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));






app.get("/", function(req,res){
    res.render("login");
})

app.get("/login", function(req,res){
    res.render("login");
})


//save data
app.post("/login",function(req,res){
    ofirebase.saveData(req.body, function(err, data){
		
		res.render("login");
        //res.send(data);

    });
})

//get data
app.post("/userdata",function(req,res){
getfirebase.getdata(function(data){
    res.send({"statusCode":"200",  "result" : data});
});
})



//update data
app.post("/updatedata", function(req,res){
    update._updateData(req.body, function(data){
        res.send({"status" : "200", "message" : "updated succellfully "});
    });
})



app.post("/delete", function(req,res){
    deletedata._deletedata(function(data){
        res.send({"status" : "200", "message" : "updated succellfully "});
    });
})

app.listen(3000,function(){
    console.log("Server started ");
});

