const express = require("express");
const router = express.Router();
const Resta = require("../models/restarunt");
const userda = require("../models/users_da");

// add restarunt
router.post("/rest",function(req,res){
Resta.create(req.body).then(function(restarunt){
res.send(restarunt);})
});
//get request for restaruntant

router.get("/rest",function(req,res){
Resta.find({}).then(function(restarunt){res.send(restarunt);});
});
//post request for resta
router.post("/rest/menu",function(req,res){
Resta.find({ rname: req.body.name}).then(function(doc){
res.send({food:doc[0].food});
});
});

//get request for menu for satyaas
router.get("/rest/menu_satyaas",function(req,res){
Resta.find({rname :"satyaas"}).then(function(doc){
res.send({food:doc[0].food});});

});

//post request for selecteditems
router.post("/rest/book",function(req,res){
userda.create(req.body).then(function(user){
console.log(req.body);
res.send(" items stored !");});
});


//get request for selected items
router.get("/rest/book",function(req,res){
userda.find({userid :"random works"},function(err,doc){
res.send({order:doc[0].orders});});

});

//post request for user info
router.post("/rest/signup",function(req,res){
userda.update({userid:req.body.userid},{email:req.body.email,phoneno:req.body.phoneno,name:req.body.name,paymentstatus:req.body.paymentstatus},{multi:true},function(err,doc){
res.send("updated");
});

});

//checkout user info
router.get("/rest/userprofile",function(req,res){
userda.find({}).then(function(resu){res.send(resu)});});




module.exports = router;
