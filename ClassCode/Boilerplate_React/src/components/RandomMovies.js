//Hayley Dodkins u21528790
import React from 'react'

export class RandomMovies extends React.Component{
   
    constructor(props){
        super(props);
        this.movie = this.props.movie;
        console.log(this.movie);
    }
    
    render(){
        return(
            <div>
                <p><strong>{this.movie.title}:</strong> {this.movie.description}</p>
            </div>
        );
    }  
}
