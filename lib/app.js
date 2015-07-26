/**
 * Created by seven on 15/7/18.
 */
//var util = require('./util');
var bodyParser = require('body-parser');
var WebSocketServer = require('ws').Server;
var url = require('url');
var cors = require('cors');

var app = exports = module.exports = {};

app._initializeHTTP = function() {};

/** Initialize WebSocket server. */
app._initializeWSS = function(server) {
    var path = this.mountpath;

    this._wss = new WebSocketServer({ path: path, server: server});

    this._wss.on('connection', function(socket) {
        var query = url.parse(socket.upgradeReq.url, true).query;
        var ip = socket.upgradeReq.socket.remoteAddress;
        console.log(query);
        console.log(ip);



        socket.on('message', function(data){
            console.log(data);
            socket.send("You say: " + data);
        });

    });



};