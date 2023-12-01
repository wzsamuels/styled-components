import styled from 'styled-components';

const FlexColumn = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  place-items: ${props => props.center ? "center" : "normal"};
  
  &.center { align-items: center;}
  
  
`

export default FlexColumn