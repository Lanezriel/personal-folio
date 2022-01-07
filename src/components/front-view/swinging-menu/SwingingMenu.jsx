import React from 'react';
import { AnimatePresence } from 'framer-motion';

import { StyledSwingingMenu, menuVariants } from './SwingingMenu.styled';

function SwingingMenu({ isVisible }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <StyledSwingingMenu
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
        </StyledSwingingMenu>
      )}
    </AnimatePresence>
  );
}

export default SwingingMenu;
