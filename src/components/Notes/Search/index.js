import React from 'react'
import { MdSearch, MdClear } from 'react-icons/md'
import './styles.css'

function Search() {
  return (
    <div className="search-container">
      <div className="input">
        <div className="input-container">
          <span>
            <MdSearch />
          </span>
          <input type="text" placeholder="Search notes" />
        </div>

        <span className="clear-filter">
          <MdClear />
        </span>
      </div>
      {/* <p>
        Searching for <strong>nodejs</strong>
      </p>
      <span>No notes found</span> */}
    </div>
  )
}

export default Search
