import React from "react"
import home from "../../src/styles/home.css"
import backImg from "../assets/background-section.png"

const Home = () => {
  return (
    <div className='home'>
      <div className='homeImage'>
        <div className='text'>
          {" "}
          <h3>25% OFF DİSCOUNT İS RUNNİNG</h3>
          <h1>Your OneStep Online Grocery Store</h1>
          <button>Shop Now</button>
        </div>
        <img src={backImg} alt='backImg' />
      </div>
    </div>
  )
}

export default Home
