import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import UsersServices from '../../services/users'
import Input from '../Input'
import './styles.css'

function SignupForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)

  const history = useHistory()

  const handleSubmit = async (evt) => {
    evt.preventDefault()

    try {
      if (!name || !email || !password) {
        setError(true)
        return setMessage('Please, all fields are required!')
      }

      await UsersServices.register({
        name,
        email,
        password,
      })

      return history.push('/signin')
    } catch (error) {
      setMessage('Problem to register, try again!')
      return setError(true)
    }
  }

  return (
    <div id="form-content">
      <form onSubmit={handleSubmit}>
        <Input
          name="name"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={error}
        />

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
            Have an account already? <Link to="/signin">Sign in</Link>
          </p>

          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  )
}

export default SignupForm
