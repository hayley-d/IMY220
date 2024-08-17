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

const randomWords = [
  "MightyMuffin",
  "SillySloth",
  "BorrowChecker",
  "GrepThis",
  "VimToWin",
  "MutexMaverick",
  "MacroMaestro",
  "CargoCrab",
  "ZigZilla",
  "RustyRelic",
  "ZigAndLetDie",
  "UnsafeBlockParty",
  "ZigZaggingZen",
  "Clippy"
];

app.use(express.static(__dirname));
const poll = require('./poll.js');
poll.setVotes(votes);

app.get('/', (req,res) => {
	res.sendFile(path.join(__dirname,'index.html'));
});

let users = {};

io.on('connection', (socket) =>{
	console.log('A user connected with ID : '+ socket.id);

  let randomName = randomWords[Math.floor(Math.random() * randomWords.length)];
  
  if(users[socket.id] === undefined){
    users[socket.id] = randomName;
  }

	socket.emit('updateVotes',{votes:poll.getVotes()});

  socket.emit('username',users[socket.id]);

	socket.on('disconnect', () =>{
		console.log('A user disconnected');
	});

	socket.on('vote', (data) =>{
    console.log(data);
		//if(votes[option] !== undefined){
		//	votes[option] = votes[option]+1;
    poll.vote(data.name);
		io.emit('updateVotes',{votes:poll.getVotes(),user:data.user,name:data.name});
		//}
	});
});

const PORT = 3000;

httpServer.listen(PORT, () =>{
	console.log("Listening on http://localhost:3000");
});
