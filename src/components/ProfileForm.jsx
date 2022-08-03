import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';
import Loading from '../pages/Loading';
import { getUser, updateUser } from '../services/userAPI';
import Input from './Input';
import TextArea from './TextArea';
import userIcon from '../images/userIcon.svg';
import Button from './Button';
import getBase64Image from '../services/getBase64Image';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  color: #036B52;
  gap: 10px;
  min-width: 300px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
`;

const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

const FormHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const UserImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const SpanLabel = styled.span`
  font-family: 'Verdana', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  padding: 5px 0;
`;

const ProfileInput = styled(Input)`
  background: #242424;
  color: rgb(19, 155, 123);
  flex: 1 50%;
  &::placeholder {
    color: #036B52;
    opacity: 0.7;
  }
`;

export default class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      name: '',
      email: '',
      image: '',
      description: '',
      isDisabled: props.isDisabled,
      saveBtnDisabled: true,
      updated: false,
    };
  }

  componentDidMount() {
    this.isMount = true;
    const { name: stateName } = this.state;
    if (!stateName) {
      this.fetchUser();
    }
  }

  componentWillUnmount() {
    this.isMount = false;
  }

  fetchUser = async () => {
    if (this.isMount) {
      const { name, email, image, description } = await getUser();
      this.setState({
        name,
        email,
        image,
        description,
        loading: false,
      }, () => this.updateSaveBtnDisabled());
    }
  }

  updateSaveBtnDisabled = () => {
    this.setState({
      saveBtnDisabled: this.validateBtn(),
    });
  }

  handleChange = async ({ target }) => {
    const { name } = target;
    const value = target.type === 'file'
      ? await getBase64Image({ target })
      : target.value;
    this.setState({
      [name]: value,
    }, () => this.updateSaveBtnDisabled());
  }

  handleClick = () => {
    this.setState({
      loading: true,
    }, async () => {
      const {
        name,
        email,
        image,
        description,
      } = this.state;
      await updateUser({
        name,
        email,
        image,
        description,
      });
      if (this.isMount) {
        this.setState({
          loading: false,
          updated: true,
        });
      }
    });
  }

  validateBtn = () => {
    const { name, email, image, description,
    } = this.state;
    const regex = new RegExp('[a-z0-9]+@[a-z]+\\.[a-z]{2,3}');
    if (!regex.test(email)) return true;

    return !(name && email && image && description);
  }

  render() {
    const { loading, name, email,
      image,
      description,
      isDisabled,
      saveBtnDisabled,
      updated,
    } = this.state;
    if (updated) return <Redirect to="/profile" />;
    if (loading) return (<Loading width="50px" />);
    return (
      <Form>
        <FormHeader>
          <UserImg
            src={ image || userIcon }
            data-testid="profile-image"
          />
          {
            isDisabled
              ? (
                <Link to="/profile/edit">
                  <Button>
                    Editar perfil
                  </Button>
                </Link>
              )
              : (
                <ProfileInput
                  type="file"
                  name="image"
                  id="image"
                  filename={ image }
                  onChange={ this.handleChange }
                  data-testid="edit-input-image"
                />
              )
          }
        </FormHeader>
        <FormLabel htmlFor="name">
          <SpanLabel>Nome</SpanLabel>
          <ProfileInput
            data-testid="edit-input-name"
            type="text"
            name="name"
            id="name"
            value={ name }
            onChange={ this.handleChange }
            disabled={ isDisabled }
          />
        </FormLabel>
        <FormLabel htmlFor="email">
          <SpanLabel>E-mail</SpanLabel>
          <ProfileInput
            type="email"
            name="email"
            id="email"
            value={ email }
            onChange={ this.handleChange }
            disabled={ isDisabled }
            data-testid="edit-input-email"
          />
        </FormLabel>
        <FormLabel htmlFor="description">
          <SpanLabel>Descrição</SpanLabel>
          <TextArea
            name="description"
            id="description"
            value={ description }
            onChange={ this.handleChange }
            disabled={ isDisabled }
            data-testid="edit-input-description"
          />
        </FormLabel>
        {
          !isDisabled && (
            <Button
              onClick={ this.handleClick }
              data-testid="edit-button-save"
              disabled={ saveBtnDisabled }
            >
              Salvar
            </Button>
          )
        }
      </Form>
    );
  }
}
ProfileForm.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
};
