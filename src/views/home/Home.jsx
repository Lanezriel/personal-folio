import React from 'react';

import ParallaxScene from '../../components/parallax-scene/ParallaxScene';
import LayerWrapper from '../../components/layer-wrapper/LayerWrapper';
import BackLayer from '../../components/back-layer/BackLayer';

import homeBg from '../../assets/backgrounds/home-bg.jpg';

const Home = () => {
  return (
    <ParallaxScene>
      <LayerWrapper dataDepth={0.1}>
        <BackLayer backgroundImage={homeBg} />
      </LayerWrapper>
      <LayerWrapper dataDepth={0.7}>
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
    </ParallaxScene>
  );
};

export default Home;
