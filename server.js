const express = require('express');
const bodyParser = require('body-parser');
const md5 = require('md5');
const port = 3000;
const app = express();

app.use(bodyParser.json());
app.get('/', (req,res)=>{
    res.send("Hello browser");
});

app.post('/login',(req,res) => {
    console.log(JSON.stringify(req.body));
    if (req.body.userName =="aquaisie" && md5(req.body.password) =="1c42f9c1ca2f65441465b43cd9339d6c"){
        res.send("Welcome!")
    }
    else{
        res.send("Who are you?")
    }
});

app.listen(port, ()=>{});