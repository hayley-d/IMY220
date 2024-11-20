import React from "react";
import { Home } from "./components/Home.js";
import { Posts } from "./components/Posts.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/posts" element={<Posts />} />
                </Routes>
            </BrowserRouter>
        );
    }
}
