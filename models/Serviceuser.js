const mongoose = require('mongoose');
const serviceuserSchema = new mongoose.Schema(
    {
         name:  {type:String ,required:true} ,
         age: {type:Number,required :true}, 
         email :{type:String ,required:true,unique:true} ,
         phone : {type:String ,required:true} ,
         genre : {type:String ,required:true},
         region : {type:String ,required:true} ,
         password : {type:String ,required:true} ,
         price :{type:Number ,required:true},
         category : {type:String ,required:true},
         job :{type:String ,required:true} ,
         experience:{type:String},
         description :{type:String }
         });
         
module.exports = Serviceuser = mongoose.model('serviceuser', serviceuserSchema);