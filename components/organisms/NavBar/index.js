import styled from 'styled-components';

const TopNav = styled.nav`
  background-color: ${(props) => props.theme.colors.navBar};
  color: ${(props) => props.theme.colors.navBarText};
  height: ${props => props.theme.layout.navBarHeight};
  -webkit-box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
  box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);

  .dropdown {
    display: block;
    color: ${props => props.theme.colors.navBarText};
    text-align: center;
    padding: .875rem 1rem;
    text-decoration: none;
    float: left;
    cursor: pointer;
    height: 50px;
  }
  
  .dropdown:hover > ul, .dropdown:focus > ul, .dropdown:focus-within > ul {
    visibility: visible;
    opacity: 1;
    display: block;
  }

  .active {
    color: ${props => props.theme.colors.active};
  }

  .icon {
    float: left;
    padding: .875rem 1rem;
    cursor: pointer;
  }
  
  .logo {
    //position: fixed;
    //margin-right: 2em;
    position: inherit;
    margin-right: 1em;
    cursor: pointer;
  }
  
  .menu {
    display: none;
  }
  
  a:hover, .dropdown:hover {
    color: ${props => props.theme.colors.navBarHover};
    //-webkit-box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
    //box-shadow: 0 1px 5px 0 rgb(0 0 0 / 12%);
  }
  
  button {
    appearance: none;
    color: ${props => props.theme.colors.navBarText};
    text-align: center;
    padding: .875rem 1rem;
    text-decoration: none;
    border: none;
    background-color: ${props => props.theme.colors.navBar};
  }

  z-index: 10;
  

  @media screen and (max-width: 800px) {
    .logo {
      position: inherit;
    }

    .show {
      display: block;
    }

    .hide {
      display: none;
    }

    .menu {
      display: block;
    }
  }

  @media screen and (max-width: 1000px) {
    //justify-content: left;
    .logo {
      position: inherit;
      margin-right: 1em;
    }
  }
`

export const DropDownMenu = styled.ul`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  transition: 0.5s;
  margin-top: .75rem;
  ${props => props.right ? "margin-left: -3.25rem;" : "margin-left: -.5rem;"}
  padding: 0;
  display: none;
  list-style: none;
  background-color: ${(props) => props.theme.colors.navBar};
  
  &:hover, &:focus {
    visibility: visible;
    opacity: 1;
    display: block;
  }
`

export const DropDownItem = styled.li`
  clear: both;
  color: ${props => props.theme.colors.navBarText};
  padding: .875rem 1rem;
  text-decoration: none;
  float: left;
  cursor: pointer;
  height: 50px;

  &:hover {
    color: ${props => props.theme.colors.navBarHover};
  }
`

export default TopNav