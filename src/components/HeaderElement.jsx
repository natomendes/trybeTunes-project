import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import logo2 from '../images/logo2.png';
import userIcon from '../images/userIcon.svg';

const HeaderElement = styled.header`
  width: 100%;
  background: #023031;
  box-shadow: 0px 4px 1px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
`;

const LogoImg = styled.div`
  background: url(${logo2}) no-repeat center;
  background-size: auto;
  width: 117px;
  height: 44px;
`;

const UserBar = styled.div`
   padding: 4px 15px 4px 4px;
   border-radius: 50px;
   border: 1px solid rgb(19, 155, 123);
   display: flex;
   background: rgb(50, 50, 50);
   align-items: center;
   gap: 10px;
`;

const UserBarText = styled.h2`
  font-family: 'Epilogue';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  color: white;
  flex: 1 40%;
  text-align: center;
`;

const UserIcon = styled.img`
  height: 35px;
`;

export default class HElement extends Component {
  render() {
    const { userName } = this.props;
    return (
      <HeaderElement data-testid="header-component">
        <LogoImg />
        <UserBar>
          <UserIcon
            src={ userIcon }
          />
          <UserBarText data-testid="header-user-name">
            {userName || 'Carregando...'}
          </UserBarText>
        </UserBar>
      </HeaderElement>

    );
  }
}

HElement.propTypes = {
  userName: PropTypes.string.isRequired,
};
