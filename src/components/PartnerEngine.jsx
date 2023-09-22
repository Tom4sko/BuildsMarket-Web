import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { PartnerData } from '../database/PartnerData';
import { FaGlobe } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import '../scss/TeamScreen.scss'

const PartnerEngine = () => {
  return (
    <Container>
      <Row className="row d-flex justify-content-center">
        {PartnerData .map((PartnerItem) => {
          return (
            <Col sm={6} md={3} lg={3} key={PartnerItem.id}>
              <div className="team-card">
                <img src={PartnerItem.photo} alt="" className="team-image mb-2" />
                <h5 className="mt-2">{PartnerItem.nickname}</h5>
                <p className="position position-partner text-center">{PartnerItem.position}</p>
                <div className="d-flex flex-row social-icon justify-content-center mb-5">
                  {PartnerItem.social && (
                      <a href={PartnerItem.social} target="_blank" rel="">
                        <span>
                          <FaGlobe /> 
                        </span>
                      </a>
                    )}
                    {PartnerItem.instagram && (
                      <a href={PartnerItem.instagram} target="_blank" rel="">
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

export default PartnerEngine;
