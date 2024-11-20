import React from 'react';
import {Event} from './Event.js';

export class EventFeed extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // Sort in ascending order
        this.props.events.sort((a,b) => new Date(a.date) - new Date(b.date));

        return(
            <ul>
                {this.props.events.map((event,key) => 
                    <li key={key}><Event event={event} /></li>
                )}
            </ul>
        );
    }
}
