const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt')
const User = require("../models/User")
const Register_user_verefication=require("../models/Register_user_verefication")
const { registerRules, validator,confirmationRegisterRules } = require("../midllewares/validator")
const jwt = require('jsonwebtoken');
const isAuth=require("../midllewares/passport")
const crypto= require("crypto")



//register

router.post('/register', registerRules(), validator, async (req, res) => {
    const { name, email, password } = req.body
    try {
        const newUser = new User({ name, email, password })
        const existUser = await User.findOne({ email })
        if (existUser) { return res.status(400).json({ msg: 'User already exist' }) }
        const hashedPassword = await bcrypt.hash(password, 10)
        newUser.password = hashedPassword
        const result = await newUser.save()
        res.json({ user:result, msg: "user added" })
    } catch (error) {
        res.status(500).json({ errors: error })
    }
})
//login
router.post('/login', async (req, res) => {
    const { email, password } = req.body
    try {
        const searchUser = await User.findOne({ email })
        if (!searchUser) { return res.status(400).json({ msg: "user not exist" }) }
        const isMatch = await bcrypt.compare(password, searchUser.password)
        if (!isMatch) { return res.status(400).json({ msg: "wrong password" }) }
        const payload = {
            id: searchUser._id,
            name: searchUser.name,
            email: searchUser.email
        }
        const user= await User.findOne({ email }).select('-password')
        jwt.sign(payload, process.env.privateKey, function (err, token) {
            if (err) throw err;
            res.json({ token: `Bearer ${token}`,user:user })
        });
    }

    catch (error) {
        res.status(500).json({ errors: error })
    }
})

router.get("/current",isAuth(),(req,res)=>{
    try {
        res.send({user:req.user})
    } catch (error) {
        res.status(500).json({errors:error})
    }
})

// verification register 
router.post("/Register_verification",confirmationRegisterRules(),validator, async (req,res) => {
    const {email,date,token_mail_verification }=req.body
try{
const newRegister_user_verefication = new Register_user_verefication({email,date,token_mail_verification})
const existUser = await User.findOne({ email })
const existregisterUser = await Register_user_verefication.findOne({ email })
if (existUser) { return res.status(400).json({ msg: 'User already exist' }) };
if (existregisterUser) { return res.status(400).json({ msg: 'this mail already used !choos another on or check your mailbox to complete verification' }) };
newRegister_user_verefication.email =email;
newRegister_user_verefication.date = new Date();
newRegister_user_verefication.token_mail_verification = crypto.randomBytes(64).toString('hex').slice(0,12) ;
const result = await newRegister_user_verefication.save()
console.log(result)
res.json({ register_user_verefication:result, msg: "confirmation register token added with sucess" })

}catch(error){  
     res.status(500).json({ errors: error })
}

}
)


router.post("/Confirm_registration",async (req,res)=>{
    const {token_mail_verification} =req.body
    try{
        const searchToken = await Register_user_verefication.findOne({ token_mail_verification})
        if (!searchToken) {return res.status(400).json({msg : "wrong code...!!!please check your box mail and verify"})}
       const   result = await searchToken.token_mail_verification
          res.status(200).json({user:result , msg:' verification sucess '})
          console.log(result)
    
    } catch(error){
        res.status(400).json({ errors: error })
    
    }
    
    })


//DELETE : REMOVE Acount User  BY ID 
//router.delete("/:id",async(req,res)=>{
  //  try {
   ///     const result = await  User.deleteOne({"_id" : req.params.id})
    //    result.deletedCount ? 
   //     res.json({  msg:'successfully deleted'}) :  res.json({  msg:'User  is already deleted '})
   // } catch (error) {
   //     res.status(400).json({errors : error,msg:'Ouups ,User is not  deleted'})
 //   }
//})

//DELETE : REMOVE Acount User  BY email
router.delete("/:email",async(req,res)=>{
    try {
        const result = await  User.deleteOne({"email" : req.params.email})
        result.deletedCount ? 
        res.json({  msg:'account has successfully deleted'}) :  res.json({  msg:'User  is already deleted by email '})
    } catch (error) {
        res.status(400).json({errors : error,msg:'Ouups ,User is not  deleted by mail'})
    }
})

//DELETE : REMOVE  tolen for the user was delete his Acount   BY ID 
//router.delete("/Register_verification/:token_mail_verification",async(req,res)=>{
  //  try {
       
     //   const result = await  Register_user_verefication.deleteOne({"token_mail_verification" : req.params.token_mail_verification})
     //   result.deletedCount ? 
     //   res.json({  msg:'token successfully deleted'}) :  res.json({  msg:'Token  is already deleted '})
    //} catch (error) {
    //    res.status(400).json({errors : error,msg:'Ouups ,Token is not  deleted'})
  //  }
//})

//DELETE : REMOVE  by mail account verification for the user want to delete his account
router.delete("/Register_verification/:email",async(req,res)=>{
    try {
       
        const result = await  Register_user_verefication.deleteOne({"email" : req.params.email})
        result.deletedCount ? 
        res.json({  msg:'account verification successfully deleted'}) :  res.json({  msg:'acount verification  is already deleted '})
    } catch (error) {
        res.status(400).json({errors : error,msg:'Ouups ,Acount verification is not  deleted by email'})
    }
})
module.exports = router