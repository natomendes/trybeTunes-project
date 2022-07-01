import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './Button';
import Input from './Input';
import logo from '../images/logo.svg';

const LoginContent = styled.div`
  height: calc(100vh - 30px);
  background: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  padding: 20px;
`;

const LogoImg = styled.div`
  background: url(${logo}) no-repeat center;
  background-size: auto;
  width: 208px;
  height: 158px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  width: 450px;
  height: 250px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  padding: 0 20px;
  background: rgba(255, 255, 255, 0.60)
`;

export default class LoginContents extends Component {
  render() {
    const {
      userName,
      handleChange,
      isBtnDisabled,
      submitForm,
    } = this.props;
    return (
      <LoginContent>
        <LogoImg />
        <LoginForm>
          <Input
            value={ userName }
            onChange={ handleChange }
            type="text"
            name="userName"
            id="userName"
            data-testid="login-name-input"
            placeholder="Name"
          />
          <Button
            type="submit"
            data-testid="login-submit-button"
            disabled={ isBtnDisabled }
            onClick={ submitForm }
          >
            Entrar
          </Button>
        </LoginForm>
      </LoginContent>);
  }
}

LoginContents.propTypes = {
  handleChange: PropTypes.func.isRequired,
  isBtnDisabled: PropTypes.bool.isRequired,
  submitForm: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
};
