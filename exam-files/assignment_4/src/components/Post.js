import React from 'react';
import {EditPost} from './EditPost.js';
 
export class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = { edit: false };
        this.edit_post = this.edit_post.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
    }

    edit_post() {
        this.setState(prev_state => ({ edit: !prev_state.edit }));
    }

    onUpdate(title,content) {
        const post = { title:title,author:this.props.post.author,content:content}; 
        this.props.onChange(post,this.props.idx);
        this.edit_post();
    }

    render() {
        return (
            <div>
                {this.state.edit === false ?
                    <div>
                        <h2>{this.props.post.title}</h2>
                        <p>{this.props.post.author}</p>
                        <hr />
                        <p>{this.props.post.content}</p>
                        <button onClick={this.edit_post}>Edit Post</button>
                    </div> : <EditPost post={this.props.post} onUpdate={this.onUpdate}/>
                }
            </div>
        );
    }
}
