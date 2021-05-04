import React from 'react'
import styled from "styled-components"
import { navigate } from 'gatsby'
import $Logo from '../images/fourpercent-logo.png'

const LogoWrap = styled.div`
  margin: 0px -20px;
  flex: 0 1 36px;
  color: white;
  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 25px;
  }

  @media (min-width: 200px) and (max-width: 768px) {
      margin: 10px 5px;
  }
`;

const ImgLogo = styled.img`
    height: auto;
    width: auto;
    max-height: 72px;
    max-width: 250px;

    @media (min-width: 200px) and (max-width: 768px) {
        max-height: 45px;
    }
`

function Logo() {
    return (
        <LogoWrap>
            <ImgLogo style={{cursor: 'pointer'}} onClick={() => navigate('/')} src={$Logo} alt="logo" />
        </LogoWrap>
    )
}

export default Logo;