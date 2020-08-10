import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import UsersServices from '../../services/users'
import Input from '../Input'
import './styles.css'

function SigninForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)

  const history = useHistory()

  const handleSubmit = async (evt) => {
    evt.preventDefault()

    try {
      if (!email || !password) {
        setError(true)
        return setMessage('Please, all fields are required!')
      }

      await UsersServices.login({ email, password })

      return history.push('/dashboard')
    } catch (error) {
      setMessage('Email or Password invalid!!')
      return setError(true)
    }
  }

  return (
    <div id="form-content-login">
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={error}
        />

        <Input
          type="password"
          name="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={error}
          message={message}
        />
        <div className="form-buttons">
          <p>
            Don't have an account? <Link to="/register">Sign up</Link>
          </p>

          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}

export default SigninForm
