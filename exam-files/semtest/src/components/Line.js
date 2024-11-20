import React from 'react'

export class Line extends React.Component {
	constructor(props) {
		super(props);
		this.state = {dimention:0,distance:0};
		this.calculateDistance = this.calculateDistance.bind(this);
	}

	componentDidUpdate(prevProps){
		if(prevProps.point1 !== this.props.point1 && prevProps.point2 !== this.props.point2) {
			this.calculateDistance();
		}
	}
	calculateDistance(){
		const arr1 = this.props.point1.split(';');
		const arr2 = this.props.point2.split(';');
		if(arr1.length !== arr2.length){
			return;
		}
		this.setState({dimention: arr1.length});

		let part1 = arr1.map((a,idx) => a - arr2[idx]);
		console.log(part1);
		let part2 = part1.map(a => a*a);
		let part3 = part2.reduce((total,current) => total += current,0);
		let ans = Math.round(Math.sqrt(part3)*100)/100;
		this.setState({distance:ans});
	}

	render() {
		return(
			<div>
				<p>Point 1: {this.props.point1}</p>
				<p>Point 2: {this.props.point2}</p>
				<p>Dimention: {this.state.dimention}</p>
				<p>Distance: {this.state.distance}</p>
			</div>
		);
	}
}
