import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home} from './components/Home.js';
import {UserDetails} from './components/UserDetails.js';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {users:[],loading:true};
    }

    componentDidMount() {
        this.fetchUsers();
    }

    fetchUsers() {
        // Make a get request to the Express server
        fetch(`http://localhost:3000/users`)
            .then(res => {
                    if(!res.ok) {
                        throw new Error("Users not found");
                    }
                    // Parse the JSON response into a JS Object
                    return res.json();
                })
            .then(data => {
                console.log(data);
                this.setState({users:data,loading:false});
            })
            .catch(error => {
                console.error(error);
            });
    }


    render() {
        if(this.state.loading) {
            return (<div><h1>Loading</h1></div>);
        }


        return( 
            <BrowserRouter>
                {this.state.users.length > 0 ? (
                <Routes>
                    <Route path="/" element={<Home users={this.state.users}/>}/>
                    <Route path="/user/1" element={<UserDetails id={1} data={this.state.users[1]}/>} />
                    <Route path="/user/2" element={<UserDetails id={2} data={this.state.users[2]}/>} />
                    <Route path="/user/3" element={<UserDetails id={3} data={this.state.users[3]}/>} />
                </Routes>) : null}
            </BrowserRouter>
        );
    }
}
