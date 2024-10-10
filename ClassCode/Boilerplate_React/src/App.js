//Hayley Dodkins u21528790
import React from "react"
import {HelloWorld} from "./components/HelloWorld.js";
import {RandomMovies} from "./components/RandomMovies.js";

export class App extends React.Component{
 randomMovies = [
    {
        "title": "The Great Adventure",
        "description": "A heartwarming story of friendship and bravery as a group of kids embarks on an unexpected journey through a mysterious forest."
    },
    {
        "title": "Future City",
        "description": "A sci-fi thriller set in a dystopian future where a hacker must battle a corrupt corporation to save humanity."
    },
    {
        "title": "Laugh Out Loud",
        "description": "A hilarious comedy following three best friends who accidentally enter a reality TV show with unexpected consequences."
    },
    {
        "title": "Love and Space",
        "description": "A romantic drama about two astronauts who find love while on a dangerous mission to Mars."
    },
    {
        "title": "The Secret of the Ocean",
        "description": "An animated adventure that follows a young girl and her talking dolphin on a quest to discover the lost city of Atlantis."
    }
]
    render(){
        return(
                <div>
                    <HelloWorld />
                    <br/>
                    <h3>Random Movie List</h3>
                    <ul>
                       {this.randomMovies.map((movie,index) => <li key = {index} ><RandomMovies movie={movie} key = {index}/></li>)}
                    </ul>
                </div>
        );
    }
}

