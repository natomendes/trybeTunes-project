import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import AlbumCard from '../components/AlbumCard';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import Wrapper from '../components/Wrapper';
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
      render: false,
      loading: false,
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const response = await getMusics(id);
    const [album] = response;
    const [, ...musics] = response;
    this.setState({
      album,
      musics,
    }, () => this.setState({
      render: true,
    }));
  }

  toggleRender = () => this.setState(({ loading: prevRender }) => ({
    loading: !prevRender,
  }))

  render() {
    const { render } = this.state;
    if (!render) return <Loading />;
    const { album, musics, loading } = this.state;
    const { collectionName, artistName, artworkUrl100 } = album;

    return (
      <Wrapper data-testid="page-album">
        <Header />
        <InnerWrapper>
          {
            loading
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
                      musics.map(({ trackId, trackName, previewUrl }) => (<MusicCard
                        key={ trackId }
                        trackId={ trackId }
                        trackName={ trackName }
                        previewUrl={ previewUrl }
                        toggleRender={ this.toggleRender }
                      />))
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
