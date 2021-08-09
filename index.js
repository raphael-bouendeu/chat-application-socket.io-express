const express = require("express");
const socket =require("socket.io")
var app= express();

 var server=app.listen(4000,function(){
    console.log("listening to port 4000")
});

app.use(express.static("public"));

var upgradedserver=socket(server);
upgradedserver.on("connection",function(socket){

    socket.on('sendingmessage',function (data) {
        upgradedserver.emit('broadcastmessage',data)
    })

    console.log("websocket connected",socket.id)
});