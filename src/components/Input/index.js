import React from 'react'
import './styles.css'

function Input({ label, name, message, error, ...rest }) {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <input id={name} {...rest} />
      {error && <small>{message}</small>}
    </div>
  )
}

export default Input
