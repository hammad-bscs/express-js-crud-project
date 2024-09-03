// usermodel.js
 
const mongoose = require('mongoose');

// Connect to MongoDB using mongoose
 
mongoose.connect('mongodb://127.0.0.1:27017/dbconnect', {
}).then(() => {
    console.log("Database connected successfully");
}).catch(err => {
    console.error("Database connection error:", err);
});


// Define a schema for the user collection
const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String
});

// Create a model using the schema
const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;

