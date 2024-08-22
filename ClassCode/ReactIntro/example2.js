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
        alert('${name} ${surname}');
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

ReactDOM.render(<AddPerson/>,document.getElementById('react-root'));
