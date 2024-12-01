import React from "react";
import {Link} from "react-router-dom";

export class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <ul>
                    {this.props.users.map((user, idx) => {
                        const url = `/user/${user.id}`;
                        return (
                            <li key={idx}>
                                <Link to={url}>{user.username}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
