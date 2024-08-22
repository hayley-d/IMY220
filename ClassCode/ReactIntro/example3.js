class AddPersonForm extends React.Component{
    
    static defaultProps = {
        person : {name : "John", surname: "Doe"} //or blank array []
    }

    constructor(props){
        super(props);
        this.submit = this.submit.bind(this);
        this.nameIn = React.createRef();
        this.surnameIn = React.createRef();
    }

    submit(e){
        e.preventDefault();
        let name = this.nameIn.current.value;
        let surname = this.surnameIn.current.value;
        alert
    }
}

class PersonList extends React.Component{
    constructor(props){
        super(props);
        this.state = {people: this.props.people || []}; //make state.people equal to the input list
        this.addPerson = this.addPerson.bind(this);
    }
    
    addPerson(name,surname){
        let people = this.state.people;
        people.push({name,surname});
        this.setState(people);
    }
    
    render(){
        return(
            <div className="container">
                <h1> {this.state.people.length} in the list </h1>
                <ul>
                    {this.state.people.map((person,index) => <Person key={index} person={person}/>)}
                </ul>
                <div>
                    <AddPerson onNewPerson={this.addPerson} />
                </div>
            </div>
            // pass the addPerson function through the props
        );
    }
}

class Person extends React.Component{
    render(){
        return(<li>{this.props.person.name} {this.props.person.surname}</li>);
    }
}

 class AddPerson extends React.Component{

    constructor(props){
        super(props);
        this.nameInput = React.createRef();
        this.surnameInput = React.createRef();
        this.submit = this.submit.bind(this); 
    }

    submit(e){
        e.preventDefault();
        let name = this.nameInput.current.value;
        let surname = this.surnameInpuer.current.value;
        this.props.onNewPerson(name,surname);
    }

    render(){
        return(
            <form onSubmit={this.submit}>
                <input type="text" ref={this.nameInput} />
                <input type="text" ref={this.suernameInput} />
                <input type="submit" value="Submit" />
            </form>
        );
    }

}

ReactDOM.render(<PersonList people={[]}/>,document.getElementById('react-root'));


