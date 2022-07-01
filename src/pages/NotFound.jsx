import React, { Component } from 'react';
import Wrapper from '../components/Wrapper';

export default class NotFound extends Component {
  render() {
    return (
      <Wrapper data-testid="page-not-found">
        <h1>NotFound</h1>
      </Wrapper>);
  }
}
