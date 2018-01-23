var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function (socket) {
	console.log('User Connected via socket');
	
	socket.on('message', function(message) {
		console.log('Message received : ' + message.text);
		socket.broadcast.emit('message',message);
	});

	socket.emit('message', {
		text : 'Welcome to chat application'
	});
});

app.use(express.static(__dirname + '/public'));


http.listen(PORT, function () {
	console.log('Server Started Working');
})