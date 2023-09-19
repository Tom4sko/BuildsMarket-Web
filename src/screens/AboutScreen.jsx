import React from 'react'
import { Container } from 'react-bootstrap'
import '../scss/AboutScreen.scss'

const AboutScreen = () => {
  return (
    <section className="about-section">
        <Container>
          <div className="about-wrapper">
             <h2 className="text-center">About us</h2>
             <div className="about-table">
                <p>
                  We are a team of young enthusiasts from various backgrounds who, in 2023, came together to initiate this project. Our primary goal is to provide builders with the support they need to sell high-quality and budget-friendly Minecraft builds, and by that we can grow together. As we look ahead, we have ambitious plans to further develop this project, eventually transforming this website into a dedicated marketplace for Minecraft creations.
                </p>
                <p>
                  If you want to become a builder, graphic or render artist with us, sell your creations under our brand, and earn money, don't hesitate to apply through the 'Apply' button!
                </p>
             </div>
          </div>
        </Container>
    </section>
  )
}

export default AboutScreen