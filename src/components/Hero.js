import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import './Hero.css'
import styled from 'styled-components'
import Img1 from '../images/background-city.jpg'
import Img2 from '../images/background-community copy.jpg'
import Img3 from '../images/background-city6.jpg'
import Img4 from '../images/background-nature3.jpg'
import Img5 from '../images/background-nature7.jpg'
import Img6 from '../images/background-team4.jpg'
import Img7 from '../images/background-community2.jpg'
import Img8 from '../images/background-team3.jpg'
import Img9 from '../images/background-city5.jpg'

const images = [
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6,
    Img7,
    Img8,
    Img9 
]

const Img = styled.img`
    width: 100vw;
    height: 107vh;
    background-size: cover;
    background-image: url(${images[Math.floor(Math.random() * images.length)]})
`

const Hero = () => {
    return (
        <React.Fragment>
            <div className="each-slide">
                <Img />
            </div>
        </React.Fragment>
    )
};

export default Hero;
