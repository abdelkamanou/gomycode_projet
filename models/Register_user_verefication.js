const mongoose = require("mongoose");

const schema = mongoose.Schema;

const register_user_vereficationSchema = new schema({
 
  
  token_mail_verification: {
    type: String,
    required: true,
  },
  email: {
    type: String,
     unique:true
  },
  date:{
    type: Date,
  },
});
module.exports = Register_user_verefication = mongoose.model("register_user_verefication", register_user_vereficationSchema);