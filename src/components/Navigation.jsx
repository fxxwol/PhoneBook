import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
      <nav>
          <NavLink to='/contacts'>Contacts</NavLink>
    </nav>
  )
}

export default Navigation