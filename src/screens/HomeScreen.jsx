import React from 'react'
import '../scss/HomeScreen.scss'
import { Container } from 'react-bootstrap'
import logo from '/public/images/LogoHuge.png'
import { Link } from 'react-router-dom'
import { BsDiscord } from "react-icons/bs";

const HomeScreen = () => {
  return (
    <section className="home-section">
      <Container>
        <div className="column home-wrap">
          <div className="text-center mb-2">
          <img
                src={logo}
                width="100"
                height="100"
                className="d-inline-block align-top"
                alt="logo"
                loading="lazy"
            />
          </div>
          <h1 className="text-center"><span>Builds</span>Market</h1>
          <p className="text-center mt-3 paragraph-color">We are a collective of professional builders who have united to provide the market with
             high-quality builds at competitive prices. 
             Our offerings cover not just non-exclusive builds but also unique exclusive projects, catering to the
             diversity of our client's needs and visions.
          </p>
          <div className="text-center mt-5">
            <Link to="#" className="homescreen-button" target="_blank">Coming Soon <BsDiscord /></Link>
            {/* Join Discord - logo*/}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HomeScreen