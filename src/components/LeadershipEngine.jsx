import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { LeadershipData} from '../database/LeadershipData';
import { FaGlobe } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import '../scss/TeamScreen.scss'

const LeadershipEngine = () => {
  return (
    <Container>
      <Row>
        {LeadershipData.map((LeadershipItem) => {
          return (
            <Col sm={6} md={3} lg={3} key={LeadershipItem.id}>
              <div className="team-card">
                <img src={LeadershipItem.photo} alt="" className="team-image" />
                <h5 className="mt-2">{LeadershipItem.nickname}</h5>
                <p className="position position-administrator text-center">{LeadershipItem.position}</p>
                <div className="d-flex flex-row social-icon justify-content-center mb-5">
                  <a href={LeadershipItem.social}><FaGlobe /></a>
                  <a href={LeadershipItem.social}><FaInstagram /></a>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default LeadershipEngine;
