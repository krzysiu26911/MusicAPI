import React from 'react';

export default class ArtistDetails extends React.Component {
  renderArtist=(props) => {
    console.log(props);
    if ((props.artist && props.albums && props.tracks) == null) {
      return 'wybierz';
    }
    return (
      <div>
        <div> {props.artist.name}</div >
        <img src={props.artist.image[2]['#text']} alt="Artist" />
        <div> {props.artist.bio.summary}</div>
        <div>{props.albums.album.map(this.renderAlbum)}</div>
        <div>{props.tracks.track.map(this.renderTracks)}</div>
      </div>
    );
  }
  renderAlbum = (album, index) => {
    if (index < 10) {
      return (
        <li key={index}>
          {album.name}
          <img src={album.image[2]['#text']} alt="Album" />
        </li>
      );
    }

    return null;
  };
  renderTracks = (track, index) => {
    if (index < 10) {
      return (
        <li key={index}>
          {track.name}
          {track.playcount}
          {track.listeners}
          {track.url}
        </li>
      );
    }

    return null;
  };

  render() {
    return (
      <div>
        {this.renderArtist(this.props)}
      </div>);
  }
}
