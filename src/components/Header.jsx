import React, { Component } from 'react';
import { getUser } from '../services/userAPI';
import HeaderElement from './HeaderElement';
import NavBar from './NavBar';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      userImg: '',
    };
  }

  componentDidMount() {
    this.getUserName();
  }

  getUserName = async () => {
    const userObj = await getUser();
    const { name, image } = userObj;
    this.setState({
      userName: name,
      userImg: image,
    });
  }

  render() {
    const { userName, userImg } = this.state;
    return (
      <>
        <HeaderElement
          data-testid="header-component"
          userName={ userName }
          userImg={ userImg }
        />
        <NavBar />
      </>
    );
  }
}
