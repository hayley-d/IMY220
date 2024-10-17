import fetch from 'node-fetch';

/**
 * Interface defining the structure of a pokemon object.
 */
interface PokemonEntity {
    id: number;
    name: string;
    height: number;
    weight: number;
    types: { type: { name: string } }[];
}

/**
 * Function to fetch a Pokemon by name from the PokeAPI.
 */
export default async function fetchPokemon(name: string): Promise<PokemonEntity | null> {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
        
        if (!response.ok) {
            console.error(`Pokemon "${name}" not found`);
            return null;
        }

        const data: PokemonEntity = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching Pokemon:', error);
        return null;
    }
}

module.exports = {fetchPokemon};
