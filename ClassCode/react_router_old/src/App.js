//Hayley Dodkins u21528790
import React from "react"
import {Navbar} from "./components/Navbar.js";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home} from "./pages/Home.js";
import {Products} from "./pages/Products.js";
export class App extends React.Component{
     render(){
        return(
                <BrowserRouter>
                    <Navbar/> 
                    <Routes>
                    	<Route path="/" element={<Home/>}/>
                	<Route path="/products" element={<Products/>}/>
              	    </Routes> 
               </BrowserRouter>
        );
    }
}

