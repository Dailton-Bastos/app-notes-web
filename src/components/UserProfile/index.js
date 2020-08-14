import React from 'react'
import Input from '../Input'
import './styles.css'

function UserProfile() {
  return (
    <div className="profile-container container">
      <div className="profile-info">
        <form>
          <Input type="text" label="Full Name" name="name" />
          <Input type="email" label="Email" name="email" />
          <Input type="password" label="Password" name="password" />
          <Input
            type="password"
            label="Confirm Password"
            name="passwordConfirm"
          />

          <div className="form-buttons">
            <div className="button-disable">
              <label htmlFor="">Disable account?</label>
              <input type="checkbox" name="disable_account" value="1" />
            </div>

            <button type="submit">Update</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserProfile
