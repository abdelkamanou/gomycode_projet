const express = require('express')
const router = express.Router()
const Serviceuser = require('../models/Serviceuser')
const { add_advanced_userRules, validator} = require("../midllewares/validator")



//       POST :  ADD A NEW USER TO THE DATABASE 
router.post('/add_advanced_user',add_advanced_userRules(),validator, async (req,res)=>{
    const { name ,age, email ,  phone, genre , region , password, job 
        , price , category, experience , description } = req.body
    try {
        const newServiceuser = new Serviceuser({ name , age ,  email ,  phone ,genre, region , password, job 
             , price , category, experience , description });
            const  response = await newServiceuser.save();
            res.json({user:response, msg:'User is added '})
    } catch (error) {
        res.status(400).json( {errors : error,  msg: "cannot add user "})
    }

})

//GET :  RETURN ALL USERS 
router.get('/all_users',async(req,res)=>{
    try {
        const result = await Serviceuser.find().select("-password")
        res.status(200).json({res:result , msg:' success get users '})
    } catch (error) {
        res.status(400).json({errors : error,msg:'Failure return all users'})
    }

}) 

//GET :  RETURN CURRENT  ADVUSER IF EXIST
router.get('/:email',async(req,res,next)=>{
    try {
        const CurentADVUser = await Serviceuser.find({email:req.params.email}).select("-password")
        if(CurentADVUser.length===1){
            res.status(200).json({ res: CurentADVUser , msg:' success get advanced current user '})
             } 
        return next()
        res.json({msg : 'advanced account not existe yet' })   
    } catch (error) {
        res.status(500).json({errors : error,msg:'Failure return advanced user'})
    }
    console.log(CurentADVUser)
})

//DELETE : REMOVE ADvanced User  BY ID 
    router.delete("/delete_adv_user/:email",async(req,res)=>{
        try {
            const result = await Serviceuser.deleteOne({"email" : req.params.email})
            result.deletedCount ? 
            res.json({  msg:'successfully deleted'}) :  res.json({  msg:' advanced User  is already not exist '})
        } catch (error) {
            res.status(400).json({errors : error,msg:'Ouups ,advanced User is not  deleted'})
        }
    })


    // Update { id , content(body)}  update => put or patch 

router.put("/:id",async(req,res)=>{
    try {
        const result = await Serviceuser.updateOne({"_id" : req.params.id },{$set: {...req.body}})
        result.nModified ?    
        res.send({ msg:"User is  updated"}) :  res.send({  msg:'User is already updated '})
    } catch (error) {
        res.status(400).json( {errors : error ,msg:'Ouups ,User is  not updated'})
        
    }
})

//GET :  RETURN  USERS BY JOB 
router.get('/filter_job/:job',async(req,res)=>{
    try {
     const ADVUsers_by_job = await Serviceuser.find({job:req.params.job}).select("-password")
     const result = await ADVUsers_by_job
     res.status(200).json({ res: result, msg:' success get users by job'})          
    } catch (error) {
        res.status(400).json({errors : error,msg:'Failure return  users by job'})
    }
})


//GET :  RETURN  USERS BY JOB & REGION
router.get('/filter_job&region/:job/:region',async(req,res)=>{
     try {
      const ADVUsers_by_job_region = await Serviceuser.find({job:req.params.job,region : req.params.region}).select("-password")
      const result = await ADVUsers_by_job_region
      res.status(200).json({ res: result, msg:' success get users by job & region'})          
     } catch (error) {
         res.status(400).json({errors : error,msg:'Failure return  users by job & region'})
     }
 })


module.exports=router