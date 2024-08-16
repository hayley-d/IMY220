
const socket = io();

socket.on('connection',(socket) =>{
  console.log('I connected with ID: '+ socket.id);
});

socket.on('updateVotes',(votes) => {
 const totalVotes = Object.values(votes).reduce((sum,count) => sum + count,0);

 document.getElementById('pebble-votes').textContent = votes.Pebble;
 document.getElementById('sunshine-votes').textContent = votes.Sunshine;
 document.getElementById('miso-votes').textContent = votes.Miso;
 document.getElementById('panko-votes').textContent = votes.Panko;
 document.getElementById('snowball-votes').textContent = votes.Snowball;
 document.getElementById('total-votes').textContent = totalVotes;

});

document.getElementById('poll').addEventListener('submit',function(event){
  event.preventDefault();
});

document.getElementById('sub-btn').addEventListener('click',() =>{
  socket.emit('vote',document.querySelector("input[name='catName']:checked").value);
});

