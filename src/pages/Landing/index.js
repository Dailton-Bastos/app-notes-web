import React from 'react'
import landingImg from '../../assets/images/landing.jpg'
import PageFooter from '../../components/PageFooter'
import PageHeader from '../../components/PageHeader'
import './styles.css'

function Landing() {
  return (
    <>
      <PageHeader />
      <div id="page-landing" className="container">
        <div id="page-landing-content">
          <div className="content">
            <h1>
              Create. Organize. <br />
              Share. Easy
            </h1>

            <p>
              A digital worksapce that helps you to visually organize ideas,
              <br />
              create notes easily and access when you wants on the cloud.
            </p>

            <a href="/register">Try now for free</a>

            <span>Free, not credit card required, register now.</span>
          </div>

          <div className="hero-image">
            <img src={landingImg} alt="Notes Web" />
          </div>
        </div>
      </div>
      <PageFooter />
    </>
  )
}

export default Landing
