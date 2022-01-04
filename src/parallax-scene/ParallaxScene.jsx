import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Parallax from 'parallax-js';

import homeBg from '../assets/backgrounds/home-bg.jpg';

const ParallaxSceneWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const LayerWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const BackLayer = styled.div`
  position: relative;
  top: -5%;
  left: -5%;
  width: 110%;
  height: 110%;
  background-image: url(${homeBg});
  background-size: cover;
`;

function ParallaxScene() {
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
    <ParallaxSceneWrapper ref={sceneRef}>
      <LayerWrapper data-depth="0.1">
        <BackLayer />
      </LayerWrapper>
      <LayerWrapper data-depth="0.7">
        <div style={{
            textAlign:'center',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            height:'25%',
            width:'25%',
            position:'relative',
            top:'50%',
            left:'50%',
            transform: 'translate(-50%, -50%)',
            margin:0,
            background: 'rgba( 255, 255, 255, 0.35 )',
            boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
            backdropFilter: 'blur( 6px )',
            WebkitBackdropFilter: 'blur( 6px )',
            borderRadius: '15px',
            border: '2px solid rgba( 255, 255, 255, 0.18 )',
          }}
        >
          <h3>Je suis la page</h3>
        </div>
      </LayerWrapper>
    </ParallaxSceneWrapper>
  );
}

export default ParallaxScene;
