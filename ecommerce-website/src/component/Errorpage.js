import React from 'react'
import { NavLink } from 'react-router-dom'

const Errorpage = () => {
  return (
    <>
        <div className="container" style={{height:"80vh", alignItems:"center", display:"flex", flexDirection:"column", justifyContent:"center"}}>
          <div className="errorpage text-center">
            <h2 style={{fontSize:"50px"}}>404</h2>
            <h2>OOPS! page not found.</h2>
            <p>The page your looking for doesn't exit.</p>
            <NavLink to="/">
            <button className='btn btn-primary'>Go Back to Home</button>
            </NavLink>
            
          </div>
        </div>
    </>
  )
}

export default Errorpage