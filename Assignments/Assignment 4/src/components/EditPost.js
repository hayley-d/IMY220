import React from "react";
import PropTypes from 'prop-types';

export class EditPost extends React.Component{

    constructor(props){
        super(props);
        this.titleRef = React.createRef();
        this.descriptionRef = React.createRef();
        this.handelSubmit = this.handelSubmit.bind(this);
    }

   
    handelSubmit(){
        const title = this.titleRef.current.value;
        const description = this.descriptionRef.current.value;

        this.props.onUpdatePost(title,description);
    }

    render(){
        return(
            <form>
                <label for="title">Post Title</label>
                <input type="text" name="title" defaultValue={this.props.title} ref={this.titleRef}/>
                <label for="description">Post Description</label>
                <input type="text" name="description" defaultValue={this.props.description} ref={this.descriptionRef}/>
                <button onClick={this.handelSubmit}>Save</button>
            </form>
        );
    }
}

