import React from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useState,useEffect } from 'react';
import cart from "../images/cart.svg";
import passport from "../images/passport.jpeg"
import bell from "../images/bell.svg"
import envelope from "../images/envelope.svg"
import logow from "../images/logow.png"
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import Header from '../includes/header';

const Singlecarpage = () => {
    const [loading, setLoading]=useState(true)
    const [cars, setCars]=useState()
    const { _id } = useParams();


    useEffect(()=>{
        let mounted=true
        axios.get(`getcarbyid/${_id}`).then((res)=>{
            if(mounted){
                if(res.data.message==="success"){
                    setCars(res.data.diplayallCar[0])
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
            <Header/>
            <div className='d-flex justify-content-between'>
                <div className='left-div'>
                <div className='py-3'>
                        <div className='container'>
                            <div className='row'>
                                <div className="col-md-8">
                                        <div className="card">
                                        <div className="card-body">
                                    <img src={`https://automartbackend.herokuapp.com/${cars.image[0].filePath}`} alt="" className='w-100'/>
                                        </div>
                                        </div>
                                    </div>
                                <div className="col-md-4">
                                        <div className="card">
                                        <div className="card-body">
                                    <img src={`https://automartbackend.herokuapp.com/${cars.image[0].filePath}`} alt="" className='w-100'/>
                                        <div className="card-text text-success mt-4 fw-bold">&#8358; {cars.price}.</div>
                                            <div className="card-title fw-bold" >{cars.modelname}-{cars.year}</div>
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
                                    <img src={`https://automartbackend.herokuapp.com/${cars.image[1].filePath}`} alt="" className='w-100'/>
                                        </div>
                                        </div>
                                </div>
                                <div className="col-md-3">
                                        <div className="card">
                                        <div className="card-body">
                                            <img src={`https://automartbackend.herokuapp.com/${cars.image[2].filePath}`} alt="" className='w-100'/>
                                        </div>
                                        </div>
                                </div>
                                <div className="col-md-3">
                                        <div className="card">
                                        <div className="card-body">
                                    <img src={`https://automartbackend.herokuapp.com/${cars.image[3].filePath}`} alt="" className='w-100'/>
                                        </div>
                                        </div>
                                </div>
                                <div className="col-md-3">
                                        <div className="card">
                                        <div className="card-body">
                                            <img src={`https://automartbackend.herokuapp.com/${cars.image[0].filePath}`} alt="" className='w-100'/>
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

export default Singlecarpage;
