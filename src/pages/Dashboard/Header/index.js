import React, { useState } from 'react'
import { MdArrowDropDown } from 'react-icons/md'
import { Link, useHistory } from 'react-router-dom'
import noteIcon from '../../../assets/images/note.svg'
import UsersService from '../../../services/users'
import './styles.css'

function Header() {
  const [user] = useState(localStorage.getItem('user'))

  const history = useHistory()

  const logOut = async () => {
    await UsersService.logout()

    return history.push('/')
  }

  return (
    <header className="header-dasboard">
      <div className="content container">
        <div className="logo">
          <img src={noteIcon} alt="Note" />
          <Link to="/dashboard">NoteApp</Link>
        </div>

        <div className="profile">
          <div className="username">
            <span>{JSON.parse(user)['name'] || 'Welcome'}</span>
            <span>
              <MdArrowDropDown />
            </span>
          </div>

          <nav className="menu">
            <ul>
              <li>
                <Link to="/dashboard/profile">My Profile</Link>
              </li>
              <li>
                <button type="button" onClick={() => logOut()}>
                  LogOut
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
