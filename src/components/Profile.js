import React from 'react'
import { BiCartAlt } from 'react-icons/bi'

const Profile = () => {
  return (
    <div className="profile">
      <BiCartAlt style={{ fontSize: '3rem', color: '#7b7b7b' }} />
      <img src="image-avatar.jpeg" />
    </div>
  )
}

export default Profile
