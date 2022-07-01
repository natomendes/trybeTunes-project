import React, { Component } from 'react';
import Header from '../components/Header';
import Wrapper from '../components/Wrapper';

export default class Favorites extends Component {
  render() {
    return (
      <Wrapper data-testid="page-favorites">
        <Header />
        <h1>Favorites</h1>
      </Wrapper>);
  }
}
