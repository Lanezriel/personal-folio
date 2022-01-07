import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { enableSensor, iOSSafari } from '../../utils/phone-sensor';

import { StyledFrontView } from './FrontView.styled';

import TopBar from './top-bar/TopBar';
import SwingingMenu from './swinging-menu/SwingingMenu';
import MobileMenu from '../mobile-menu/MobileMenu';

const FrontView = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [sensorActive, setSensorActive] = useState(false);
  const [isIOSSafari, setIsIOSSafari] = useState(false);

  const isSmallScreen = useMediaQuery({maxWidth: 768})

  const checkSensor = (userTriggered = false) => {
    enableSensor()
      .then(res => {
        if (res === 'RELOAD' && userTriggered) {
          window.location.reload(true);
        }

        setSensorActive(true);
      })
      .catch(err => {
        console.error(err);
      });
  }

  useEffect(() => {
    checkSensor();
    setIsIOSSafari(iOSSafari());
  }, []);

  return (
    <StyledFrontView>
      <TopBar
        menuVisible={menuVisible}
        setMenuVisible={setMenuVisible}
        checkSensor={checkSensor}
        sensorActive={sensorActive}
        isIOSSafari={isIOSSafari}
        isSmallScreen={isSmallScreen}
      />
      {isSmallScreen ? (
        <MobileMenu isVisible={menuVisible} />
      ) : (
        <SwingingMenu isVisible={menuVisible} />
      )}
    </StyledFrontView>
  );
}

export default FrontView;
