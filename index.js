const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv")

dotenv.config();

app.use(cors());

app.get('/',(req,res)=>{
    res.send("Hello")
})

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log("Server Listening on PORT : ",PORT);
})