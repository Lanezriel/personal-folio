import React from 'react';
import PropTypes from 'prop-types';
import { StyledBackLayer } from './BackLayer.styled';

const BackLayer = ({ backgroundImage }) => {
  return (
    <StyledBackLayer backgroundImage={backgroundImage} />
  );
};

BackLayer.propTypes = {
  backgroundImage: PropTypes.node.isRequired,
};

export default BackLayer;
