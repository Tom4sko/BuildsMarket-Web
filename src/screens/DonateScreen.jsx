import React from 'react'
import '../scss/DonateScreen.scss'
import { Container } from 'react-bootstrap'
import paypalLogo from '../images/paypalLogo.png'
import { Link } from 'react-router-dom'

const DonateScreen = () => {
  return (
    <section className="donate-section">
      <Container>
        <div className="column text-center donate-wrapper">
          <h2>Donate</h2>
          <img
               src={paypalLogo}
               width="180"
               height="180"
               className="d-inline-block align-top donate-image"
               alt=""
          />
          <div className="text-center">
            <Link to="https://www.paypal.com/paypalme/buildsmarket" className="donate-button" target="_blank">paypal.me/<span className="donate-span">buildsmarket</span></Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default DonateScreen