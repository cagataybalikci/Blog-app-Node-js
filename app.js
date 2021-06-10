const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.use(express.static("public"))
app.set("view engine","ejs")
app.use(bodyParser.urlencoded({extended:true}))

app.get("/home",(req,res)=>{
  res.render("home")
})


app.listen(3000,()=>{
  console.log("Started at port 3000.");
})
