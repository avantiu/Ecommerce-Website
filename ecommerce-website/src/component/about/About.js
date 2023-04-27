import React from 'react'
import { NavLink } from 'react-router-dom'
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import Title from '../../Title'
import './About.css'

const About = () => {



  return (
    <>
      <div className="container mb-5">
        <div className="row about mx-auto">
          <div className="col-md-6 mt-5">
            <Title title="About Us" />
            <p className='py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quae numquam fugiat ullam hic dicta, iste, quibusdam quidem quam fugit at dolorem harum beatae, provident reiciendis veritatis atque accusamus suscipit?</p>
            <NavLink to="/contact" className="btn btn-outline-primary">
              Contact Us
            </NavLink>
          </div>
          <div className="col-md-6">
            <div className='d-flex mt-4 justify-content-center'>
              <img src="/images/col-img1.jpg" className='imghome' alt="" width="80%" height="300px" />
            </div>
          </div>
        </div>

        <div className="section py-3">
          <div className='aboutsubtitle'>
          <h2 className='text-center'>Why Shop With Us</h2>
          </div>
         
        <div className='main justify-content-center py-5 text-white'>
          <div className="box text-center p-4 d-flex justify-content-center align-items-center">
            <div className="service">
              <TbTruckDelivery className='fs-2' />
              <h5 className='py-2'>Free Delivery</h5>
            </div>
          </div>
          <div className="box text-center p-4 d-flex justify-content-center align-items-center">
            <div className="service">
              <MdSecurity className='fs-2' />
              <h5 className='py-2'>Non-contact Shipping</h5>
            </div>
          </div>
          <div className="box text-center p-4 d-flex justify-content-center align-items-center">
            <div className="service">
              <GiReceiveMoney className='fs-2' />
              <h5 className='py-2'>Money-back Guaranteed</h5>
            </div>
          </div>

        </div>
        </div>
        
      </div>
    
        
     
    </>
  )
}

export default About