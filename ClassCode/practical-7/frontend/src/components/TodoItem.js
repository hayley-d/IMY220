import React from 'react';
class TodoItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{this.props.item.title}</h5>
                    <p className="card-text">{this.props.item.content}</p>
                </div>
                <button onClick={this.props.delete} className="btn btn-danger">Delete</button>
            </div>
        )
    }

}

export default TodoItem;
