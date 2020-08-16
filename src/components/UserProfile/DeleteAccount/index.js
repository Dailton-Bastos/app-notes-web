import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import UsersService from '../../../services/users'
import './styles.css'

function DeleteAccount() {
  const [redirectToHome, setRedirectToHome] = useState(false)

  const handleDeleteUser = async () => {
    const confirm = window.confirm('Are you sure?')

    if (!confirm) return

    await UsersService.delete()
    setRedirectToHome(true)
  }

  if (redirectToHome) return <Redirect to={{ pathname: '/' }} />
  return (
    <div className="danger-area">
      <h2>Delete Account</h2>

      <div className="form-buttons">
        <button type="submit" onClick={() => handleDeleteUser()}>
          Delete My Account
        </button>
      </div>
    </div>
  )
}

export default DeleteAccount
