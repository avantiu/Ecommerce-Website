import React from 'react'
import Title from '../../Title'

const Contact = () => {
  return (
    <>

      <div className="container">
        
        <div className="row vh-100 align-items-center justify-content-center">
        
          <div className="col-md-6 ">
          {/* <h2 className='text-center mb-5'>Contact Me</h2> */}
          <div className='text-center mb-5'>
          <Title title="Contact Us"  />
          </div>
          
            <form action="https://formspree.io/f/xjvdjwbb" method='POST'>

              <div className="form-outline mb-4">
                <input type="text" className="form-control" placeholder='Username' name="Username" required autoComplete='off'/>
                {/* <label className="form-label" for="form4Example1"></label> */}
              </div>


              <div className="form-outline mb-4">
                <input type="email" className="form-control" placeholder='Email' name='Email' required autoComplete='off' />
                {/* <label className="form-label" for="form4Example2">Email address</label> */}
              </div>


              <div className="form-outline mb-4">
                <textarea className="form-control" rows="4" placeholder='Enter your Message' name='Message' required autoComplete='off'></textarea>
                {/* <label className="form-label" for="form4Example3">Message</label> */}
              </div>
              <div className='text-center '>
              <button type="submit" className="btn btn-primary btn-block mb-4">Submit</button>
              </div>
              
            </form>
          </div>
        </div>
      </div>


    </>
  )
}

export default Contact