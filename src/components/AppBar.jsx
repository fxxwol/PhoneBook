import React from 'react'
import Navigation from './Navigation'
import AuthNav from './AuthNav'

function AppBar() {
  return (
      <header>
      <Navigation />
      <AuthNav/>
    </header>
  )
}

export default AppBar