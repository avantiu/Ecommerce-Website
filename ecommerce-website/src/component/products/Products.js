import React from 'react'
import './Products.css'
import { NavLink } from 'react-router-dom'
import DATA from '../../Db'
import Title from '../../Title'
import { useDispatch } from 'react-redux'
import { add } from '../redux/action/Actions'

const Products = () => {

  let dispatch = useDispatch()
  let send = (elem)=>{
      dispatch(add(elem));
      alert("Item is added. See details of products in cart section.")
  }
  

  return (
    <>
      <div className="container py-3">
        <div className="text-center mt-5">
          <Title title="Our Products" />
          <hr />
        </div>
        <div className="row justify-content-center">
          {
            DATA.map((e, i) => {
              return (
                <div className="col-md-4 col-sm-6" key={e.id}>
                  <div className="card my-5 py-2 mx-auto" style={{ width: "80%" }}>
                    <img src={e.img} className="card-img-top" alt={e.title} width="100%"  />
                    <div className="card-body text-center">
                      <h5 className="card-title">{e.title}</h5>
                      <p className=''>${e.price}</p>
                      <button className="btn btn-outline-primary alert-primary" onClick={()=>send(e)}>Add to Cart</button>
                      
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Products