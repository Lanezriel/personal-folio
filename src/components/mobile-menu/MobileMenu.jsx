import React from 'react';
import PropTypes from 'prop-types';

import { StyledMobileMenu } from './MobileMenu.styled';

const MobileMenu = ({ isVisible }) => {
  return (
    <StyledMobileMenu open={isVisible}>
      <div className="wrapper">
        <h1>I'm the menu</h1>
        <p>Line 1</p>
        <p>Line 2</p>
        <p>Line 3</p>
        <p>Line 4</p>
        <p>Line 5</p>
        <p>Line 6</p>
      </div>
    </StyledMobileMenu>
  );
};

MobileMenu.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export default MobileMenu;
