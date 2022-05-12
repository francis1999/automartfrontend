import React from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useState,useEffect } from 'react';
import cart from "../images/cart.svg";
import Nav from './Nav/Nav';
import passport from "../images/passport.jpeg"
import bell from "../images/bell.svg"
import envelope from "../images/envelope.svg"
import logow from "../images/logow.png"
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

const Singlecar = () => {
    const [loading, setLoading]=useState(true)
    const [cars, setCars]=useState()
    const { _id } = useParams();


    useEffect(()=>{
        let mounted=true
        axios.get(`car/getcarbyid/${_id}`).then((res)=>{
            if(mounted){
                if(res.data.message==="success"){
                    setCars(res.data.data)
                    setLoading(false)
                }
                else if(res.data.status==="500"){
                    new Swal("Warning", res.data.message,"error")
                }
            }
        })
       return()=>{
        mounted=false
       }
    })

    

    if(loading){
        return(
            <h3>Loading...</h3>
        )
    }
    else
    {
       
     
    }


    return (
        <div>
        <div className='dashboard-header justify-content-between d-flex p-2'>
        <div className=''>
            <div className='dashboard-logo'><img src={logow} alt="logo"/></div>
        </div>
        <div className='right-nav justify-content-between d-flex'>
            <div className='ml'><img src={envelope} alt="Message Bell" /></div>
            <div className='ml'><img src={bell} alt="notification Bell" /></div>
            <div className='ml'><img src={passport} alt="profile Picture" /></div>
        </div>
    </div>
        <div className='d-flex justify-content-between'>

            <div className='right-div'>
                <div><Link to="/dashboard/home">DASHBOARD</Link></div>
                <div><Link to="/dashboard/addcar">Add Car</Link></div>
                <div><Link to="/dashboard/allcars">View All Cars</Link></div>
                <div><Link to="/dashboard/logout">Logout</Link></div>
            </div>
            <div className='left-div'>
            <div className='py-3'>
                    <div className='container'>
                        <div className='row'>
                            <div className="col-md-8">
                                    <div className="card">
                                    <div className="card-body">
                                 <img src={`https://automartbackend.herokuapp.com/${cars.carimage[0].path}`} alt="" className='w-100'/>
                                    </div>
                                    </div>
                                </div>
                            <div className="col-md-4">
                                    <div className="card">
                                    <div className="card-body">
                                 <img src={`https://automartbackend.herokuapp.com/${cars.carimage[0].path}`} alt="" className='w-100'/>
                                    <div className="card-text text-success mt-4 fw-bold">&#8358; {cars.price}.</div>
                                        <div className="card-title fw-bold" >{cars.model.modelname}-{cars.year.year}</div>
                                        <div className="card-text">{cars.description}.</div>
                                        <a href="#" className="cartbutton"><img src={cart} alt="cart"/> Add to Cart</a>
                                    </div>
                                    </div>
                                </div>
                        </div>
                    </div>
               </div>
            <div className='py-3'>
                    <div className='container'>
                        <div className='row'>
                            <div className="col-md-3">
                                    <div className="card">
                                    <div className="card-body">
                                 <img src={`https://automartbackend.herokuapp.com/${cars.carimage[0].path}`} alt="" className='w-100'/>
                                    </div>
                                    </div>
                            </div>
                            <div className="col-md-3">
                                    <div className="card">
                                    <div className="card-body">
                                         <img src={`https://automartbackend.herokuapp.com/${cars.carimage[1].path}`} alt="" className='w-100'/>
                                    </div>
                                    </div>
                            </div>
                            <div className="col-md-3">
                                    <div className="card">
                                    <div className="card-body">
                                 <img src={`https://automartbackend.herokuapp.com/${cars.carimage[2].path}`} alt="" className='w-100'/>
                                    </div>
                                    </div>
                            </div>
                            <div className="col-md-3">
                                    <div className="card">
                                    <div className="card-body">
                                         <img src={`https://automartbackend.herokuapp.com/${cars.carimage[3].path}`} alt="" className='w-100'/>
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
            
        </div>
    </div>
    );
}

export default Singlecar;
