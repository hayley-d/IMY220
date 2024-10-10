import React from 'react';
import {Navbar} from "../components/Navbar.js";

export class Home extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                <h1>Home</h1>
            </div>
        );
    }
}
