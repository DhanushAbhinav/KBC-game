import React from 'react'

const Header = () => {
  return (
    <div className="header">
      <div className="logo">Chaperone</div>
      <input type="text" className="search-bar" placeholder="Search Plant" />
      <div className="header-icons">
        <i className="profile-icon">My Profile</i>
        <i className="cart-icon">Cart</i>
      </div>
    </div>
  )
}

export default Header
