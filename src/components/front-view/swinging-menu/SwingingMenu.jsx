import React from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

const Menu = styled(motion.div)`
  width: 250px;
  height: 350px;
  position: relative;
  top: 25px;
  left: 50px;
  transform-origin: center top;
  background: rgba( 0, 153, 102, 0.5 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 6px );
  -webkit-backdrop-filter: blur( 6px );
  border-radius: 15px;
  border: 1px solid rgba( 0, 153, 102, 0.18 );
`;

const menuVariants = {
  notVisible: {
    rotateX: -90,
    opacity: 0,
    transition: {
      duration: .7,
      ease: 'easeIn',
    },
  },
  visible: {
    rotateX: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
  swing: {
    rotateZ: [6, -6],
    transition: {
      duration: 2.5,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
  notSwinging: {
    rotateZ: 0,
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
};

function SwingingMenu({ isVisible }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <Menu
          variants={menuVariants}
          initial="notVisible"
          animate={['visible', 'swing']}
          whileHover={['visible', 'notSwinging']}
          exit="notVisible"
        >
          <h3>Menu</h3>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
          </ul>
        </Menu>
      )}
    </AnimatePresence>
  );
}

export default SwingingMenu;
