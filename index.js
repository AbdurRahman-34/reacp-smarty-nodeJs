const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(cors())
const users = [
   {id: 1, name: "Abdul Rahim", email: "Abdul@gmail.com", phone: "01780412334"},
   {id: 2, name: "Abdul karim", email: "karim@gmail.com", phone: "01780412334"},
   {id: 3, name: "Abdul Rahman", email: "rahman@gmail.com", phone: "01780412334"},
   {id: 4, name: "Abdul jafor", email: "jafor@gmail.com", phone: "01780412334"},
   {id: 5, name: "Abdul kalam", email: "kalam@gmail.com", phone: "01780412334"},
   {id: 6, name: "Abdul kalam", email: "kalam@gmail.com", phone: "01780412334"},
   {id: 7, name: "Abdul kalam", email: "kalam@gmail.com", phone: "01780412334"},
]





app.get('/', (req, res) => {
    res.send("Nooooooooooooooooode js Sarver ")
})

app.get('/users', (req, res) => {
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched)
    }
    else{
        res.send(users)
    }
    
})

app.get('/user/:id', (req, res) => {
    console.log(req.params)
    const id = parseInt(req.params.id)
    const user = users.find(u => u.id === id)
    res.send(user)
})

app.post('/user', (req, res) => {
    console.log(req.body)
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})







app.listen(port, () => {
    console.log("Node js Port:", port)
})