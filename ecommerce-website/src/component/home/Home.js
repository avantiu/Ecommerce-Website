import React from 'react'
import { NavLink } from 'react-router-dom'
import Products from '../products/Products'

import './Home.css'

const Home = (props) => {
  return (
    <>
      <div className="container py-5">
        <div className="row home mx-auto">
          <div className="col-md-6">
           <div className="title mt-5">
           <h1 style={{color:"#002c3e"}}>Sale 20% Off</h1>
            <h3 className='py-2' style={{color:"#002c3e"}}>On Everything</h3>
           </div>
            
            <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quae numquam fugiat ullam hic dicta, iste, quibusdam quidem quam fugit at dolorem harum beatae, provident reiciendis veritatis atque accusamus suscipit?</p>
            <NavLink to="/products">
              <button className='btn btn-primary'>Shop Now</button>
            </NavLink>
          </div>
          <div className="col-md-6 mt-3">
            <div className='d-flex mt-4 justify-content-center'>
              <img src="/images/col-img4.jpg" className='imghome' alt="" width="80%" height="300px" />
            </div>
          </div>
        </div>
      </div>
     <Products />
    </>
  )
}

export default Home