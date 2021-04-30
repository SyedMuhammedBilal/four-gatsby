import React, { useState, useCallback } from "react"
import { Link, navigate } from "gatsby"
import styled from "styled-components"

const NavItem = styled(Link)`
  text-decoration: none;
  color: #fff;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  font-weight: 500;
  font-size: 25px;
  margin-bottom: 4vh;
  /* width: 195px; */
  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: goldenrod;
    height: 1px;
    transition: all 0.4s ease-in;
  }
  :hover {
    color: goldenrod;
    ::after {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`

const HeadingNumber = styled.h1`
  padding: 0;
  top: 0;
  bottom: 0;
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 40px;
  font-size: 26px;
  flex: 0.5;
`

const NavbarLink = ({ navbarOpen, setNavbarOpen }) => {
    const [color, setColor] = useState(false);
    const [fill, setFill] = useState('#fff');

    const handle2020 = useCallback(open => {
      navigate('/#2020')
      setNavbarOpen(false)
    }, [setNavbarOpen])

    const handle2019 = () => {
        navigate('/#2019')
        setNavbarOpen(!navbarOpen)
    }

    const handleAbout = useCallback(open => {
        navigate('/#about')
        setNavbarOpen(!navbarOpen)
    }, [setNavbarOpen])
    
    const handleContact = useCallback(open => {
        navigate('/#contact')
        setNavbarOpen(!navbarOpen)
    }, [setNavbarOpen])

    const changeColor = () => {
        if(window.scrollY >= 80) {
            setColor(true);
            setFill('#e82275')
        } else {
            setColor(false);
            setFill('#fff');
        }
    }

    if(typeof window !== `undefined`) {
        window.addEventListener('scroll', changeColor)
    }

  return (
    <>
      <NavItem style={{color: '#fff', fontWeight: 600, display: 'flex'}} onClick={() => setNavbarOpen(!navbarOpen)} to="/#about"> About</NavItem>
      <NavItem style={{color: '#fff', fontWeight: 600, display: 'flex'}} onClick={() => setNavbarOpen(!navbarOpen)} to="/#2020"> 2020</NavItem>
      <NavItem style={{color: '#fff', fontWeight: 600, display: 'flex'}} onClick={() => setNavbarOpen(!navbarOpen)} to="/#2019"> 2019</NavItem>
      <NavItem style={{color: '#fff', fontWeight: 600, display: 'flex'}} onClick={() => setNavbarOpen(!navbarOpen)} to='/#contact'> Contact</NavItem>
    </>
  )
};

export default NavbarLink;