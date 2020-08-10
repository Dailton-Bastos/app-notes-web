import React from 'react'
import ImageHero from '../../assets/images/registerHero.png'
import PageHeader from '../../components/PageHeader'
import SignupForm from '../../components/Signup'
import './styles.css'

function Signup() {
  return (
    <>
      <PageHeader />
      <div id="page-register" className="container">
        <div className="page-register-content">
          <div className="image-hero">
            <img src={ImageHero} alt="Register" />
          </div>

          <div className="register-form">
            <h1>Sign Up</h1>
            <p>Sign Up to create amazing notes</p>

            <SignupForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
