import React from 'react'
import Container from 'react-bootstrap/Container';
import '../scss/Footer.scss'
import { BsInstagram, BsDiscord } from "react-icons/bs";
import { FaXTwitter} from "react-icons/fa6";

const Footer = () => {

  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer expand="lg" className="nav-bg-colour">
      <Container>
        <div className="row">
          <div className="col-md-4 text-start mb-md mt-4 mb-1 text-center text-md-start">
            <p className="footer-text">Copyright &copy; {year} <span className="footer-span">BuildsMarket.com</span>. All rights reserved. We are not affiliated with <span className="footer-span">Mojang Studios</span>.</p>
          </div>
          <div className="col-md-4 text-center mb-md mt-3 mb-1">
            <div className="footer-icons">
              <a href="https://www.instagram.com/buildsmarket/" target="_blank"><BsInstagram /></a>
              <a href="https://discord.buildsmarket.com/" target="_blank"><BsDiscord /></a>
              <a href="https://twitter.com/BuildsMarket" target="_blank"><FaXTwitter /></a>
            </div>
            <p className="footer-text">contact@buildsmarket.com</p>
          </div>
          <div className="col-md-4 text-end mb-md mt-4 mb-1 text-center text-md-end">
            <p className="footer-text">Designed by · Erik “<span className="footer-span">eriixrd</span>” Bednařík.<br/>Coded by · <span className="footer-span">Tomáš Zeleňák</span>.</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer