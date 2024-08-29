import React from "react"
import {Link} from 'react-router-dom';

export class Home extends React.Component{
    render(){
        return(
                <div>
                    <h1>Hello Home Page!</h1>
                    <Link to="/">Home   </Link>
                    
                    <Link to="/posts">Posts</Link>
                </div>
            );
    }
}
