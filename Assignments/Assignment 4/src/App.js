import React from "react"
import {Posts} from "./pages/Posts.js";
import {Home} from "./pages/Home.js";
import {BrowserRouter, Routes, Route} from "react-router-dom";

export class App extends React.Component{

    render(){
        return(
              <BrowserRouter>
                <div>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/posts" element={<Posts />}/>
                    </Routes>
                </div>
              </BrowserRouter>
        );
    }
}

