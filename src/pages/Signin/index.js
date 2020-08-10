import React from 'react'
import ImageHero from '../../assets/images/loginHero.png'
import PageHeader from '../../components/PageHeader'
import SigninForm from '../../components/Signin'
import './styles.css'

function Signup() {
  return (
    <>
      <PageHeader />
      <div id="page-login" className="container">
        <div className="page-login-content">
          <div className="login-form">
            <h1>Sign In</h1>
            <p>Sign In to create amazing notes</p>

            <SigninForm />
          </div>

          <div className="image-hero">
            <img src={ImageHero} alt="Login" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
