import React, {useEffect, useState} from 'react';
import Flex from '../atoms/Flex';
import {
  Drawer,
  DrawerContent,
  DrawerDropdown,
  DrawerDropdownMenu,
  DrawerFooter,
  DrawerHeader,
  DrawerItem
} from '../organisms/Drawer';
import {Icon} from '@iconify/react';
import tsImage from '../../public/assets/images/logos/ts-text.svg'
import TopNav, {DropDownItem, DropDownMenu} from '../organisms/NavBar';
import Link from 'next/link'
import Image from "next/legacy/image";

import {signIn, signOut, useSession} from "next-auth/react";
import {ArrowPathIcon} from "@heroicons/react/24/solid";
import styled from 'styled-components';

const MenuButton = styled.button`
  color: ${props => props.theme.colors.navBarText};
  text-align: center;
  padding: .875rem 1rem;
  text-decoration: none;
  float: left;
  cursor: pointer;
  height: 50px;
  
  &:hover {
    color: ${props => props.theme.colors.navBarHover};
  }
`

export default function NavBar({links, position}) {
  const [drawerClosing, setDrawerClosing] = useState(false);
  const [drawerOpen, setDrawer] = useState(false);
  const { data: session, status } = useSession();

  const toggleDrawer = () => { setDrawer(!drawerOpen) };
  const callback = () => e => {
    if(e.animationName === 'SlideOut') {
      setDrawer(false);
      setDrawerClosing(false);
    }
  }

  const renderLoginButton = () => {


    if (status === "loading") {
      return (
        <div className="auth-btn">
          <div className="auth-info">
            <ArrowPathIcon className="icon animate-spin"/>
          </div>
        </div>
      );
    }
    if (status === "unauthenticated") {
      return (
        <MenuButton onClick={() => signIn()}>Login</MenuButton>
      );
    }
    return (
      <MenuButton onClick={() => signOut()}>Logout</MenuButton>
    );
  }

  return (
    <>
      <TopNav className="flex fixed justify-between top-0 m-0 p-0 w-full transition-all duration-500" position={position}>
        <Flex>
          <button aria-label="Open Menu" onClick={toggleDrawer} className="icon menu"><Icon height={18} icon="ic:baseline-menu" /></button>
          <Link href='/' passHref style={{height: '50px', padding: '0'}}>
            <Flex className='logo' height='100%'>
              <Image height={50} width={150} style={{padding: '2px 1em'}} src={tsImage} alt='Twin Silver Logo'/>
            </Flex>
          </Link>
        </Flex>
        <div className='hide'>
          <Flex style={{flexWrap:'no-wrap'}}>
            {
              links.map((link, i) =>
              {
                if(link.dropdown) {
                  return (
                    <div key={i} className="dropdown" tabIndex={0}>
                      {link.text}
                      <DropDownMenu>
                        {link.urls.map((dlink, di) =>
                          <DropDownItem key={di}><a href={dlink.url}>{dlink.text}</a></DropDownItem>
                        )}
                      </DropDownMenu>
                    </div>
                  )
                }
                else {
                  return (
                    <Link className="menu-item" href={link.url} key={i}>{link.text}</Link>
                  )
                }
              })
            }
          </Flex>
        </div>
        <Link className="menu-item dropdown" href="/account" passHref tabIndex={0}>
          Account
          <DropDownMenu>
            {renderLoginButton()}
          </DropDownMenu>
        </Link>
      </TopNav>

      <Drawer onClick={() => setDrawerClosing(true)} open={drawerOpen} closing={drawerClosing}>
        <DrawerContent onClick={() => setDrawerClosing(true)}
                       className = {`${drawerClosing ? 'ClosedDrawer' : 'OpenDrawer'}`}
                       onAnimationEnd={callback()}>
          <DrawerHeader>
            <button onClick={() => setDrawerClosing(true)} aria-label="Close Menu"><Icon height={18} icon="ic:baseline-menu" /></button>
            <Link
              href='/'
              passHref
              style={{height: '50px', padding: '0'}}
            >
              <Flex style={{height:'100%', padding: '2px 1em'}}>
                <Image src={tsImage} alt='Twin Silver Logo'/>
              </Flex>
            </Link>
          </DrawerHeader>
          {
            links.map((link, index) =>
              link.dropdown ?
                <DrawerDropdown key={index}>
                  {link.text}
                  <DrawerDropdownMenu>
                    {link.urls.map((dlink, di) =>
                        <DrawerItem key={di} href={dlink.url}  style={{height: '50px'}} className="ml-4 pl-4 flex items-center">
                          {dlink.text}
                        </DrawerItem>
                    )}
                  </DrawerDropdownMenu>
                </DrawerDropdown>
                :
              <Link
                href={link.url}
                style={{height: '50px', padding: '0'}}
                passHref
                key={link.url}
              >
                <DrawerItem>
                  {link.text}
                </DrawerItem>
              </Link>
            )
          }
          <DrawerFooter>
            <div>© Twin Silver Web Design LLC</div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

/*
<div>
              <Link t>Terms</Link>
              <Link>Privacy Policy</Link>
            </div>
 */
