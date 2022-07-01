import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Loading from './Loading';
import { createUser } from '../services/userAPI';
import Wrapper from '../components/Wrapper';
import LoginContent from '../components/LoginContent';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      isBtnDisabled: true,
      loading: false,
      userCreated: false,
    };
  }

  componentDidMount() {
    this.isMount = true;
  }

  componentWillUnmount() {
    this.isMount = false;
  }

  validateInput = () => {
    const { userName } = this.state;
    const minLength = 3;
    return userName.length < minLength;
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.setState({
      isBtnDisabled: this.validateInput(),
    }));
  }

  submitForm = () => {
    this.setState({
      loading: true,
    }, async () => {
      const { userName: name } = this.state;
      await createUser({ name });
      if (this.isMount) {
        this.setState({
          userCreated: true,
        });
      }
    });
  }

  render() {
    const {
      userName,
      isBtnDisabled,
      loading,
      userCreated,
    } = this.state;

    if (userCreated) return <Redirect to="/search" />;
    if (loading) return <Loading />;
    return (
      <Wrapper data-testid="page-login">
        <LoginContent
          userName={ userName }
          handleChange={ this.handleChange }
          isBtnDisabled={ isBtnDisabled }
          submitForm={ this.submitForm }
        />
      </Wrapper>);
  }
}
