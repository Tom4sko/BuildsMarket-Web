import React from 'react'
import { Container } from 'react-bootstrap'
import '../scss/TeamScreen.scss'
import LeadershipEngine from '../components/LeadershipEngine'

const TeamScreen = () => {
  return (
    <>
      <section className="leadership-section">
        <Container>
          <div className="leadership-wrapper text-center">
            <h2>Leadership</h2>
            <p className="paragraph text-center mt-5">Leadership is responsible for the entire BuildsMarket project. They accept or reject applications for
             positions and are responsible for the entire BuildsMarket systems.
            </p>
            <div className="d-flex flex-row justify-content-center mt-5">
              <LeadershipEngine />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default TeamScreen