import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

const NavElement = styled.div`
  width: 100%;
  padding: 10px;
`;

const NavText = styled.h2`
  font-family: 'Epilogue', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 29px;

`;

export default class NavItem extends Component {
  render() {
    const { navText } = this.props;
    return (
      <NavElement>
        <NavText>{navText}</NavText>
      </NavElement>
    );
  }
}

NavItem.propTypes = {
  navText: PropTypes.string.isRequired,
};
