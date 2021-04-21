import React from 'react'
import "./footer.css";
import Logo from '../../images/fourpercent-logo-white.png'

function Footer() {
    return (
        <div className="footer-under">
            <div className="under">
                <div className="footer">
                    <div className="leftConer" >
                        <img className="logo2" src={Logo} />
                    </div>
                    <div className='rightCorner'>
                        <a className="atag" href="https://www.linkedin.com/company/fourpercnt">Linkedin </a>
                        |
                        <a className="atag" href="https://angel.co/company/fourpercnt"> Angelist </a>
                        |
                        <a className='medium' href="https://medium.com/@fourpercnt"> Medium</a>
                    </div>

                    <p> Photography credit to <a href="https://instagram.com/mikebondsphotography"  > Mike Bonds </a></p>


                </div>
            </div>
        </div>
    )
}

export default Footer