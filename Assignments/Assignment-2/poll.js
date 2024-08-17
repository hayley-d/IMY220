class Poll{
  constructor(votes){
    this.votes = votes;
  }

  vote(name){
    console.log("Voting for: ",name);
   	if(this.votes[name] !== undefined){
	  	this.votes[name] = this.votes[name]+1;
	  } 
  }

  getVotes(){
    return this.votes;
  }

  setVotes(votes){
    this.votes = votes;
  }
}
var poll = new Poll();
module.exports = poll;
