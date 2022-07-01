import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  align-items: center;
  color: white;
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  padding: 10px;
  border-top: 1px solid rgba(255,255,255, 0.3);
  border-bottom: 1px solid rgba(255,255,255, 0.3); 
`;

const MusicName = styled.p`
  font-family: 'Verdana', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
`;

export default class MusicCard extends Component {
  render() {
    const { trackName, previewUrl } = this.props;
    return (
      <ContentWrapper>
        <MusicName>{trackName}</MusicName>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          <code>audio</code>
          .
        </audio>
      </ContentWrapper>
    );
  }
}

MusicCard.propTypes = {
  previewUrl: PropTypes.string.isRequired,
  trackName: PropTypes.string.isRequired,
};
