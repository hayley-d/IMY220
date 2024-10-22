import React from 'react';
import {Search} from './Search';
import {Pokemon} from './Pokemon';
/**
 * Pokemon interface defines the structure of a Pokemon object type.
 */
interface PokemonObj {
    id : number;
    name: string;
    height: number;
    weight: number;
    types : { type: { name: string } }[];
}

interface IState {
    pokemon : PokemonObj | null;
}

export class PokemonApp extends React.Component<{},IState> {
    constructor(props:{}) {
        super(props);
        this.state = {pokemon:null};
        this.findPokemon = this.findPokemon.bind(this);
    }

    async findPokemon(name:string) : Promise<void> {
        try {
            const res: PokemonObj | null = await fetch(`http://localhost:3001/api/${name}`)
                .then(response => response.json())
                .then(data => {return data;})
                .catch(err =>{
                    console.log(err.message);
                    return null;
                });
            if(res) {
                this.setState({pokemon:res});
            }
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        return( 
                <div>
                    <h1>Pokemon Finder</h1>
                    <Search onSearch={this.findPokemon}/>
                    {this.state.pokemon && <Pokemon pokemon={this.state.pokemon}/>}
                </div>
        );
    }
}
