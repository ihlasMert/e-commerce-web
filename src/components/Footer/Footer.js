import React from "react"
import "../../styles/footer.css"

const Footer = () => {
  return <footer className='last'>
    <div className="logo">
      <h5>Fresh Groseryy</h5>
    </div>
    <div className="input">
      <h3>Sing up for new products and news and exclusive offers</h3>
      <input placeholder="Enter Email"/>
      <button>Sign Up</button>
    </div>
    <div className="underline"></div>
    <div className="companies">
      <ul>
        <li>about the company</li>
        <li>lorem</li>
        <li>lorem</li>
        <li>lorem</li>
        <li>lorem</li>
      </ul>
      <ul>
        <li>costumer service</li>
        <li>lorem</li>
        <li>lorem</li>
        <li>lorem</li>
        <li>lorem</li>
      </ul>
      <ul>
        <li>service</li>
        <li>lorem</li>
        <li>lorem</li>
        <li>lorem</li>
        <li>lorem</li>
      </ul>
      <ul>
        <li>about</li>
        <li>lorem</li>
        <li>lorem</li>
        <li>lorem</li>
        <li>lorem</li>
      </ul>
    </div>
  </footer>
}

export default Footer
