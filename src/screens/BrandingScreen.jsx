import React from 'react'
import { Container } from 'react-bootstrap'
import '../scss/BrandingScreen.scss'

const BrandingScreen = () => {
  return (
    <section className="branding-section">
      <Container>
        <div className="column branding-wrapper">
          <div className="text-center">
            <h3>BuildsMarket <span className="branding-span">Branding Kit</span></h3>
          </div>
         
          <div>
            <div></div>
          </div>

        </div>
      </Container>
    </section>
  )
}

export default BrandingScreen