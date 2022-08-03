import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import AlbumCard from '../components/AlbumCard';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import Wrapper from '../components/Wrapper';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import getMusics from '../services/musicsAPI';
import Loading from './Loading';

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 115px);
  padding: 50px;
`;

const AlbumDisplay = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;

const MusicsDisplay = styled.div`
  display: flex;
  flex-direction: column;
`;

export default class Album extends Component {
  constructor() {
    super();
    this.state = {
      album: [],
      musics: [],
      favoriteSongs: [],
      render: false,
    };
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const [album, ...musics] = await getMusics(id);

    const favoriteSongs = await getFavoriteSongs();
    this.setState({
      album,
      musics,
      favoriteSongs,
    }, () => this.setState({
      render: true,
    }));
  }

  updateFavSongs = async () => {
    const favoriteSongs = await getFavoriteSongs();
    this.setState({
      favoriteSongs,
    });
  }

  render() {
    const { render } = this.state;
    const { album, musics } = this.state;
    const { collectionName, artistName, artworkUrl100 } = album;

    return (
      <Wrapper data-testid="page-album">
        <Header />
        <InnerWrapper>
          {
            !render
              ? <Loading />
              : (
                <AlbumDisplay>
                  <AlbumCard
                    collectionName={ collectionName }
                    artistName={ artistName }
                    artworkUrl100={ artworkUrl100 }
                  />
                  <MusicsDisplay>
                    {
                      musics.map(({ trackId, trackName, previewUrl }) => {
                        const { favoriteSongs } = this.state;
                        const checked = favoriteSongs
                          .some(({ trackId: favTrackId }) => trackId === favTrackId);
                        return (<MusicCard
                          key={ trackId }
                          trackId={ trackId }
                          trackName={ trackName }
                          previewUrl={ previewUrl }
                          checked={ checked }
                          updateFavSongs={ this.updateFavSongs }
                        />);
                      })
                    }
                  </MusicsDisplay>
                </AlbumDisplay>
              )
          }
        </InnerWrapper>
      </Wrapper>);
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
