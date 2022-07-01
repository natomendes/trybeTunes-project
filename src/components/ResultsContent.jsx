import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AlbumCard from './AlbumCard';

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  flex-wrap: wrap;
  gap: 20px;
  padding-top: 20px;
`;

export default class ResultsContent extends Component {
  render() {
    const { searchValue, searchResult, searchStatus } = this.props;

    if (!searchStatus) return (<p>Nenhum álbum foi encontrado</p>);

    return (
      <>
        <h2>{`Resultado de álbuns de: ${searchValue}`}</h2>
        <ContentWrapper>
          {
            searchResult.map((album) => (
              <Link
                to={ `/album/${album.collectionId}` }
                key={ album.collectionId }
                data-testid={ `link-to-album-${album.collectionId}` }
              >
                <AlbumCard
                  collectionName={ album.collectionName }
                  artistName={ album.artistName }
                  artworkUrl100={ album.artworkUrl100 }
                />
              </Link>))
          }

        </ContentWrapper>
      </>
    );
  }
}

ResultsContent.propTypes = {
  searchValue: PropTypes.string.isRequired,
  searchResult: PropTypes.arrayOf(PropTypes.shape({
    artistId: PropTypes.number,
  })).isRequired,
  searchStatus: PropTypes.bool.isRequired,
};
