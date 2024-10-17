import React from 'react'

interface SearchProps {
    onSearch: (searchTerm: string) => void;
}

export class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            search_term:""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.findPokemon = this.findPokemon.bind(this);
    }

    findPokemon(e: React.FormEvent) {
        e.preventDefault();
        this.props.onSearch(this.state.search_term);
    }

    handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({search_term: e.target.value});
    }

    render() {
        return(
            <div>
                <form>
                    <input type="text" name="search" placeholder="Search Pokemon Name..." value={this.state.search_term} onChange={this.handleInputChange}/>
                    <button onClick={this.findPokemon}>Search</button>
                </form>
            </div>
        );
    }
}
