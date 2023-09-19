import React from 'react'
import '../scss/HomeScreen.scss'
import { Container } from 'react-bootstrap'
import logo from '../images/LogoHuge.png'
import { Link } from 'react-router-dom'

const HomeScreen = () => {
  return (
    <section className="home-section">
      <Container>
        <div className="column home-wrap">
          <div className="text-center">
          <img
                src={logo}
                width="100"
                height="100"
                className="d-inline-block align-top"
                alt=""
            />
          </div>
          <h1 className="text-center"><span>Builds</span>Market</h1>
          <p className="text-center">BuildsMarket.com is a collective of professional builders who have united to provide the market with
             high-quality builds at competitive prices. 
             Our offerings cover not just non-exclusive builds but also unique exclusive projects, catering to the
             diversity of our clients' needs and visions.
          </p>
          <div className="text-center">
            <Link to="/about" className="homescreen-button">Read More!</Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HomeScreen