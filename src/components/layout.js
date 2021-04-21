import React from "react"
import PropTypes from "prop-types"
import Footer from './footer/footer'
import Navbar from './navbar/Navbar'
import { useStaticQuery, graphql } from "gatsby"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
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

const Theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundImage: `url(${images[Math.floor(Math.random() * images.length)]})`,
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '100%',
          backgroundSize: 'cover',
          backgroundAttachment:'fixed',
          margin: 0,
          padding: 0,
        }
      }
    }
  }
});

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <MuiThemeProvider theme={Theme}>
      <CssBaseline />
      <Navbar />
        <main>{children}</main>
      <Footer />
    </MuiThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
