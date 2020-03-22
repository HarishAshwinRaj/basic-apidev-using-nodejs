const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const fooddet = new Schema({
fname:{type:String},
fprice:{type:Number}});

const restarunts = new Schema({
rname :{type:String},
food :[fooddet]
});

const Restarunt = mongoose.model("Restarunt",restarunts);
module.exports =Restarunt;

