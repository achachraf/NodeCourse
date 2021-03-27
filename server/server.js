const express = require("express")
const app = express();
const cors = require("cors")
const bodyParser = require("body-parser")

// app.set("view engine","ejs")

// app.get("/",function(req,res){
//     return res.send("API is running...")
// })

// app.get("/html",(req,res)=>{
//     return res.send("<h1>Big hello</h1>")
// })

// app.get("/ejs",(req,res)=>{
//     return res.render("index",{name: "chiwahd"})
// })

app.use(bodyParser.json())

app.use(cors());

app.use("/todos",require("./routes/todos"))

const PORT = 5000;

app.listen(PORT,()=>{
    console.log(`Listenning on port ${PORT}`)
})

