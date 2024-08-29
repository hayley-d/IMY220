import React from "react";
import PropTypes from 'prop-types';
import {EditPost} from './EditPost';

export class Post extends React.Component{
      constructor(props){
          super(props);
          this.state = {editForm: false, title: props.title, author:props.author,description: props.description};
          this.toggleForm = this.toggleForm.bind(this);
          this.updatePost = this.updatePost.bind(this);
      }

      toggleForm(){
          let isDisplayed = !this.state.editForm;
          console.log("isDisplayed :" + isDisplayed);
          this.setState({editForm:isDisplayed});
      }

      updatePost(title,description){
          this.setState({title:title,description:description,editForm:false});
      }
      
      render(){
          return(
              <div className="card-body">
                  <h3 className="card-title"> {this.state.title} </h3>
                  <p className="card-text"> {this.state.author} </p>
                  <hr/>
                  <p className="card-text"> {this.state.description} </p>
                  <button className="btn btn-dark" onClick={this.toggleForm}>{this.state.editForm? 'Cancel Edit' : 'Edit Post'}</button>
                  {this.state.editForm ? (
                      <EditPost title={this.state.title} description={this.state.description} onUpdatePost={this.updatePost}/>
                    ) : (<h3>{this.state.editForm}</h3>) 
                  }
              </div>
          );
      }
}


