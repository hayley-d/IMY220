//Hayley Dodkins u21528790
import React from "react"
import {Navbar} from "./components/Navbar.js";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {Home} from "./pages/Home.js";
import {Products} from "./pages/Products.js";

const router = createBrowserRouter([
    {path:"/", element:<Home/>, errorElement: <div>404 Page not Found</div>},
    {path:"/products", element:<Products/>}
]);

export class App extends React.Component{
     render(){
        return(
                <RouterProvider router={router}>
                    <Navbar/> 
               </RouterProvider>
        );
    }
}

