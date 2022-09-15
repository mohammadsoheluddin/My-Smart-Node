const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from my own personal over smart new pant! with auto restart')
});

const users = [
    {id: 1, name: 'John', email: 'abc@gmail.com', phone: '123-456-00'},
    {id: 2, name: 'shohel', email: 'sohel@gmail.com', phone: '123-456-00'},
    {id: 3, name: 'Shoaib', email: 'karim@gmail.com', phone: '123-456-00'},
    {id: 4, name: 'helal', email: 'helal@gmail.com', phone: '123-456-00'},
    {id: 5, name: 'noor', email: 'noor@gmail.com', phone: '123-456-00'},
    {id: 6, name: 'esha', email: 'esha@gmail.com', phone: '123-456-00'},
    {id: 7, name: 'alif', email: 'alif@gmail.com', phone: '123-456-00'},
]

app.get('/users', (req, res) => {
    // filter by search query parameter
    if(req.query.name){
        const search = req.query.name;
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched);
    }
    else{
        res.send(users);
    }
});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
});

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.listen(port, () =>{
    console.log('Listening to port', port);
});