import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Turnstile from "react-turnstile";
import axios from 'axios';
import '../scss/ApplyScreen.scss'

const ApplyScreen = () => {
  const apiServer = import.meta.env.VITE_API_SERVER;

  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [expected, setExpected] = useState("");
  const [message, setMessage] = useState("");
  const [role, setRole] = useState("builder");

  const [turnstileToken, setTurnstileToken] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!turnstileToken) {
      console.error("Verification not complete!")
      // TODO: Show error dialog to complete captcha

      return;
    }

    let body = {
      nickname,
      email,
      role,
      portfolio,
      expected,
      message,
      turnstileToken
    }

    let response;

    try {
      response = await axios.post(`${apiServer}/apply`, body);
    } catch (error) {
      console.error("Server couldn't be reached!");
      // TODO: Show error dialog

      return;
    }

    if (response.status !== 200) {
      console.error("Something went wrong!")
      // TODO: Show error dialog

      return;
    }

    if (!response.data["success"]) {
      console.error(`Server replied with error: ${response.data["error"]}`)
      // TODO: Show error dialog

      // turnstile_unreachable -> Cloudflare server unreachable
      // turnstile_badrequest -> Cloudflare server issue, or invalid request on backend
      // turnstile_verifyfailed -> Failed to verify, try refresh (could be attack)
      // email_notvalid -> Invalid or non-reachable email address
      // role_notvalid -> Invalid role, requires only builder, graphic and render
      // email_serverrefused -> SMTP server refused to send mail from backend
      // unknown -> Unknown error occurred

      return;
    }

    console.log("Request sent successfully!")
  };

  return (
    <section className="apply-section">
      <Container>
        <div className="apply-wrapper column text-center">
          <h2>Apply</h2>
          <p className="apply-p mt-3 paragraph-color">
            Become a member of ambitious and talented individuals, where you not only learn things but can also use them
            to your advantage and earn something!
          </p>

          <div className="d-flex flex-wrap mt-5 justify-content-center buttons-apply-wrapper">
            <div className="mb-4">
              <button type="button" className={`role role-builder ${role === "builder" ? 'active' : ''}`} onClick={() => setRole("builder")}>Builder</button>
            </div>
            <div className= "mb-4">
              <button type="button" className={`role role-graphic ${role === "graphic" ? 'active' : ''}`} onClick={() => setRole("graphic")}>Graphic</button>
            </div>
            <div className=" mb-4">
              <button type="button" className={`role role-render ${role === "render" ? 'active' : ''}`} onClick={() => setRole("render")}>Render</button>
            </div>
          </div>

          <div className="form-wrapper mt-4">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 col-12 text-start">
                  <div className="form-group d-flex flex-column">
                    <label htmlFor="nickname" className="label-text">Your Minecraft Nickname</label>
                    <input
                        type="text"
                        className="mt-2"
                        name="nickname"
                        placeholder="Nickname"
                        autoComplete="off"
                        required
                        value={nickname}
                        onChange={(event) => setNickname(event.target.value)}
                    />
                  </div>
                  <div className="form-group d-flex flex-column mt-2">
                    <label htmlFor="email" className="label-text">E-Mail</label>
                    <input
                        type="email"
                        className="mt-2"
                        name="email"
                        placeholder="E-mail"
                        autoComplete="off"
                        required
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>
                  <div className="form-group d-flex flex-column mt-2">
                    <label htmlFor="portfolio" className="label-text">Portfolio Link</label>
                    <input
                        type="text"
                        className="mt-2"
                        name="portfolio"
                        placeholder="https://example.com"
                        autoComplete="off"
                        required
                        value={portfolio}
                        onChange={(event) => setPortfolio(event.target.value)}
                    />
                  </div>
                  <div className="form-group d-flex flex-column mt-2 mb-2">
                    <label htmlFor="pleasant-collective" className="label-text">What do you expect from us?</label>
                    <input
                        type="text"
                        className="mt-2"
                        name="pleasant-collective"
                        placeholder="Pleasant collective"
                        autoComplete="off"
                        required
                        value={expected}
                        onChange={(event) => setExpected(event.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-6 col-12 text-start">
                  <div className="form-group d-flex flex-column">
                    <label htmlFor="message" className="label-text mb-2">Why do you want to join?</label>
                    <textarea
                        rows="8"
                        cols="auto"
                        name="message"
                        placeholder="Start typing..."
                        autoComplete='off'
                        required
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                    ></textarea>
                  </div>
                  <div className="col-12 form-group text-center text-sm-end mt-4">
                    <Turnstile
                      sitekey={import.meta.env.VITE_TURNSTILE_PUBLIC_KEY}
                      theme="dark"
                      onVerify={(token) => setTurnstileToken(token)}
                      className="mt-2"
                    />
                    <button type="submit" className="form-button mt-2">Send</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
            
        </div>
      </Container>
    </section>
  )
}

export default ApplyScreen
