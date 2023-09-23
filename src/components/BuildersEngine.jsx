import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { BuildersData } from '../database/BuildersData';
import { FaGlobe } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import '../scss/TeamScreen.scss'

const BuildersEngine = () => {
  return (
    <Container>
      <Row className="row d-flex justify-content-center">
        {BuildersData.map((BuildersItem) => {
          return (
            <Col sm={6} md={3} lg={3} key={BuildersItem.id}>
              <div className="team-card">
                <img src={BuildersItem.photo} alt="builders-image" className="team-image mb-2" />
                <h5 className="mt-2">{BuildersItem.nickname}</h5>
                <p className="position position-builder text-center">{BuildersItem.position}</p>
                <div className="d-flex flex-row social-icon justify-content-center mb-5">
                  {BuildersItem.social && (
                      <a href={BuildersItem.social} target="_blank" rel="">
                        <span>
                          <FaGlobe /> 
                        </span>
                      </a>
                    )}
                    {BuildersItem.instagram && (
                      <a href={BuildersItem.instagram} target="_blank" rel="">
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

export default BuildersEngine;
