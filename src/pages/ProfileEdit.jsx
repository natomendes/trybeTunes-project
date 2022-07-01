import React, { Component } from 'react';
import Header from '../components/Header';
import Wrapper from '../components/Wrapper';

export default class ProfileEdit extends Component {
  render() {
    return (
      <Wrapper data-testid="page-profile-edit">
        <Header />
        <h1>ProfileEdit</h1>
      </Wrapper>);
  }
}
