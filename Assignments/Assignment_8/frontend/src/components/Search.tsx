import React from 'react'

interface SearchProps {
    onSearch: (name: string) => void;
}

interface IState {
    error? : string;
}

export class Search extends React.Component<SearchProps,IState> {
    private searchRef : React.RefObject<HTMLInputElement>;

    constructor(props : SearchProps) {
        super(props);
        this.state = {error:""};
        this.searchRef = React.createRef(); 
        this.findPokemon = this.findPokemon.bind(this);
    }

    findPokemon(e: React.FormEvent) : void {
        e.preventDefault();
        const search_term : string | undefined = this.searchRef.current?.value.trim();
        if(!search_term) {
            this.setState({error:"Search term is empty."});
            return;
        } else if(/\d/.test(search_term)) {
            this.setState({error:"Name cannot contain numbers."});
            return;
        }
        this.props.onSearch(search_term);
    }

    render() {
        return(
            <div>
                <form>
                    <input type="text" name="search" placeholder="Search Pokemon Name..." ref={this.searchRef}/>
                    {this.state.error && <p style={{ color: 'red' }}>{this.state.error}</p>}
                    <button onClick={this.findPokemon}>Search</button>
                </form>
            </div>
        );
    }
}
