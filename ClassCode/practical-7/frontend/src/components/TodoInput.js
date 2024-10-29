import React from "react";

export default class TodoInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        // TODO: Implement so that it checks if title and content are present, if not, do not call the method and alert the user
        const { title, content } = this.state;

        if(!title && !content){
          console.error("No title or content submitted");
          return;
        }

        console.log(this.props);

        this.props.props.addTodo({
            title,
            content
        });

        this.setState({
            title: '',
            content: ''
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="mb-3">
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <input
                        type="text"
                        className="form-control"
                        id="content"
                        name="content"
                        value={this.state.content}
                        onChange={this.handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-2">Add Todo</button>
            </form>
        );
    }
}
