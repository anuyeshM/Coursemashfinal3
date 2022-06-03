const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3033;
const app = express();   
const connectionOptions = { useUnifiedTopology: true, useNewUrlParser: true};


app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.connect("mongodb+srv://anuyesh:Bubun12345@cluster0.4ofh3we.mongodb.net/?retryWrites=true&w=majority", connectionOptions)
    .then(() => console.log("Connected successfully"))
    .catch((err) => console.error(err));

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const User = new mongoose.model("User", userSchema);

//Routes
app.post("/login", (req, res)=> {
    const { email, password } = req.body
    User.findOne({ email: email }, (err, user) => {
        if(user) {
            if(password === user.password) {
                res.send({ message: "Login Successfull", user: user })
            } else {
                res.send({ message: "Password didn't match" })
            }
        } else {
            res.send({ message: "User not registered" })
        }
    })
});

app.post("/register", (req, res)=> {
    const { name, email, password } = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registered"})
        } else {
            const user = new User({
                name,
                email,
                password
            })
            user.save( err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
            
        }
    }) 
});

app.listen(PORT, () => {
    console.log("The server is listening on port " + PORT);
});