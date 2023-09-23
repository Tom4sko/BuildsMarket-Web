import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { RenderArtistsData } from '../database/RenderArtistsData';
import { FaGlobe } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import '../scss/TeamScreen.scss'

const RenderArtistEngine = () => {
  return (
    <Container>
      <Row className="row d-flex justify-content-center">
        {RenderArtistsData.map((RendersItem) => {
          return (
            <Col sm={6} md={3} lg={3} key={RendersItem.id}>
              <div className="team-card">
                <img src={RendersItem.photo} alt="render-image" className="team-image mb-2" />
                <h5 className="mt-2">{RendersItem.nickname}</h5>
                <p className="position position-renders text-center">{RendersItem.position}</p>
                <div className="d-flex flex-row social-icon justify-content-center mb-5">
                  {RendersItem.social && (
                      <a href={RendersItem.social} target="_blank" rel="">
                        <span>
                          <FaGlobe /> 
                        </span>
                      </a>
                    )}
                    {RendersItem.instagram && (
                      <a href={RendersItem.instagram} target="_blank" rel="">
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

export default RenderArtistEngine;
