import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import ProfileForm from '../components/ProfileForm';
import Wrapper from '../components/Wrapper';

const InnerWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 115px);
  padding-top: 30px;
`;

export default class Profile extends Component {
  render() {
    return (
      <Wrapper data-testid="page-profile">
        <Header />
        <InnerWrapper>
          <ProfileForm isDisabled />
        </InnerWrapper>
      </Wrapper>);
  }
}
