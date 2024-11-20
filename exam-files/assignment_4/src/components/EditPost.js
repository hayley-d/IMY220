import React from "react";

export class EditPost extends React.Component {
    constructor(props) {
        super(props);
        this.title_ref = React.createRef();
        this.content_ref = React.createRef();
        this.update_post = this.update_post.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            title: this.props.post.title,
            content: this.props.post.content,
        };
    }

    componentDidMount() {
        this.setState({
            title: this.props.post.title,
            content: this.props.post.content,
        });
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    update_post(e) {
        e.preventDefault();
        this.props.onUpdate(this.title_ref.current.value, this.content_ref.current.value);
    }

    render() {
        return (
            <form>
                <h4>Edit Post</h4>
                <input
                    type="text"
                    defaultValue={this.state.title}
                    ref={this.title_ref}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    defaultValue={this.state.content}
                    ref={this.content_ref}
                    onChange={this.handleChange}
                />
                <button onClick={this.update_post}>Update</button>
            </form>
        );
    }
}
