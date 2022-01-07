import styled from 'styled-components';

import topBarTexture from '../../../assets/textures/Portfolio-top-bar.png';

export const StyledTopBar = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 110px;
  position: sticky;
  top: 0;
  z-index: 10;
  background-image: url(${topBarTexture});
  background-repeat: repeat-x;

  & > .burger {
    position: absolute;
    top: 19px;
    left: 24px;
  }

  & > .top-bar-content {
    display: flex;
    align-items: center;
    gap: 1rem;
    height: 70px;

    & > a {
      display: block;
      font-size: 1.5rem;
      font-weight: bolder;
      text-decoration: none;
      color: white;
      text-shadow: 3px 3px 2px black;
      transition: all .3s linear;

      &:hover {
        color: #999;
      }
    }
  }

  & > .special-button {
    position: absolute;
    top: 15px;
    right: 15px;
    background: rgba( 255, 255, 255, .40 );
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
    }
  }
`;
