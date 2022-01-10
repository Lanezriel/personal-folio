import styled from 'styled-components';

export const StyledMobileMenu = styled.div`
  & > .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    bottom: 0;
    z-index: 100;
    width: 100%;
    background: rgba( 255, 255, 255, 0.35 );
    backdrop-filter: blur( 10px );
    -webkit-backdrop-filter: blur( 10px );
    border-radius: 15px;
    border: 2px solid rgba( 255, 255, 255, 0.18 );
    transition: all .3s ease-in-out;
    opacity: ${ ({ open }) => open ? '1' : '0' };
    transform: ${ ({ open }) => open ? 'translateY(0)' : 'translateY(100%)'};

    & > .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      max-height: 400px;
      overflow-y: scroll;
    }
  }
`;
