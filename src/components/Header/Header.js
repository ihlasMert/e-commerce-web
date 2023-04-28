import React from "react"
import { NavLink, Link } from "react-router-dom"
import "../../styles/header.css"

import { AiOutlineMenu } from "react-icons/ai"
import { BiUser } from "react-icons/bi"
import { FiShoppingCart } from "react-icons/fi"

const nav__links = [
  {
    display: "Home",
    path: "/home"
  },
  {
    display: "Foods",
    path: "/foods"
  },
  {
    display: "Cart",
    path: "/cart"
  },
  {
    display: "Contact",
    path: "/contact"
  }
]

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='logo'>
          <h5>FreshGrocery</h5>

          <h6></h6>
        </div>
        {/*--------  menu------ */}
        <div className='navigation'>
          <div className='menu'>
            {nav__links.map((item, index) => (
              <NavLink to={item.path} key={index}>
                {item.display}
              </NavLink>
            ))}
          </div>
        </div>

        {/* nav right icons */}
        <div className='nav__rights'>
          <span className='cart__icon'>
            <FiShoppingCart />
            <span className='cart__badge'>2</span>
          </span>

          <span className='user'>
            <Link to='/login'>
              <BiUser />
            </Link>
          </span>

          <span className='mobile__menu'>
            <AiOutlineMenu />
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header
