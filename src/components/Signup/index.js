import React from 'react'
import Input from '../Input'
import './styles.css'

function SignupForm() {
  return (
    <div id="form-content">
      <form>
        <Input name="name" label="Name" />

        <Input type="email" name="email" label="Email" />

        <Input type="password" name="password" label="Password" />
        <div className="form-buttons">
          <p>
            Have an account already? <a href="/signin">Sign in</a>
          </p>

          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  )
}

export default SignupForm
