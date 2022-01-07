import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { StyledTopBar } from './TopBar.styled';

import Burger from '../../burger/Burger';

const TopBar = ({ menuVisible, setMenuVisible, checkSensor, sensorActive, isIOSSafari }) => {
  return (
    <StyledTopBar>
      <div className="burger">
        <Burger open={menuVisible} setOpen={setMenuVisible} />
      </div>
      <div className="top-bar-content">
        <Link to='/'>Home</Link>
        <Link to='/experience'>Experience</Link>
        <Link to='/contact'>Contact</Link>
      </div>
      {(!sensorActive || isIOSSafari) &&
        <div className="special-button" onClick={checkSensor}>
          {sensorActive ? 'Reset sensor' : 'Enable sensor'}
        </div>
      }
    </StyledTopBar>
  );
};

TopBar.propTypes = {
  menuVisible: PropTypes.bool.isRequired,
  setMenuVisible: PropTypes.func.isRequired,
  checkSensor: PropTypes.func.isRequired,
  sensorActive: PropTypes.bool.isRequired,
  isIOSSafari: PropTypes.bool.isRequired,
};

export default TopBar;
