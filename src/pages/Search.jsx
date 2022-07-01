import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Wrapper from '../components/Wrapper';
import Input from '../components/Input';
import Button from '../components/Button';

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 115px);
  padding: 50px;
`;

const SearchForm = styled.form`
  display: flex;
  width: 50%;
  gap: 10px;
`;

const SearchInput = styled(Input)`
  background: #242424;
  color: rgb(19, 155, 123);
  flex: 1 50%;
  &::placeholder {
    color: #036B52;
    opacity: 0.7;
  }
`;

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      isBtnDisabled: true,
      inputValue: '',
    };
  }

  validateButton = () => {
    const { inputValue } = this.state;
    const minLen = 2;

    return inputValue.length < minLen;
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => this.setState({
      isBtnDisabled: this.validateButton(),
    }));
  }

  handleClick = (event) => {
    event.preventDefault();
  }

  render() {
    const { inputValue, isBtnDisabled } = this.state;
    return (
      <Wrapper data-testid="page-search">
        <Header />
        <InnerWrapper>
          <SearchForm>
            <SearchInput
              placeholder="O Que você está buscando?"
              name="inputValue"
              value={ inputValue }
              onChange={ this.handleChange }
              data-testid="search-artist-input"
            />
            <Button
              data-testid="search-artist-button"
              onClick={ this.handleClick }
              disabled={ isBtnDisabled }
            >
              Pesquisar
            </Button>
          </SearchForm>
        </InnerWrapper>
      </Wrapper>);
  }
}
