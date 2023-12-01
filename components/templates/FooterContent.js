import Footer from '../atoms/Footer';
import React, {useState} from 'react';
import styled from 'styled-components';
import fbLogoImg from '../../public/assets/images/logos/facebook.svg'
import twitterLogoImg from '../../public/assets/images/logos/twitter.svg'
import instaLogoImg from '../../public/assets/images/logos/instagram.png'
import Button from '../atoms/Button';
import Image from "next/legacy/image";
import FlexColumn from '../atoms/FlexColumn';
import Flex from '../atoms/Flex';
import Input from '../atoms/Input';

const FooterHeader = styled.div`
  font-weight: bold;
  margin-bottom: 1em;
`

const InputStyled = styled(Input)`
  margin: 1em 0 0 0;
  border-color: ${props => props.theme.colors.text};
  border-width: 0 0 1px 0;
  box-shadow: none;
  
  &:focus {
    outline: none !important;
    border-color: ${props => props.theme.colors.text};
  }
`

const FooterColumn = styled(Flex)`
  flex: 1;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  p {
    margin: .2em;
  }
  
  margin: 0 .5em 1em;

  .center-on-mobile {
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }
  
  ${Button} {
    margin: 1em;
  }

  ${InputStyled} {
    margin: 1em;
  }

  ${InputStyled}::placeholder {
    text-align: center;
  }
  
  @media screen and (min-width: 550px) {  
    align-items: normal;
    text-align: left;
    .center-on-mobile {
      align-items: center;
      justify-content: start;
      ${InputStyled} {
        margin: 1em 0;
      }
    }
  }
`



const SocialIcons = styled(Flex) `
  * {
    margin: 0 1em;
  }
`

const FootWrapper = styled(Flex)`
  flex-wrap: wrap;
  
  @media screen and (min-width: 550px) {
    flex-direction: row;
  }
`

const FooterContent = ({links}) => {

  const [emailForm, setEmailForm] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
   // const response = await API.graphql(graphqlOperation(mutations.createEmail, {input: {email: emailForm, marketing: true, sales: true, newsletter: true}}))
  //  window.alert(JSON.stringify(response.data.createEmail))
  }

  return (
    <Footer>
      <FlexColumn style={{marginTop: '1em'}}>
        <FootWrapper>
          <FooterColumn>
            <FooterHeader>Twin Silver</FooterHeader>
            <SocialIcons className="flex flex-nowrap items-center">
              <a href='https://www.facebook.com/twinsilverdesign'><Image height={40} width={40} src={fbLogoImg} alt='Facebook logo'/></a>
              <a href='https://twitter.com/twinsilverweb'><Image height={40} width={40} src={twitterLogoImg} alt='Twitter logo'/></a>
              <a href='components/templates/FooterContent'><Image height={40} width={40} src={instaLogoImg} alt='Instagram logo'/></a>

            </SocialIcons>

          </FooterColumn>
          <FooterColumn>
            <FooterHeader>Site</FooterHeader>
            {links.map(link =>
              <span key={link.text}>{!link.dropdown && <p><a href={link.url}>{link.text}</a></p>}</span>
            )}
          </FooterColumn>
          <FooterColumn>
            <FooterHeader>Legal</FooterHeader>
            <p><a href='https://www.termsfeed.com/live/2517a2ba-4b56-47a1-8a99-aeb8e52931d8'>Terms & Conditions</a></p>
            <p><a href='https://www.termsfeed.com/live/caf8a38e-a6e6-4a73-abc8-02b9957ab594'>Privacy Policy</a></p>
          </FooterColumn>
          <FooterColumn>
            <FooterHeader style={{marginBottom:'0'}}>Sign Up for Updates</FooterHeader>
            <form onSubmit={handleSubmit}>
              <FlexColumn className='center-on-mobile'>
                <InputStyled
                  type='email'
                  placeholder='Please enter your email'
                  value={emailForm}
                  onChange={e => setEmailForm(e.target.value)}
                />
                <Button className="justify-self-center" type='submit'>Sign Up</Button>
              </FlexColumn>
            </form>
          </FooterColumn>
        </FootWrapper>
        <small style={{marginBottom: '1em'}}>Copyright 2021 Twin Silver Web Design, LLC</small>
      </FlexColumn>
    </Footer>
  )
}

export default FooterContent