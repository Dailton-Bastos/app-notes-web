import React, { useState } from 'react'
import UsersService from '../../../services/users'
import Input from '../../Input'
import './styles.css'

function UpdatePassword() {
  const [oldPassword, setOldPassword] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [status, setStatus] = useState(null)
  const [error, setError] = useState(false)
  const [passwordFails, setPasswordFails] = useState(false)

  const handleSubmit = async (evt) => {
    evt.preventDefault()

    if (oldPassword) {
      if (password === confirmPassword) {
        try {
          await UsersService.update({ oldPassword, password, confirmPassword })

          setStatus('success')
          setError(false)
          setPasswordFails(false)

          setOldPassword('')
          setPassword('')
          setConfirmPassword('')
        } catch (error) {
          setPasswordFails(true)
          setError(false)
          setStatus('password-fails')
        }
      } else {
        setError(true)
        setStatus('error_confirmation_password')
      }
    }
  }
  return (
    <div className="update-password">
      <h2>Update Password</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="password"
          label="Password"
          name="OldPassword"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          error={passwordFails}
        />
        <Input
          type="password"
          label="New Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={error}
        />
        <Input
          type="password"
          label="Confirm New Password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          error={error}
        />

        {status === 'error_confirmation_password' && (
          <p>New password and confirm password don't match</p>
        )}

        {status === 'password-fails' && <p>Password don't match</p>}

        {status === 'success' && (
          <p className="success">Updated with success</p>
        )}

        <div className="form-buttons">
          <button type="submit">Update Password</button>
        </div>
      </form>
    </div>
  )
}

export default UpdatePassword
