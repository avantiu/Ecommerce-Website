import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import './Navbar.css'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { cartReducer } from '../redux/reducer/Reducer';
import { remove } from '../redux/action/Actions';

const Navbar = () => {

    const [price, setPrice] = useState(0)
    console.log(price);

    let getData = useSelector((state) => state.cartReducer.carts)
    // console.log(getData);

    let dispatch = useDispatch()

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    let dlt = (id)=>{
        dispatch(remove(id))
    }

    let total = ()=>{
        let price = 0;
        getData.map((e, i)=>{
            price = e.price + price
        })
        setPrice(price)
    }

    useEffect(() => {
        total()
    }, [total])
    

    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top bg-white">
                <div className="container">
                    <NavLink to="/"><img src="/images/logo1.jpg" alt="" width="100%" height="45vh" /></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-black mx-2" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-black mx-2" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-black mx-2" to="/products">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-black mx-2" to="/contact">Contact</Link>
                            </li>
                            <div className="position-relative cart mx-auto text-center">
                                <Badge badgeContent={getData.length} color="primary" className="position-absolute top-50 start-0 translate-middle ms-4" id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}>
                                    <i className="fa-solid fa-cart-shopping text-black fs-4 text-center"></i>
                                </Badge>
                            </div>
                        </ul>
                    </div>
                </div>
                <Menu className='mt-2'
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    {
                        getData.length ?
                            <div className="cart">
                                <table className="table">
                                    <thead>
                                        <tr className='text-center'>
                                            <th scope="col">Products</th>
                                            <th scope="col">Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                       {
                                        getData.map((e)=>{
                                            return (
                                                
                                                    <tr key={e.id}>
                                                        <td>
                                                           <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                                                            <img src={e.img} alt="" width="100%" height="100vh" title="see details" />
                                                            </NavLink> 
                                                        </td>
                                                        <td className='text-center'>
                                                            <p>{e.title}</p>
                                                            <p>Price: ${e.price}</p>
                                                            <p>Quantity: {e.quantity}</p>
                                                            <p style={{cursor:"pointer"}}  onClick={()=>dlt(e.id)}>
                                                                <i className='fas fa-trash text-danger smalltrash'></i>
                                                            </p>
                                                        </td>
                                                        <td className='mt-5' style={{cursor:"pointer"}}  onClick={()=>dlt(e.id)}>
                                                            <i className='fas fa-trash text-danger largetrash='></i>
                                                        </td>
                                                    </tr>
                                            )
                                        })
                                       }
                                       <p className='text-center'>Total: ${price}</p>
                                    </tbody>
                                </table>
                            </div> :
                            <div className='position-relative p-2'>

                                <i className='fas fa-close position-absolute p-1' style={{
                                    right: "3px",
                                    top: "2px", cursor: "pointer"
                                }} onClick={handleClose}></i>
                                <span className='p-2 mx-3'>Your Cart is Empty<i className="fa-solid fa-cart-shopping text-primary fs-5 mx-2"></i></span>

                            </div>
                    }


                </Menu>
            </nav>
        </>
    )
}

export default Navbar