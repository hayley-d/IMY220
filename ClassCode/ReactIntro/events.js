class FunButton extends React.Component{

    constructor(props){
      //pass into the parent class 
      super(props);
      //make the this keyword in sayYass refer to this in this context (ths class)
      this.sayYass = this.sayYass.bind(this);
    }

    sayYass(e){
      alert("Yassss " + this.props.name);
      e.preventDefualt();
    }

    render(){
      return(
          <a onClick={this.sayYass}>Click Me</a>
      );
    }
}

ReactDOM.render(<FunButton name="Hayley"/>,document.getElementById('react-root'));
