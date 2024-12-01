import React from "react";
import PropTypes from "prop-types";

export class Post extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h5>{this.props.title}</h5>
                <p>{this.props.body}</p>
            </div>
        );
    }
}

Post.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
};
