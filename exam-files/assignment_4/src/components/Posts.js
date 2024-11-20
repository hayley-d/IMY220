import React from "react";
import { Post } from "./Post.js";

export class Posts extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: [
                {
                    title: "A Walk in the Park",
                    author: "hayley-d",
                    content:" golang > rust"
                },
                {
                    title: "Rust Day!",
                    author: "Prime",
                    content:"coding rust"
                },
            ]
        };
        this.updatePost = this.updatePost.bind(this);
    }

    componentDidMount() {
    }

    updatePost(post,index) {
        const posts = this.state.posts;
        posts[index] = post;
        this.setState({posts:posts});
        console.log(this.state.posts);

    }

    render() {
        return (
            <div>
                {this.state.posts.map((p,index) => <Post post={p} key={index} idx={index} onChange={this.updatePost}/>)}
            </div>
        );
    }
}
