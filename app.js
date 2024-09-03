// app.js
const express = require('express');
 
const app = express();
const userModel = require('./usermodel');



app.get('/', (req, res) => {
    res.send("heu");
});


app.get('/create', async (req, res) => {
     
        let createdUser = await userModel.create({
            name: "hammaaaad",
            email: "ha92az@gmail.com",
            username: "haaaaza"
        });
         
        res.send(createdUser);
    
});
app.get('/update', async (req, res) => {
    let updatedUser= await userModel.findOneAndUpdate({username: "haaa"} , {name:"hammad ahmed"} ,{new: true })
     res.send(updatedUser);
});


app.get('/read', async (req, res) => {
    let users= await userModel.find()
     res.send(users);
});

app.get('/delete', async (req, res) => {
    let deleted = await userModel.findOneAndDelete({username: "haaa"})
     res.send(deleted);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
