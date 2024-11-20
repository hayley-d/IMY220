import React from 'react';


export class Event extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return ( 
            <div>
                <h1>{this.props.event.name}</h1>
                <h4>{this.props.event.date}</h4>
                <p>{this.props.event.description}</p>
            </div>
        );
    }
}
