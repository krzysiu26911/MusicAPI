import React, { Component } from 'react';

class SearchBar extends Component {
    state = {
      text: '',
    };

    updateText = (e) => {
      this.setState({ text: e.target.value });
      this.props.getArtists(this.state.text);
    };

    render() {
      return (
        <input
          type="text"
          className="searchBar"
          placeholder="Enter name of your favourite artist"
          value={this.state.text}
          onChange={this.updateText}
        />
      );
    }
}

export default SearchBar;
