import React, { useRef } from "react"
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
  const menuRef = useRef(null)
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu")
  return (
    <header>
      <div className='container'>
        <div className='logo'>
          <h5>FreshGrocery</h5>

          <h6></h6>
        </div>
        {/*--------  menu------ */}
        <div className='navigation' ref={menuRef}>
          <div className='menu'>
            {nav__links.map((item, index) => (
              <NavLink
                onClick={toggleMenu}
                to={item.path}
                key={index}
                className={(navClass) =>
                  navClass.isActive ? "active__menu" : ""
                }
              >
                {item.display}
              </NavLink>
            ))}
          </div>
        </div>

        {/* nav right icons */}
        <div className='nav__right rights'>
          <span className='cart__icon'>
            <FiShoppingCart className='i' />
            <span className='cart__badge'>2</span>
          </span>

          <span className='user'>
            <Link to='/login'>
              <BiUser className='i' id='id' />
            </Link>
          </span>

          <span className='mobile__menu' onClick={toggleMenu}>
            <AiOutlineMenu className='i' />
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header
