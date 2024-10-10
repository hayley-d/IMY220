import React from 'react'
import {Link} from 'react-router-dom';

export class Navbar extends React.Component{
    render(){
        return(
            <nav>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
            </nav>
        );
    }
}
