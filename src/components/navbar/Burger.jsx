import React, { useState } from 'react'
import styled from 'styled-components'
import RightNav from './RightNav'
import './Nav.css'

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position : fixed ; 
  top:15px;
  right:20px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 26;
  display:none;
  @media(max-width:768px){
    display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  }
  div{
      width:2rem;
      height: 0.25rem;
      background-color : ${({ open }) => open ? '#ccc' : '#fff'};
      border-radius: 10px;
      transform-origin: 1px;
      transition: all 0.4s linear;
      &:nth-child(1){         
        transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        background: white;
      }
      &:nth-child(2){
        transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
        opacity: ${({ open }) => open ? 0 : 1} ;
      }
      &:nth-child(3){
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        background: white;
      }
  }
`

function Burger() {
  const [open, setOpen] = useState(false);
  const [burger, setBurger] = useState(false);
  const [color, setColor] = useState('#fff');

  const changeBurgerColor = () => {
    if(window.scrollY >= 80) {  
      setBurger(true);
      setColor('#e82275');
    } else {
      setBurger(false);
      setColor('#fff');
    }
  }

  if(typeof window !== `undefined`) {
    window.addEventListener('scroll', changeBurgerColor);
  }

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)} >
        <div className="colorLines" style={{backgroundColor: color, transition: '.4s all'}} />
        <div className="colorLines" style={{backgroundColor: color, transition: '.4s all'}} />
        <div className="colorLines" style={{backgroundColor: color, transition: '.4s all'}} />
      </StyledBurger>
      <RightNav open={open} setOpen={setOpen} />
    </>

  )
};

export default Burger