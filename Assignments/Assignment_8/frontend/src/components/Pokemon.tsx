import React from 'react';

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

interface Props {
    pokemon : PokemonObj;
}

export class Pokemon extends React.Component<Props> {

    constructor(props:Props) {
        super(props);
    }

    render() {
        return(
            <div> 
                <h2>{this.props.pokemon.name} #{this.props.pokemon.id}</h2>
                <p>Height: {this.props.pokemon.height}</p>
                <p>Weight: {this.props.pokemon.weight}</p>
                <p>Types: {this.props.pokemon.types.map((type : {type : {name:string}},index:number) => (<span key={index}>{type.type.name}{index < this.props.pokemon.types.length -1 && ', '} </span>))}</p>
            </div>
        );
    }
}
