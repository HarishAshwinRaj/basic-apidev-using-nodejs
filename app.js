const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const port = 3000
const mon = require("mongoose");
mon.connect("mongodb://127.0.0.1:27017/mon",{ useNewUrlParser: true }); 
mon.Promise = global.Promise;
app.use(bodyParser.json()); 
app.use("/",require("../routes/api"));
app.use(function(err,req,res,next){
console.log(err);
});
app.listen(port,()=>console.log(`success${port}!`))