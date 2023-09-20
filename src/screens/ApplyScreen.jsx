import React from 'react'
import { Container } from 'react-bootstrap'
import '../scss/ApplyScreen.scss'

const ApplyScreen = () => {
  return (
    <section className="apply-section">
      <Container>
        <div className="apply-wrapper column text-center">
          <h2>Apply</h2>
          <p className="apply-p mt-2">
            Become a member of ambitious and talented individuals, where you not only learn things but can also use them
            to your advantage and earn something!
          </p>

          <div className="row roles-wrapper mt-3">
            <div className="col mb-4">
              <p className="role role-builder">Builder</p>
            </div>
            <div className="col mb-4">
              <p className="role role-graphic">Graphic</p>
            </div>
            <div className="col mb-4">
              <p className="role role-render">Render</p>
            </div>
          </div>

          <div className="form">
            <form>
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <label for="nickname">Your Minecraft Nickname</label>
                    <input type="text" name="nickname" placeholder="Nickname" autoComplete="off" required />
                  </div>
                  <div className="form-group">
                    <label for="email">E-Mail</label>
                    <input type="email" name="email" placeholder="E-mail" autoComplete="off" required />
                  </div>
                  <div className="form-group">
                    <label for="portfolio">Portfolio Link</label>
                    <input type="text" name="portfolio" placeholder="https://example.com" autoComplete="off" required />
                  </div>
                  <div className="form-group">
                    <label for="pleasant-collective">What do you expect from us?</label>
                    <input type="text" name="pleasant-collective" placeholder="Pleasant collective" autoComplete="off" required />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label for="message">Why do you want to join?</label>
                    <textarea rows="5" cols="60" name="message" placeholder="Start typing..." autoComplete='off' required></textarea>
                  </div>
                  
                  <button type="submit">Send</button>
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