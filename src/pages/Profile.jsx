import React, { Component } from 'react';
import Header from '../components/Header';
import Wrapper from '../components/Wrapper';

export default class Profile extends Component {
  render() {
    return (
      <Wrapper data-testid="page-profile">
        <Header />
        <h1>Profile</h1>
      </Wrapper>);
  }
}
