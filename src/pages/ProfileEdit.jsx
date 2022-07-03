import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Wrapper from '../components/Wrapper';
import ProfileForm from '../components/ProfileForm';

const InnerWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 115px);
  padding-top: 30px;
`;

export default class ProfileEdit extends Component {
  render() {
    return (
      <Wrapper data-testid="page-profile-edit">
        <Header />
        <InnerWrapper>
          <ProfileForm isDisabled={ false } />
        </InnerWrapper>
      </Wrapper>);
  }
}
