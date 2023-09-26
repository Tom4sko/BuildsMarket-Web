import React from 'react'
import { Container } from 'react-bootstrap'
import '../scss/BrandingScreen.scss'
import logoOne from '/public/images/logoOne.svg'
import logoTwo from '/public/images/logoTwo.svg'
import logoThree from '/public/images/logoThree.svg'
import logoFullOne from '/public/images/logoFullOne.svg'
import logoFullTwo from '/public/images/logoFullTwo.svg'
import logoFullThree from '/public/images/logoFullThree.svg'

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
                <img src={logoOne} alt="logo" loading="lazy" className="mx-2 mt-1" />
                <img src={logoTwo} alt="logo" loading="lazy" className="mx-1 mt-1" />
                <img src={logoThree} alt="logo" loading="lazy" className="mx-2 mt-1" />
              </div>
              <div>
                <h4>Main <span className="branding-span">Full</span>Logos</h4>
                <div className="col">
                  <img src={logoFullOne} alt="full-logo" loading="lazy" className="mt-3 logoFull" />
                  <img src={logoFullTwo} alt="full-logo" loading="lazy" className="mt-3 logoFull" />
                  <img src={logoFullThree} alt="full-logo" loading="lazy" className="mt-3 mb-5 logoFull" />
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
                <h4 className="mt-4"><span className="branding-span">Icon</span> Pack</h4>
                <div className="d-flex align-items-center justify-content-center text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 20 20"><path fill="white" d="M10.724 2.053a.5.5 0 0 0-.448 0l-5 2.5A.5.5 0 0 0 5 5v9.5a.5.5 0 0 0 .243.429l5 3A.5.5 0 0 0 11 17.5v-4.691l4.724-2.362a.5.5 0 0 0 0-.894L11.618 7.5l4.106-2.053a.5.5 0 0 0 0-.894l-5-2.5Z"/></svg>
                  <svg fill="none" height="38" viewBox="0 0 32 32" width="38" xmlns="http://www.w3.org/2000/svg"><path d="m16.5528 2.10557c.2815-.14076.6129-.14076.8944 0l8 4c.3388.16939.5528.51566.5528.89443s-.214.72504-.5528.89443l-6.2111 3.10557 6.2111 3.1056c.3388.1694.5528.5156.5528.8944s-.214.725-.5528.8944l-7.4472 3.7236v9.382c0 .3553-.1885.6839-.4952.8632-.3066.1794-.6854.1825-.9951.0084l-7.99996-4.5c-.31488-.1771-.50974-.5103-.50974-.8716v-17.5c0-.37877.214-.72504.55279-.89443zm1.4472 15.27643 4.7639-2.382-4.7639-2.382zm-2-8.00003v-4.76394l-4.7639 2.38197zm-6-.76394v4.76397l4.7639-2.382zm0 7.99997v7.2972l6 3.375v-7.6722zm6 .764v-4.764l-4.7639 2.382zm2-12.76397v4.76394l4.7639-2.38197z" fill="#FFFFFF"/></svg>
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