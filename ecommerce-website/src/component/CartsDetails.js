import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { cartReducer } from './redux/reducer/Reducer'
import { DEC, add, remove } from './redux/action/Actions'
import Title from '../Title'
import DATA from '../Db'


const CartsDetails = () => {

  let [data, setData] = useState([])
  // console.log(data);

  let { id } = useParams();

  let dispatch = useDispatch()

  //add
  let send = (elem)=>{
    dispatch(add(elem));
}

  let dlt = (id)=>{
    dispatch(remove(id))
    history('/products')
}

//decrement
let decrement = (e)=>{
  dispatch(DEC(e))
}

let history = useNavigate()

  let getData = useSelector((state) => state.cartReducer.carts)
  console.log(getData);

  let compare = ()=>{
    let compareData = getData.filter((e) => {
      return e.id == id
    })
    // setdata(compareData);
    setData(compareData);
  }

  useEffect(() => {
    compare();
  }, [id])

  return (
    <>
      <div className="container py-5">
        <div className='text-center py-4'>
          <Title title="Items Details" />
        </div>
        <section className='container mt-3'>
          <div className="row align-items-center itemdetails">

            {
              DATA.map((e) => {
                return (
                  <>
                    <div className="col-sm-6 col-md-6 mb-5" key={e.id}>
                      <img src={e.img} alt="" width="100%" height="350px" />
                    </div>
                    <div className="col-sm-6 col-md-6">
                      <table>
                        <tbody className='mt-5'>
                          <tr>
                            <td>
                              <p> <strong>Name:</strong> {e.title} </p>
                              <p> <strong>Info:</strong> {e.desc} </p>
                              <p> <strong>Price:</strong> ${e.price} </p>
                              <p> <strong>Rating:</strong> <span className='bg-primary p-1 text-white' style={{borderRadius:"4px"}}>{e.rating} ★ </span></p>
                              <p> <strong>Total:</strong> ${e.price * e.quantity} </p>

                              <div className="mt-4 mb-3 d-flex justify-content-evenly align-items-center" style={{background:"#ddd", width:"25%"}}>
                                  <span style={{fontSize:"24px", cursor:"pointer"}} onClick={()=>decrement(e)}>-</span>
                                  <span style={{fontSize:"18px"}}>{e.quantity}</span>
                                  <span style={{fontSize:"24px", cursor:"pointer"}} onClick={()=>send(e)}>+</span>
                              </div>

                              <p> <strong>Remove:</strong> <i className='fas fa-trash p-2 text-danger' onClick={()=>dlt(e.id)} style={{ cursor: "pointer" }}></i> </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <hr />
                  </>
                )
              })
            }


          </div>

        </section>
      </div>
    </>
  )
}



export default CartsDetails