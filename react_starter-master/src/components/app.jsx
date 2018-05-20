import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './search_bar';
import ArtistList from './artist_list';
import ArtistDetails from './artist_details';

const API_KEY = '';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
      selectedArtist: null,
      ArtistTopAlbums: null,
    };
  }

  componentWillMount() {

  }

  getArtists = (query) => {
    axios
      .post(`http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${query}&api_key=${API_KEY}&format=json`)
      .then((data) => {
        const artists = data.data.results.artistmatches.artist;
        this.setState({
          artists,
        });
        // console.log(data)
        console.log(`getArtists${artists}`);
      });
  // To DO error description
  }

  getSelectedArtist = (query) => {
    axios
      .post(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&mbid=${query}&api_key=${API_KEY}&format=json`)
      .then((data) => {
        const selectedArtist = data.data.artist;
        this.setState({
          selectedArtist,
        });
        console.log('click');
        // console.log(query);
        // console.log(`getArtistObject ${JSON.stringify(selectedArtist)}`);
      });
    axios
      .post(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&mbid=${query}&api_key=${API_KEY}&format=json`)
      .then((data) => {
        const ArtistTopAlbums = data.data.topalbums;
        this.setState({
          ArtistTopAlbums,
        });
      });
  };

  render() {
    return (
      <div >
        <SearchBar getArtists={this.getArtists} />
        <ArtistList artists={this.state.artists} getSelectedArtist={this.getSelectedArtist} />
        <ArtistDetails artist={this.state.selectedArtist} albums={this.state.ArtistTopAlbums} />
      </div>
    );
  }
}
