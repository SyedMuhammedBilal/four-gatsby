import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import NavbarLinks from "./NavbarLinks"
import Logo from "./Logo"
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { Link, navigate} from 'gatsby';
import './navbar/Nav.css'

const Navigation = styled.nav`
  height: 10vh;
  display: flex;
  /* position: fixed; */
  top: 0;
  width: 100%;
  justify-content: space-between;
  text-transform: uppercase;
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 9;
  align-self: center;
  position: fixed;
  @media (max-width: 768px) {
    height: 3.5rem;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }

  @media (min-width: 769px) and (max-width: 2500px) {
    height: 4rem;
  }
`

const Toggle = styled.div`
  height: 100%;
  cursor: pointer;
  top: 32px;
  left: 100px;
  padding: 0 10vw;
  position: relative;
 
  @media (min-width: 200px) and (max-width: 768px) {
    top: 28px;
    left: 15px;
  }
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  color: black;
  align-items: center;
  @media (max-width: 3000px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    background-color: #e82275;
    color: black;
    justify-content: flex-start;
    padding-top: 10vh;
    transition: all 0.3s ease-in;
    top: 8.5vh;
    left: ${props => (props.open ? "-100%" : "0")};
  }

  @media (min-width: 200px) and (max-width: 768px) {
    top: 7.3vh;
  }
`

const Hamburger = styled.div`
  background-color: #e82275;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};
  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #e82275;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }
  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }
  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`

const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }
`

const GlobalStyle02 = createGlobalStyle`
  body {
    overflow: visible;
  }
`

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const [navbar, setNavbar] = useState(false);

    const changeNavColor = () => {
        if (window.scrollY >= 80) {
            setNavbar(true)
        } else {
            setNavbar(false);
        };
    };

    if(typeof window !== `undefined`) {
        window.addEventListener('scroll', changeNavColor);
    };
  
    return (
      <Navigation className={navbar ? 'active' : 'not-active'}>
        <Logo />
        <Toggle
          navbarOpen={navbarOpen}
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          {navbarOpen ? <> <GlobalStyle /> <Hamburger open /> </> : <> <GlobalStyle02 />  <Hamburger /> </> }
        </Toggle>
        {navbarOpen ? (
          <Navbox>
            <NavbarLinks navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
          </Navbox>
        ) : (
          <Navbox open>
            <NavbarLinks />
          </Navbox>
        )}
      </Navigation>
    )
  };
  
export default Navbar;