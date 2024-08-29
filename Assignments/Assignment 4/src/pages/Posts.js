import React from 'react';
import {Post} from '../components/Post.js';

export class Posts extends React.Component{
     posts = [
        {title:"Rust: Safety First, Fun Sometimes", author:"Primegen", description:"Borrow checker: 1, My Sanity: 0 the upside is there are no memory leaks"},
        {title:"Vim vs Emacs: The great divide", author:"TJ Devon", description:"We all know every vim user wishes it was Emacs"},
        {title:"Why Rust's Error Messages Are Passive-Aggressive", author:"FrustratedDev", description:"Oh, you thought that would work? How cute."},
        {title: "C++: Memory Leaks Are a Feature", author:"LeakLover", description:"Who needs a garbage collector when you can just 'forget' to delete things?"},
        {title:"Bodybuilding for coders: Back Day is Overrated", author:"C Bum", description:"Max deadlifts are cool, but have you ever hit the perfect combination of vim commands without looking?"},
        {title:"Rust: The Language that forces you to care",author:"ReluctantPerfectionist",description:"Rust cares so much about your code being perfect it won't let you compile until it's satisfied"},
        {title:"Arch: Where every update is a roller coaster", author:"ArchAlchemist",description:"With Arch every update brings the fear of system breakage, it's like living on the edge"},
        {title:"Rust vs JavaScript",author:"Tom Nook",description:"Struggling to learn Rust, don't worry JavaScript is always here to accomidate for your skill issue"}
    ];

    render(){
        return(
            <div>
                {this.posts.map((post,index) =>( <Post key={index} title={post.title} description={post.description} author={post.author}/>))}
            </div>
        );
    }
}

