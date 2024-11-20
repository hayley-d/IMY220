import React from "react";

export class Search extends React.Component {
    constructor(props) {
        super(props);
        this.searchRef = React.createRef();
        this.handleSearch = this.handleSearch.bind(this);
    }

    // Gets the ref and sends it up into the parent function.
    handleSearch() {
        const term = this.searchRef.current.value;
        this.props.onSearch(term);
    }

    render() {
        return (
            <div>
                {/*ref attribute used to track the ref*/}
                <input type="text" placeholder="Search an event" ref={this.searchRef} />
                <button onClick={this.handleSearch}>Search</button>
            </div>
        );
    }
}
