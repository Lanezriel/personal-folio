import React, { useState } from 'react';
import styled from 'styled-components';
import { enableSensor } from '../utils/phone-sensor';

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

const MenuToggler = styled.div`
  border-radius: 5px;
  padding: .5em;
  background: #999;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #888888;
  }
`;

const SensorEnabler = styled.div`
  padding: .5em;
  cursor: pointer;
  background: #999;
  font-weight: bold;
  border-radius: 5px;

  &:hover {
    background: #888;
  }
`;

function FrontView() {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <FrontViewWrapper>
      <TopBar>
        <TopBarContent>
          <TopBarButton onClick={() => setMenuVisible(!menuVisible)} className={menuVisible && "active"}>
            {menuVisible ? 'X' : 'O'}
          </TopBarButton>
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
