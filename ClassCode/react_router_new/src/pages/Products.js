import React from 'react'
import {Navbar} from "../components/Navbar.js";

export class Products extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                <ul>
                    <li><a href="/product/1">Product 1</a></li>
                </ul>
            </div>
        );
    }
}
