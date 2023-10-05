import React from 'react'
import { Container } from 'react-bootstrap'
import '../scss/AboutScreen.scss'
import SliderMain from '../components/Slider'

const AboutScreen = () => {
  return (
    <>
      <section className="about-section">
          <Container>
            <div className="about-wrapper">
              <h2 className="text-center">About us</h2>
              <div className="about-table">
                  <p>
                    Our journey is about a group of young enthusiasts from diverse backgrounds who came together in 2023 to kickstart this project. Our primary mission is to empower builders by providing them with the support they need to sell high-quality, budget-friendly Minecraft builds, fostering mutual growth as a community. 
                  </p>
                  <p className="mt-3">
                    Looking forward, we have bold plans to further expand and develop this project, with the vision of transforming this platform into a space where builders can unite, create, and share their art with the world. We are committed to creating an environment where creativity knows no bounds
                  </p>
                  <p className="mt-3">
                    If you want to become a builder, graphic or render artist with us, sell your creations under our brand, and earn money, don't hesitate to apply through the 'Apply' button!
                  </p>
              </div>
            </div>
          </Container>
      </section>

      <section className="portfolio-section">
        <Container>
          <div className="portfolio-wrapper text-center column">
            <h2>Portfolio</h2>
            <div className="portfolio-slider">
              <SliderMain />
            </div>
          </div>
        </Container>
      </section>
    </>
    
  )
}

export default AboutScreen