import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Wrapper from '../components/Wrapper';
import Input from '../components/Input';
import Button from '../components/Button';
import ResultsContent from '../components/ResultsContent';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from './Loading';

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
  padding-bottom: 10px;
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
      searchValue: '',
      searchResult: [],
      searchStatus: false,
      shouldRender: false,
      loading: false,
    };
  }

  componentDidMount() {
    this.isMount = true;
  }

  componentWillUnmount() {
    this.isMount = false;
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
    if (this.isMount) {
      const { inputValue } = this.state;
      this.setState({
        loading: true,
        searchValue: inputValue,
        inputValue: '',
      }, async () => {
        const response = await searchAlbumsAPI(inputValue);
        const status = response.length === 0;
        this.setState({
          loading: false,
          searchResult: response,
          searchStatus: !status,
          shouldRender: true,
        });
      });
    }
  }

  render() {
    const {
      inputValue,
      isBtnDisabled,
      searchValue,
      searchResult,
      searchStatus,
      shouldRender,
      loading } = this.state;
    return (
      <Wrapper data-testid="page-search">
        <Header />
        <InnerWrapper>
          {
            loading
              ? <Loading />
              : (
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
              )
          }
          {
            shouldRender
              && (
                <ResultsContent
                  searchValue={ searchValue }
                  searchResult={ searchResult }
                  searchStatus={ searchStatus }
                />)
          }
        </InnerWrapper>
      </Wrapper>);
  }
}
