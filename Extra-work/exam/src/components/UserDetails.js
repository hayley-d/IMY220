import React from "react";
import PropTypes from "prop-types";
import { Post } from "./Post.js";

export class UserDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            loading: true,
        };

        this.fetchPosts = this.fetchPosts.bind(this);
    }

    componentDidMount() {
        this.fetchPosts();
    }

    fetchPosts() {
        // Perform a GET request to the Express server's /posts/:id route
        fetch(`http://localhost:3000/posts/${this.props.id}`)
            .then((response) => response.json()) // Parse the response JSON
            .then((data) => {
                // Update the state with the posts of the fetched user
                console.log("Posts have been fetched", data);
                this.setState({ posts: data, loading: false });
            })
            .catch((error) => {
                console.error("Error fetching posts:", error); // Log errors for debugging
            });
    }

    render() {
        if (this.state.loading) {
            return <div>Loading</div>;
        }
        return (
            <div>
                <h5>User {this.props.id}</h5>
                {this.props.data &&
                    Object.keys(this.props.data).map((key, idx) => {
                        const value = this.props.data[key];
                        console.log(value);
                        return (
                            <p key={idx}>
                                <strong>{key}</strong>: {value}
                            </p>
                        );
                    })}
                {this.state.posts.map((post, idx) => {
                    return (
                        <Post key={idx} title={post.title} body={post.body} id={post.id} />
                    );
                })}
            </div>
        );
    }
}

UserDetails.propTypes = {
    data: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired,
};
