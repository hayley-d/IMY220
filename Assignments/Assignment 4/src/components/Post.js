import React from "react";
import PropTypes from 'prop-types';
import {EditPost} from './EditPost';

export class Post extends React.Component{
      constructor(props){
          super(props);
          this.state = {Editform: false, title: props.title, author:props.author,description: props.description};
          this.toggleForm = this.toggleForm.bind(this);
          this.updatePost = this.updatePost.bind(this);
      }

      toggleForm(){
          this.setState(prevState => ({form:!prevState.form}));
      }

      updatePost(title,description){
          this.setState({title:title,description:description,Editform:false});
      }
      
      render(){
          return(
              <div>
                  <h2> {this.state.title} </h2>
                  <p> {this.state.author} </p>
                  <hr/>
                  <p> {this.state.description} </p>
                  <button onClick={this.toggleForm}>{this.state.Editform? 'Cancel Edit' : 'Edit Post'}</button>
                  {this.state.Editform ? (
                      <EditPost title={this.state.title} description={this.state.description} onUpdatePost={this.updatePost}/>
                    ) : null 
                  }
              </div>
          );
      }
}


