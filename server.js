const express = require('express')
const dbConnect=require("./config/connectDB")
require('dotenv').config()
const cors = require('cors')
const app =express();
app.use(cors())
//middlewares
dbConnect()
app.use(express.json())
app.use('/api/user/',require("./routes/user"))
app.use('/api/serviceuser/',require("./routes/serviceuser"))


const PORT=process.env.PORT

app.listen(PORT, (err) => err?console.log(err):console.log(`app listening on port ${PORT}!`))
