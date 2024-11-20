import React from "react";
import { Line } from "./components/Line.js";
import { PointInput } from "./components/PointInput.js";

export class App extends React.Component {
    constructor() {
        super();
	this.state = {point1:"0;0",point2:"0;0"};
	this.makePoints = this.makePoints.bind(this);
    }

    makePoints(point1,point2){
	    this.setState({point1:point1,point2:point2});
	    console.log(this.state);
    }

    render() {
        return (
		<div>
			<PointInput onSubmit={this.makePoints}/>
			<Line point1={this.state.point1} point2={this.state.point2}/>
		</div>
        );
    }
}
