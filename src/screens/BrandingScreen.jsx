import React from 'react'
import { Container } from 'react-bootstrap'
import '../scss/BrandingScreen.scss'
import logoOne from '../images/logoOne.svg'
import logoTwo from '../images/logoTwo.svg'
import logoThree from '../images/logoThree.svg'
import logoFullOne from '../images/logoFullOne.svg'
import logoFullTwo from '../images/logoFullTwo.svg'
import logoFullThree from '../images/logoFullThree.svg'

const BrandingScreen = () => {
  return (
    <section className="branding-section">
      <Container>
        <div className="column branding-wrapper">
          <div className="text-center">
            <h3>BuildsMarket <span className="branding-span">Branding Kit</span></h3>
          </div>
         
          <div className="row mt-5">
            <div className="col-md-4 text-md-start text-center">
              <div className="mb-5">
                <h4>Main <span className="branding-span">Icon</span>Logos</h4>
                <img src={logoOne} alt="" className="mx-2 mt-1" />
                <img src={logoTwo} alt="" className="mx-1 mt-1" />
                <img src={logoThree} alt="" className="mx-2 mt-1" />
              </div>
              <div>
                <h4>Main <span className="branding-span">Full</span>Logos</h4>
                <div className="col">
                  <img src={logoFullOne} alt="" className="mt-3" />
                  <img src={logoFullTwo} alt="" className="mt-3" />
                  <img src={logoFullThree} alt="" className="mt-3 mb-5" />
                </div>
              </div>
            </div>

            <div className="col-md-4 text-center">
                <h4><span className="branding-span">Colour</span> Pallete</h4>
                <div className="row justify-content-center align-items-center">
                  <div className="col-12 col-md-6 col-lg-3 text-center">
                    <div className="d-flex flex-column align-items-center">
                      <div className="block block-white mx-1 mt-2"></div>
                      <p className="p-font">#FFFFFF</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3 text-center">
                    <div className="d-flex flex-column align-items-center">
                      <div className="block block-black mx-1 mt-2"></div>
                      <p className="p-font">#161616</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3 text-center">
                    <div className="d-flex flex-column align-items-center">
                      <div className="block block-light-green mx-1 mt-2"></div>
                      <p className="p-font">#53ACAE</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3 text-center">
                    <div className="d-flex flex-column align-items-center">
                      <div className="block block-dark-green mx-1 mt-2"></div>
                      <p className="p-font">#0A7777</p>
                    </div>
                  </div>
                </div>
              <div className="mb-5">
                <h4><span className="branding-span">Icon</span> Pack</h4>
                <div className="row">
                  <p className="p-font">
                    Microsoft <span className="branding-span">Fluent UI</span> <br/>
                    Icons by <span className="branding-span">Iconduck</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 text-md-end text-center">
              <h4>Font</h4>
              <h4><span className="branding-span">Poppins Bold</span></h4>
              <h4>Poppins Regular</h4>
            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}

export default BrandingScreen