var http = require('http');
var express = require("express");
var app = express();
var fs = require('fs');
const PORT = 7000;
app.use(express.static(__dirname + '/'));
app.get("/api",(req,res)=>{
    res.end("ok")
})
app.get('/',(req, res)=>

 res.sendfile('index.html')
);
app.post("/",function(req,res){
    console.log(req.body);
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
app.listen(process.env.PORT, process.env.IP);