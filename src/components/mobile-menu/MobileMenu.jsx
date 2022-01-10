import React from 'react';
import PropTypes from 'prop-types';

import { StyledMobileMenu } from './MobileMenu.styled';

const MobileMenu = ({ isVisible }) => {
  return (
    <StyledMobileMenu open={isVisible}>
      <div className="wrapper">
        <h1>I'm the menu</h1>
        <div className="content">
          <h2>Line 1</h2>
          <h2>Line 2</h2>
          <h2>Line 3</h2>
          <h2>Line 4</h2>
          <h2>Line 5</h2>
          <h2>Line 6</h2>
          <h2>Line 7</h2>
        </div>
      </div>
    </StyledMobileMenu>
  );
};

MobileMenu.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export default MobileMenu;
