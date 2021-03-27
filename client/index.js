window.onload = async function(){

    const todosTables = document.getElementById("todosTable").querySelector("tbody")

    const res = await fetch("http://localhost:5000/todos")
    console.log(res)
    const todos = await res.json()
    console.log(todos)

    for(const todo of todos){
        const tr = document.createElement("tr")
        tr.setAttribute("id",todo.id)
        tr.innerHTML = `
            <td>${todo.id}</td>
            <td>${todo.text}</td>
            <td><button class="btn btn-danger">Delete</button></td>
        `
        todosTables.appendChild(tr)
    }
}

const handleSubmit = async (e)=>{
    try{
        //global utils
        e.preventDefault()
        const todosTables = document.getElementById("todosTable").querySelector("tbody")
        const allRows = todosTables.getElementsByTagName("tr")
        const nextId = parseInt(todosTables.getElementsByTagName("tr")[allRows.length-1].id) + 1
        const todoInput = document.getElementById("todoInput").value
        
        // server
        const objToSend = {
            id: nextId,
            text: todoInput
        }
    
        const config = {
            method: "POST",
            headers:{
                'Content-Type': "application/json"
            },
            body: JSON.stringify(objToSend)
        }
        const res = await fetch("http://localhost:5000/todos/add",config)
        console.log(res);
    
    
        //client
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${nextId}</td>
        <td>${todoInput}</td>
        <td><button class="btn btn-danger">Delete</button></td>
        `
        tr.setAttribute("id",nextId)
        todosTables.appendChild(tr)
    
        document.getElementById("todoInput").value = ""
    }
    catch(err){
        console.log(err);
    }
}