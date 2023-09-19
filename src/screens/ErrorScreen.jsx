import React from 'react'
import { Container } from 'react-bootstrap'
import '../scss/ErrorScreen.scss'

const ErrorScreen = () => {
  return (
    <section className="error-section">
        <Container>
            <div className="error-wrapper">
                <div className="error-table d-flex flex-column justify-content-center align-items-center">
                    <h2>Error</h2>
                    <p className="error-p">Page was not found</p>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default ErrorScreen