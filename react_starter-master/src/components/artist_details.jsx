import React from 'react';

export default class ArtistDetails extends React.Component {
  renderArtist=(props) => {
    console.log(props);
    if ((props.artist && props.albums) == null) {
      return 'wybierz';
    }
    return (
      <div>
        <div> {props.artist.name}</div >
        <img src={props.artist.image[2]['#text']} alt="Artist" />
        <div> {props.artist.bio.summary}</div>
        <div>
          {
            props.albums.album.map(this.renderAlbum)
          }
        </div>
      </div>
    );
  }
  renderAlbum = (album, index) => {
    if (index == null) {
      return null;
    }
    return (
      <li key={index}>
        {album.name}
        <img src={album.image[2]['#text']} alt="Album" />
      </li>
    );
  };

  render() {
    return (
      <div>
        {this.renderArtist(this.props)}
      </div>);
  }
}
