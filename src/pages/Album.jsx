import React, { Component } from 'react';
import Header from '../components/Header';
import Wrapper from '../components/Wrapper';

export default class Album extends Component {
  render() {
    return (
      <Wrapper data-testid="page-album">
        <Header />
        <h1>Album</h1>
      </Wrapper>);
  }
}
