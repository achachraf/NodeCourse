const express = require("express")
const router = express.Router()

//simulating DB
let todos = [
    {id: 1, text: "doing smtg"},
    {id: 2, text: "bring smtg"},
    {id: 3, text: "learn shit"}
]

router.get("/",(req,res)=>{
    
    return res.send(todos)
})

router.post("/add",(req,res)=>{
    console.log(req.body)
    const todo = req.body
    todos = [...todos,todo]
    // todos.push(todo)
    return res.send("body printed")
})


module.exports = router;