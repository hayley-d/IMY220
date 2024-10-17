import React from "react";
import { Splash } from "./pages/Splash";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    { path: '/', element: <Splash /> },
]);

export class App extends React.Component {
    render() {
        return (
            <RouterProvider router={router}>
                <Navbar/>
            </RouterProvider>
        );
    }
}

