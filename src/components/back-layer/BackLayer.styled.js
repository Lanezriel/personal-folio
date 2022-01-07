import styled from 'styled-components';

export const StyledBackLayer = styled.div`
position: relative;
top: -5%;
left: -5%;
width: 110%;
height: 110%;
background-image: ${ ({ backgroundImage }) => `url(${backgroundImage})` };
background-size: cover;
`;
