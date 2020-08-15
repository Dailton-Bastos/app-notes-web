import React, { useState } from 'react'
import Input from '../../Input'
import UsersService from '../../../services/users'
import './styles.css'

function UpdateInfo() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)
  const [status, setStatus] = useState('')

  const handleSubmit = async (evt) => {
    evt.preventDefault()

    try {
      if (!email || !name) {
        setError(true)
        return setMessage('Name and email is required')
      }
      await UsersService.update({ name, email })

      setStatus('success')
      setError(false)
      setMessage('')
    } catch (error) {
      setStatus(false)
      setError(true)
      setMessage('Problem in update, try again')
    }
  }

  return (
    <div className="profile-info">
      <h2>Update Info</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          label="Full Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={error}
        />
        <Input
          label="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={error}
          message={message}
        />

        {status && <p>Updated with success</p>}

        <div className="form-buttons">
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  )
}

export default UpdateInfo
