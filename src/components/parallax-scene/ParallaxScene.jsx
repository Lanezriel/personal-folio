import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Parallax from 'parallax-js';

import { StyledParallaxScene } from './ParallaxScene.styled';

const ParallaxScene = ({ children }) => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const parallaxInstance = new Parallax(sceneRef.current, {
      relativeInput: true,
      hoverOnly: true,
      scalarX: 15,
      scalarY: 10,
    })
  
    parallaxInstance.enable();
  
    return () => parallaxInstance.disable();
  }, []);
  
  return (
    <StyledParallaxScene ref={sceneRef}>
      {children}
    </StyledParallaxScene>
  );
}

ParallaxScene.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ParallaxScene;
