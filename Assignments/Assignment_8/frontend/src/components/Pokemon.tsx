import React from 'react';

/**
 * Pokemon interface defines the structure of a Pokemon object type.
 */
interface Pokemon {
    id : number;
    name: string;
    height: number;
    weight: number;
    type : string[];
}

export class Pokemon extends React.Component<Pokemon> {

    constructor(props:Pokemon) {
        super(props);
    }

    render() {
        const { id, name, height, weight, types } = this.props;
        return(
            <div> 
                <h2>{name} #{id}</h2>
                <p>Height: {height}</p>
                <p>Weight: {weight}</p>
                <p>Types: {types.map((type,index) => (<span key={index}>{type}{index < types.length -1 && ', '} </span>))}</p>
            </div>
        );
    }
}
