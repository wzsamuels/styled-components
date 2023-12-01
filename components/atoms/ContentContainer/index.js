import styled from 'styled-components'

// TODO: switch from px to em
const ContentContainer = styled.div`
  padding-top: 3.125rem;
  padding-bottom: 23rem;


  @media screen and (min-width: 300px) {
    padding-bottom: 26rem;
  }

  @media screen and (min-width: 499px) {
    padding-bottom: 25rem;
  }
  
  @media screen and (min-width: 550px) {
    padding-bottom: 18rem;
  }


  width: 100%;
`

export default ContentContainer