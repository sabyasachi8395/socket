var socket = io();

socket.on('connect', function () {
	console.log('User is connected');
});

socket.on('message', function (message) {
	console.log('New message : ' + message.text);
});