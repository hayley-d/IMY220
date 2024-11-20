import React from 'react';

export class PointInput extends React.Component {
	constructor(props){
		super(props);
		this.point1Ref = React.createRef();
		this.point2Ref = React.createRef();
		this.handleInput = this.handleInput.bind(this);
	}

	handleInput(e){
		e.preventDefault();
		const point1 = this.point1Ref.current.value.trim();
		const point2 = this.point2Ref.current.value.trim();
		console.log(`Point1 : ${point1} Point2: ${point2}`);
		this.props.onSubmit(point1,point2);
	}

	render(){
		return(
			<form>
				<p>Point 1: </p>
				<input type="text" ref={this.point1Ref}/>
				<br/>
				<p>Point 2: </p>
				<input type="text" ref={this.point2Ref}/>
				<button onClick={this.handleInput}>Submit</button>				
			</form>
		);
	}
}
