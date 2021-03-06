import styled from 'styled-components';

export const StyledBurger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  padding: 0;

  &:focus {
    outline: none;
  }

  &:hover div {
    background: #999;
  }

  div {
    width: 2rem;
    height: .25rem;
    background: white;
    border-radius: 10px;
    transition: all .3s linear;
    transform-origin: 1px;

    :first-child {
      transform: ${ ({ open }) => open ? 'rotate(45deg)' : 'rotate(0)' };
    }

    :nth-child(2) {
      opacity: ${ ({ open }) => open ? '0' : '1' };
      transform: ${ ({ open }) => open ? 'translateX(20px)' : 'translateX(0)' };
    }

    :nth-child(3) {
      transform: ${ ({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)' };
    }
  }
`;