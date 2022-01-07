import React, { useState } from 'react';
import styled from 'styled-components';
import { enableMotionSensor, enableOrientationSensor } from '../utils/phone-sensor';

import Burger from './burger/Burger';
import SwingingMenu from './swinging-menu/SwingingMenu';

import topBarTexture from '../assets/textures/Portfolio-top-bar.png';

const FrontViewWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
`;

const TopBar = styled.div`
  display: flex;
  width: 100%;
  height: 110px;
  position: sticky;
  top: 0;
  z-index: 10;
  background-image: url(${topBarTexture});
  background-repeat: repeat-x;
`;

const TopBarContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  margin: 0 1em;
  width: 100%;
  height: 70px;
`;

const TopBarButton = styled.div`
  background: rgba( 255, 255, 255, .40 );
  /* box-shadow: inset 3px 3px 5px rgba( 0, 0, 0, .75 ); */
  backdrop-filter: blur( 1px );
  -webkit-backdrop-filter: blur( 1px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, .18 );
  padding: .5em .75em;
  font-weight: bold;
  cursor: pointer;
  min-width: 25px;
  transition: all .3s linear;

  &:hover {
    box-shadow: inset 3px 3px 5px rgba( 0, 0, 0, .75 );
    /* background: rgba( 255, 255, 255, .25 ); */
  }

  &.active {
    background: rgba( 0, 255, 141, .40 );

    &:hover {
      box-shadow: inset 3px 3px 5px rgba( 0, 0, 0, .75 );
      /* background: rgba( 0, 255, 141, .25); */
    }
  }
`;

const FrontView = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const enableSensor = () => {
    enableMotionSensor().then(
      enableOrientationSensor().then(
        console.log('Access granted')
      ).catch((e) => {
        console.error(e);
      })
    ).catch((e) => {
      console.error(e);
    });
  };

  return (
    <FrontViewWrapper>
      <TopBar>
        <TopBarContent>
          <Burger open={menuVisible} setOpen={setMenuVisible} />
          <TopBarButton onClick={enableSensor}>
            Enable sensor
          </TopBarButton>
        </TopBarContent>
      </TopBar>
      <SwingingMenu isVisible={menuVisible} />
    </FrontViewWrapper>
  );
}

export default FrontView;
