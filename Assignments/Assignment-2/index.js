
const socket = io();

socket.on('connection',(socket) =>{
  console.log('I connected with ID: '+ socket.id);
});

socket.on('username',(username) =>{
  var username = username;
  document.getElementById('usr').textContent = username;
  console.log("Your username is: " + username);
});

socket.on('updateVotes',(data) => {
 const votes = data.votes;
 const totalVotes = Object.values(votes).reduce((sum,count) => sum + count,0);
 console.log("Total Votes: ",totalVotes);
 document.getElementById('pebble-votes').textContent = votes.Pebble;
 document.getElementById('sunshine-votes').textContent = votes.Sunshine;
 document.getElementById('miso-votes').textContent = votes.Miso;
 document.getElementById('panko-votes').textContent = votes.Panko;
 document.getElementById('snowball-votes').textContent = votes.Snowball;
 document.getElementById('total-votes').textContent = totalVotes;
 if(data.name !== undefined){
    let element = document.createElement('p');
    element.textContent = data.user + " voted for " + data.name;
    document.getElementById('feed').appendChild(element);
 }
  console.log("Set new Values");
});

document.getElementById('poll').addEventListener('submit',function(event){
  event.preventDefault();
});

document.getElementById('sub-btn').addEventListener('click',() =>{
  const username = document.getElementById('usr').textContent;
  socket.emit('vote',{name:document.querySelector("input[name='catName']:checked").value, user:username});
});

