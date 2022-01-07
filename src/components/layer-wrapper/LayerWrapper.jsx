import React from 'react';
import PropTypes from 'prop-types';

import { StyledLayerWrapper } from './LayerWrapper.styled';

const LayerWrapper = ({ children, dataDepth }) => {
  return (
    <StyledLayerWrapper data-depth={dataDepth}>
      {children}
    </StyledLayerWrapper>
  );
};

LayerWrapper.propTypes = {
  children: PropTypes.element.isRequired,
  dataDepth: PropTypes.number.isRequired,
};

export default LayerWrapper
