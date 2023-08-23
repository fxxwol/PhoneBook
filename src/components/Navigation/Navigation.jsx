import React from 'react'
import { NavigationLink } from './Navigation.styled'

function Navigation() {
  return (
      <nav>
          <NavigationLink to='/contacts'>Contacts</NavigationLink>
    </nav>
  )
}

export default Navigation