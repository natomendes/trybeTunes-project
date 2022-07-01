import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import NavItem from './NavItem';
import '../styles/NavBar.css';

const NavigationBar = styled.nav`
  width: 100%;
  display: flex;
  background: #1b1b1b;
  gap: 2px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

class NavBar extends Component {
  render() {
    return (
      <NavigationBar className="NavBar">
        <NavLink
          to="/search"
          data-testid="link-to-search"
          activeStyle={ {
            background: '#036B52',
            color: 'white',
          } }
        >
          <NavItem navText="Pesquisa" />
        </NavLink>
        <NavLink
          to="/favorites"
          data-testid="link-to-favorites"
          activeStyle={ {
            background: '#036B52',
            color: 'white',
          } }
        >
          <NavItem navText="Favoritas" />
        </NavLink>
        <NavLink
          to="/profile"
          data-testid="link-to-profile"
          activeStyle={ {
            background: '#036B52',
            color: 'white',
          } }
        >
          <NavItem navText="Perfil" />
        </NavLink>
      </NavigationBar>
    );
  }
}

export default NavBar;
