import React from 'react'
import {Link} from 'react-router-dom';
import {Home} from '../pages/Home.js'
import {Products} from '../pages/Products.js'

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
