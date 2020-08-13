import React from 'react'
import { MdSearch, MdClear } from 'react-icons/md'
import './styles.css'
import { useState } from 'react'

function Search(props) {
  const [filter, setFilter] = useState('')

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') props.search(filter)
  }

  return (
    <div className="search-container">
      <div className="input">
        <div className="input-container">
          <span onClick={() => props.search(filter)}>
            <MdSearch />
          </span>
          <input
            type="text"
            placeholder="Search notes"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>

        <span
          className="clear-filter"
          onClick={() => {
            props.fetchNotes()
            setFilter('')
          }}
        >
          <MdClear />
        </span>
      </div>

      {filter && (
        <p>
          Searching for <strong>{filter}</strong>
        </p>
      )}
    </div>
  )
}

export default Search
