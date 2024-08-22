class Person extends React.Component {
  render(){
    return(
      <li>{this.props.person.name} {this.props.person.surname}</li>
    );
  }
}

class PersonList extends React.Component {
  render(){
    return(
        <div className = "container">
            <h1> {this.props.people.length} people in the list</h1>
            <ul>
                {this.props.people
                  .map(function(person,index){  return <Person key={index}, person={person}/> })
                }
            </ul>
        </div>
    );
  }
}

var peopleList = [
  {name: "Hayley", surname: "Dodkins"},
  {name: "Emma", surname: "Dodkins"}
];

ReactDOM.render(<PersonList people={peopleList}/>, document.getElementById('react-root'));
