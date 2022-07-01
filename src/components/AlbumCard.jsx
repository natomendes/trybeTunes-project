import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  display: flex;
  background: rgba(255,255,255, 0.1);
  width: 290px;
  flex-direction: column;
  flex: 1 22%;
  min-height: 320px;
  border-radius: 5px;
  overflow: hidden;
  &:hover {
    box-shadow: 0 0 12px #719ECE;
  }

`;

const ImageWrapper = styled.div`
  max-width: 290px;
  max-height: 180px;
  overflow: hidden;
`;

const AlbumImage = styled.img`
  width: 100%;
`;

const AlbumName = styled.p`
  font-family: 'Verdana', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  padding: 10px;
`;

const ArtistName = styled.p`
font-family: 'Verdana', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 14px;
padding: 10px;
`;

export default class AlbumCard extends Component {
  render() {
    const { collectionName, artistName, artworkUrl100 } = this.props;
    return (
      <ContentWrapper>
        <ImageWrapper>
          <AlbumImage src={ artworkUrl100 } />
        </ImageWrapper>
        <AlbumName>{ `Album: ${collectionName}` }</AlbumName>
        <ArtistName>{ `Artist: ${artistName}` }</ArtistName>
      </ContentWrapper>
    );
  }
}

AlbumCard.propTypes = {
  artistName: PropTypes.string.isRequired,
  artworkUrl100: PropTypes.string.isRequired,
  collectionName: PropTypes.string.isRequired,
};
