import React from 'react'
import {Navbar} from "../components/Navbar.js";
import {Link} from 'react-router-dom';

export class Products extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                <ul>
                    <li><Link to="/product/1">Product 1</Link></li>
                </ul>
            </div>
        );
    }
}
