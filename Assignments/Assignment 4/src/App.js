import React from "react"
import {Post} from "./components/Post.js";
import {Home} from "./pages/Home.js";
import {BrowserRouter, Routes, Route} from "react-router-dom";

export class App extends React.Component{

    render(){
        return(
              <BrowserRouter>
                <div>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/posts" element={<Post title="Sloths are cool" description="Sloths....." author = "Hayley" />}/>
                    </Routes>
                </div>
              </BrowserRouter>
        );
    }
}

