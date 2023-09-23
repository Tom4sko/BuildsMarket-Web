import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { GraphicsData } from '../database/GraphicsData';
import { FaGlobe } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import '../scss/TeamScreen.scss'

const GraphicEngine = () => {
  return (
    <Container>
      <Row className="row d-flex justify-content-center">
        {GraphicsData.map((GraphicsItem) => {
          return (
            <Col sm={6} md={3} lg={3} key={GraphicsItem.id}>
              <div className="team-card">
                <img src={GraphicsItem.photo} alt="graphics-image" className="team-image mb-2" />
                <h5 className="mt-2">{GraphicsItem.nickname}</h5>
                <p className="position position-graphics text-center">{GraphicsItem.position}</p>
                <div className="d-flex flex-row social-icon justify-content-center mb-5">
                  {GraphicsItem.social && (
                      <a href={GraphicsItem.social} target="_blank" rel="">
                        <span>
                          <FaGlobe /> 
                        </span>
                      </a>
                    )}
                    {GraphicsItem.instagram && (
                      <a href={GraphicsItem.instagram} target="_blank" rel="">
                        <span>
                          <FaInstagram />
                        </span>
                      </a>
                    )}
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default GraphicEngine;
