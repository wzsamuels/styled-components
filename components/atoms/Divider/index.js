import styled from "styled-components";

const DividerContainer = styled.div`
  font-size: .70em;

  @media screen and (min-width: 400px) {
    font-size: .8em;
  }
  
  @media screen and (min-width: 500px) {
    font-size: 1em;
  }
`

const DividerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2em;

  @media screen and (min-width: 750px) {
    font-size: 2.5em;
  }
  
  color: ${props => props.theme.colors.dividerText};
 // padding: 1em;
  margin: 1em 0;
  
  //width: 100%;
`

const DividerStyled = styled.span`

  max-width: 1000px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  &::before, &::after {
    display: inline-block;
    vertical-align: middle;
    clear: both;
    height: 0;
    overflow: hidden;
    content: "";
    border-top: 1px solid ${props => props.theme.colors.dividerLine};
    width: 100%;
    max-width: 300px;
  }
  
  &::before {
   margin: 0 0.66667em 0 calc(-100% - 0.66667em);
  //  transform: translateY(-1rem);
    width: 100%;
  }
  
  &::after {
    margin: 0 calc(-100% - 0.66667em) 0 0.66667em;
    width: 100%;
  }
`

const Divider = ({children}) => {
  return (
    <DividerWrapper>
      <DividerStyled>
        {children}
      </DividerStyled>
    </DividerWrapper>
  )
}

export {DividerContainer}

export default Divider