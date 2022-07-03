import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Wrapper from '../components/Wrapper';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from './Loading';
import MusicCard from '../components/MusicCard';

const MusicsDisplay = styled.div`
  display: flex;
  flex-direction: column;
  align-self:center;
`;

const FavTitle = styled.h2`
  color: white;
  text-align: center;
  font-family: 'Verdana', sans-serif;
  padding: 20px 0;
`;

export default class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      favoriteSongs: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.getFavSongs();
  }

  getFavSongs = async () => {
    const favoriteSongs = await getFavoriteSongs();
    this.setState({
      favoriteSongs,
      loading: false,
    });
  }

  updateFavSongs = () => {
    this.setState({
      loading: true,
    }, () => this.getFavSongs());
  }

  render() {
    const { favoriteSongs, loading } = this.state;

    return (
      <Wrapper data-testid="page-favorites">
        <Header />
        <FavTitle>Musicas Favoritas</FavTitle>
        {
          loading ? <Loading width="60px" />
            : (
              <MusicsDisplay>
                {
                  favoriteSongs.map(({
                    trackId,
                    trackName,
                    previewUrl,
                  }) => (<MusicCard
                    key={ trackId }
                    trackId={ trackId }
                    trackName={ trackName }
                    previewUrl={ previewUrl }
                    updateFavSongs={ this.updateFavSongs }
                  />))
                }
              </MusicsDisplay>
            )
        }
      </Wrapper>);
  }
}
