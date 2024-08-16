const express = require('express')
const {createServer} = require('http');
const {Server} = require('socket.io');
const path = require('path');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

let votes = {
	Pebble:0,
	Sunshine:0,
	Miso:0,
	Panko:0,
	Snowball:0
};

app.use(express.static(__dirname));

app.get('/', (req,res) => {
	res.sendFile(path.join(__dirname,'index.html'));
});

io.on('connection', (socket) =>{
	console.log('A user connected with ID : '+ socket.id);

	socket.emit('updateVotes',votes);

	socket.on('disconnect', () =>{
		console.log('A user disconnected');
	});

	socket.on('vote', (option) =>{
		if(votes[option] !== undefined){
			++votes[option];
			io.emit('updateVotes',votes);
		}
	});
});

const PORT = 3000;

httpServer.listen(PORT, () =>{
	console.log("Listening on http://localhost:3000");
});
