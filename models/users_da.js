const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const orderr = new Schema({
fname:{type:String},
fprice:{type:Number},
rname:{type:String}});

const user = new Schema({
userid :{type:String},
name :{type:String,default :"anaonimus"},
email :{type:String,default:"example@exampo"},
phoneno:{type:Number,default:1234556789},
paymentstatus:{type :Boolean,default:false},
orders:[orderr]
});

const userdata = mongoose.model("user_da",user);
module.exports = userdata;