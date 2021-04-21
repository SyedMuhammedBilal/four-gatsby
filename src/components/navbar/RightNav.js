import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import "./Nav.css"
import { navigate, Link } from 'gatsby'

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    li{
        padding: 18px 18px;
        color: #fff;
        font-size: 20px;
        /* font-family: sans-serif; */
        font-weight: 400;
    }
    @media(max-width: 768px){
        flex-flow: row;
        background-color: #e04b89;
        position: fixed;
        transform: ${({ open }) => open ? ' translateY(0%)' : 'translateY(-100%)'};
        top : -65px;
        right : 0 ;
        min-height: 35vh;
    min-width: 100%;
        padding-top: 3.5rem;
        transition: transform 0.7s ease-in-out; 
        li{
            color: #fff;
            font-size: medium;
        }  
    }
`

function RightNav({ open, setOpen }) {
    const handeInputChange = useCallback(open => {
        setOpen(!open)
        navigate('/#2020')
    }, [setOpen])
    const [color, setColor] = useState(false);
    const [fill, setFill] = useState('#fff');

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

        <Ul style={{ zIndex: "25" }} className="dropdown" open={open}>
            <Link style={{textDecoration: 'none'}} to="/#about" onClick={() => handeInputChange}>
                <li style={{color: fill, transition: '.4s all'}} className="dropbtn">
                    About fourpercent
                </li>
            </Link>
            <div className="dropdown-content">
                <Link to="/#2019" style={{ cursor: 'pointer', marginBottom: '2px' }} onClick={() => handeInputChange} > 2019</Link>
                <a style={{ cursor: 'pointer' }} onClick={() => navigate('/#2020'), handeInputChange} >2020</a>
            </div>
            <Link to="/#contact" style={{textDecoration: 'none'}} onClick={() => navigate('/#contact'), handeInputChange}>
                <li style={{color: fill, transition: '.4s all', cursor: 'pointer'}} className="lii">
                    Contact
                </li>
            </Link>
        </Ul>


    )
}

export default RightNav