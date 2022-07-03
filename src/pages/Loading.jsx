import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import loading from '../images/loading.svg';

const LoadingWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const LoadingText = styled.p`
  display: none;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const LoadingIcon = styled.img.attrs({
  src: loading,
})`
  width: ${(props) => props.width};
  animation: ${rotate} 2s linear infinite;
`;

export default class Loading extends Component {
  render() {
    const { width } = this.props;
    return (
      <LoadingWrapper>
        <LoadingText>Carregando...</LoadingText>
        <LoadingIcon width={ width } />
      </LoadingWrapper>
    );
  }
}

Loading.propTypes = {
  width: PropTypes.string,
};

Loading.defaultProps = {
  width: '50px',
};
