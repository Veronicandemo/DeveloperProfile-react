import React from 'react'
import HeaderItems from './HeaderItems'
import './Header.css'
import Profile from './Profile'
const headerList = [
  { id: 1, description: 'Sneakers' },
  { id: 2, description: 'Collections' },
  { id: 3, description: 'Men' },
  { id: 4, description: 'Women' },
  { id: 5, description: 'About ' },
  { id: 6, description: 'Contact' },
]

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          {headerList.map((item) => (
            <HeaderItems item={item} key={item.id} />
          ))}
        </ul>
        <Profile />
      </nav>
    </header>
  )
}

export default Header
