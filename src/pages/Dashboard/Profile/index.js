import React from 'react'
import Header from '../Header'
import UpdateInfo from '../../../components/UserProfile/UpdateInfo'
import UpdatePassword from '../../../components/UserProfile/UpdatePassword'
import DeleteAccount from '../../../components/UserProfile/DeleteAccount'
import './styles.css'

function UserProfile() {
  return (
    <>
      <Header />
      <div className="profile-container container">
        <UpdateInfo />
        <UpdatePassword />
        <DeleteAccount />
      </div>
    </>
  )
}

export default UserProfile
