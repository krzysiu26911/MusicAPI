import React, { Component } from 'react';

export default class ArtistList extends Component {
    renderArtist = (artist, index) => {
      if (index < 30) {
        return (
          <li key={index} onClick={() => { this.props.getSelectedArtist(artist.mbid); }}>
            {artist.name}
          </li>
        );
      }
      return null;
    };

    render() {
      return (
        <ul>
          {this.props.artists ? (this.props.artists.map(this.renderArtist)
                ) : (
                  <li>Opps no results</li>
                    )}
        </ul>
      );
    }
}
