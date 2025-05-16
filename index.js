const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 3000;


app.use(cors()); 
app.use(express.json())
app.get('/', (req, res) => {
  res.send('user server isszz running')
})


// npm i -g nodemon

//node --watch index.js

// ei duitar je khono ekta open korte hobe shob somoi vs code er terminal
// theke eishob kajkarbar korte hobe 

const users = [
    {id:1,name:'Sabana',email:'sabana@gmail.com'},
    {id:2,name:'Sabnoor',email:'sabnoor@gmail.com'},
    {id:3,name:'Sabilanoor',email:'sabilanoor@gmail.com'},
]

app.get('/users', (req,res) => {
    res.send(users);
})


app.post ('/users',(req,res)=>{
    console.log('user is sending data')
    console.log(req.body)
    const newUser = req.body
    newUser.id  = users.length + 1;

    // add data to the database 

    users.push(newUser)

    res.send(newUser)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})