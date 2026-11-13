const express=require("express")
const app=express()
require("dotenv").config()
const port=process.env.PORT
app.use(express.json())
const taskdetails=require("./router/taskdetails")
const errorHandler=require("./middleware/errorhandler")
app.use("/api/task",taskdetails)
app.use(errorHandler)
app.listen(port,()=>{
    console.log("server running.....")
})