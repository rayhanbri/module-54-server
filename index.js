const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
  res.send('user server isszz running')
})


// npm i -g nodemon

const users = [
    {id:1,name:'Sabana',email:'sabana@gmail.com'},
    {id:2,name:'Sabnoor',email:'sabnoor@gmail.com'},
    {id:3,name:'Sabilanoor',email:'sabilanoor@gmail.com'},
]

app.get('/users', (req,res) => {
    res.send(users);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})