import React from 'react'
import { Container } from 'react-bootstrap'
import '../scss/TeamScreen.scss'
import LeadershipEngine from '../components/LeadershipEngine'
import BuildersEngine from '../components/BuildersEngine'
import GraphicsEngine from '../components/GraphicsEngine'
import RendersEngine from '../components/RenderArtistsEngine'
import PartnerEngine from '../components/PartnerEngine'
import RenderArtistEngine from '../components/RenderArtistsEngine'

const TeamScreen = () => {
  return (
    <>
      <section className="leadership-section">
        <Container>
          <div className="leadership-wrapper text-center">
            <h2 className="mt-5 mt-md-0">Administrator</h2>
            <p className="paragraph text-center mt-3 mt-lg-4 paragraph-color">Leadership is responsible for the entire BuildsMarket project. They accept or reject applications for
             positions and are responsible for the entire BuildsMarket systems.
            </p>
            <div className="mt-3">
              <div className="d-flex flex-row justify-content-center mt-3 mt-lg-5">
                  <LeadershipEngine />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="builders-section">
        <Container>
          <div className="builders-wrapper text-center">
              <h2 className="mt-5 mt-md-0">Builders</h2>
              <p className="paragraph text-center mt-3 mt-lg-4 paragraph-color">Builders are the people who create Minecraft content for BuildsMarket, such as
               lobbies, hubs, spawns, and various maps. Their work is very crucial for our project.
              </p>
              <div className="mt-3">
                <div className="d-flex flex-row justify-content-center mt-3 mt-lg-5">
                    <BuildersEngine />
                </div>
              </div>
            </div>
        </Container>
      </section>

      <section className="graphics-section">
        <Container>
          <div className="graphics-wrapper text-center">
              <h2 className="mt-5 mt-md-0">Graphics</h2>
              <p className="paragraph text-center mt-3 mt-lg-4 paragraph-color">Graphic designers are the people who take care of the design part
               of the whole project. So everything you see now is their responsibility.
              </p>
              <div className="mt-3">
                <div className="d-flex flex-row justify-content-center mt-3 mt-lg-5">
                    <GraphicsEngine />
                </div>
              </div>
            </div>
        </Container>
      </section>

      <section className="render-section">
        <Container>
          <div className="render-wrapper text-center">
              <h2 className="mt-5 mt-md-0">Render Artists</h2>
              <p className="paragraph text-center mt-3 mt-lg-4 paragraph-color">Render artists are the people who create amazing and creative renderings
               of our buildings for us. 
              </p>
              <div className="mt-3">
                <div className="d-flex flex-row justify-content-center mt-3 mt-lg-5">
                    <RendersEngine />
                </div>
              </div>
            </div>
        </Container>
      </section>

      <section className="partners-section">
        <Container>
          <div className="partners-wrapper text-center">
              <h2 className="mt-5 mt-md-0">Partners</h2>
              <p className="paragraph text-center mt-3 mt-lg-4 paragraph-color">In this section are our partners, these are people who help the project
               in any way, such as video editing, web programming and more. 
              </p>
              <div className="mt-3">
                <div className="d-flex flex-row justify-content-center mt-3 mt-lg-5">
                    <PartnerEngine />
                </div>
              </div>
            </div>
        </Container>
      </section>
    </>
  )
}

export default TeamScreen