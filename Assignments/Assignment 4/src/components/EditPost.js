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
            <form className="container">
                <div className="form-group">
                <label for="title">Post Title</label>
                <input type="text" className="form-control" name="title" defaultValue={this.props.title} ref={this.titleRef}/>
                </div>
                <div className="form-group">
                <label for="description">Post Description</label>
                <input type="text"  className="form-control" name="description" defaultValue={this.props.description} ref={this.descriptionRef}/>
                </div>
                <button className="btn btn-primary" onClick={this.handelSubmit}>Save</button>
            </form>
        );
    }
}

