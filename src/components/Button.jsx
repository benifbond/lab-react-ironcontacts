import React from 'react'

function Button() {
    const RandomButton = Math.floor(Math.random() * 10)
  return (
    <div>
     
      <button onClick={() => (RandomButton)}>Add Random_contact</button>
    </div>
  )
}

export default Button
