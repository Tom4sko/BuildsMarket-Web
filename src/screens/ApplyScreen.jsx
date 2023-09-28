import React from 'react'
import { Container } from 'react-bootstrap'
import '../scss/ApplyScreen.scss'

const ApplyScreen = () => {
  return (
    <section className="apply-section">
      <Container>
        <div className="apply-wrapper column text-center">
          <h2>Apply</h2>
          <p className="apply-p mt-3 paragraph-color">
            Become a member of ambitious and talented individuals, where you not only learn things but can also use them
            to your advantage and earn something!
          </p>

          <div className="d-flex flex-wrap mt-5 justify-content-center buttons-apply-wrapper">
            <div className="mb-4">
              <button type="button" className="role role-builder">Builder</button>
            </div>
            <div className= "mb-4">
              <button type="button" className="role role-graphic">Graphic</button>
            </div>
            <div className=" mb-4">
              <button type="button" className="role role-render">Render</button>
            </div>
          </div>

          <div className="form-wrapper mt-4">
            <form action="https://formspree.io/f/mnqkgbbq" method="POST">
              <div className="row">
                <div className="col-md-6 col-12 text-start">
                  <div className="form-group d-flex flex-column">
                    <label htmlFor="nickname" className="label-text">Your Minecraft Nickname</label>
                    <input type="text" className="mt-2" name="nickname" placeholder="Nickname" autoComplete="off" required />
                  </div>
                  <div className="form-group d-flex flex-column mt-2">
                    <label htmlFor="email" className="label-text">E-Mail</label>
                    <input type="email" className="mt-2" name="email" placeholder="E-mail" autoComplete="off" required />
                  </div>
                  <div className="form-group d-flex flex-column mt-2">
                    <label htmlFor="portfolio" className="label-text">Portfolio Link</label>
                    <input type="text" className="mt-2" name="portfolio" placeholder="https://example.com" autoComplete="off" required />
                  </div>
                  <div className="form-group d-flex flex-column mt-2 mb-2">
                    <label htmlFor="pleasant-collective" className="label-text">What do you expect from us?</label>
                    <input type="text" className="mt-2" name="pleasant-collective" placeholder="Pleasant collective" autoComplete="off" required />
                  </div>
                </div>
                <div className="col-md-6 col-12 text-start">
                  <div className="form-group d-flex flex-column">
                    <label htmlFor="message" className="label-text mb-2">Why do you want to join?</label>
                    <textarea rows="8" cols="auto" name="message" placeholder="Start typing..." autoComplete='off' required></textarea>
                  </div>
                  <div className="col-12 form-group text-center text-sm-end mt-4">
                    <button type="submit" className="form-button">Send</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
            
        </div>
      </Container>
    </section>
  )
}

export default ApplyScreen
