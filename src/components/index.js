import React from 'react';
import car from "../images/car.jpg"
import lambo from "../images/lambo.gif"
import logow from "../images/logow.png"
import imagesback from "../images/imagesback.jpg_large"
import { Navbar,Container,Nav,NavDropdown, Form,FormControl,Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import { useState } from 'react';
import Header from '../includes/header';
import Footer from '../includes/footer';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import cart from "../images/cart.svg";

const Index = () => {
    const [show, setShow] = useState(false);
    const [loading, setLoading]=useState(true)
    const handleClose = () => setShow(false);
    const handleRegistration = () => setShow(true);
    const [cars, setCars]=useState([])
    const userPost = {
        username: "",
        number: "",
        email: "",
        firstname: "",
        lastname: "",
        location: "",
        password: "",
    }; 
    
    const [user, setUser] = useState(userPost)
    const handleInputChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`user/userregistration`,user, {
            method: 'POST',
        }).then((response,error) => {
            //setUser(response.data)
            if (response.data.message = "User Created Successfully") {
                console.log(response)
                alert("Account Created Successfully, Please Login!!!");
                window.location.reload();
            }else{
                alert("");
            }
        }).catch((err) => {
            if (err.response.message === "Email Already Exist" || err.response.status === 409) {
                alert("Email has already been taken.");
            } else if(err.response.message === "Empty Input Fields!" || err.response.status === 500) {
                alert("some of the input Field is Empty");
                
            }else if(err.response.message === "Password is too short" || err.response.status === 417){
                alert("Your Password is too short");
            }else if(err.response.message === "Invalid Email Name" || err.response.status === 400){
                alert("Please Enter a Valid Email");
            }
        });
    }


    useEffect(()=>{
        let mounted=true
        axios.get(`car/viewcars`).then((res)=>{
            if(mounted){
                if(res.data.message==="success"){
                    setCars(res.data.diplayallCar)
                    setLoading(false)
                    //console.log(cars)
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
       var showallcars=''
       showallcars=cars.map((car, index)=>{
           return(
             
                <div className="col-md-3" key={index}>
                    
                        <div className="card">
                        <div className="card-body">
                        <img src={`https://automartbackend.herokuapp.com/${car.carimage[0].path}`} alt="" className='w-100'/>
                        <div className="card-text text-success mt-4 fw-bold">&#8358; {car.price}.</div>
                            <div className="card-title fw-bold" >{car.model.modelname}-{car.year.year}</div>
                            <div className="card-text">{car.description}.</div>
                            <a href="#" className="cartbutton"><img src={cart} alt="cart"/> Add to Cart</a>
                        </div>
                        </div>
                    
                </div>
            
           )
       })
    }
    return (
        <div>  
            <Header/>
            <div style={{backgroundImage: `url(${lambo})`}} className="banner">
                <div className='d-block p-3 align-middle'>
                    {/* <div><img src={logow} alt="Logo Image"/></div> */}
                    <div className='w-full bg-white p-3'><span className='fw-bold'>FIND YOUR EXHAUST:</span> 
                        <span>
                        <select>
                            <option>Brand</option>
                        </select>
                        <select>
                            <option>Model</option>
                        </select>
                        <select>
                            <option>Year</option>
                        </select>
                        </span>
                    </div>

                    <center><div className='text-center bg-white mt-4 w-25 p-2 fw-bold bg-white rounded cursor-pointer' role="button" onClick={handleRegistration}>Register</div></center>
                </div>

                
            </div>

            


            <>
            <p className='text-center fs-5 fw-bold mt-4'>YOU ARE ONE STEP AWAY FROM OVER 250 000 VEHICLES AVAILABLE FOR SALE</p>   
               <div className='py-3'>
                    <div className='container'>
                        <div className='row'>
                            {showallcars}
                        </div>
                    </div>
               </div>
               
                       
                      

                  
            </>

            <Modal show={show} onHide={handleClose} className="scrol">
                    <Modal.Header closeButton>
                    <Modal.Title>User Registration</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" name="username" placeholder="Username" onChange={handleInputChange} autoFocus/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="text" name="number" placeholder="08132185887" onChange={handleInputChange} autoFocus/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Email" onChange={handleInputChange} autoFocus/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" name="firstname" placeholder="First Name" onChange={handleInputChange} autoFocus/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" name="lastname"  placeholder="Last Name" onChange={handleInputChange} autoFocus/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Location</Form.Label>
                            <Form.Control type="text" name="location" placeholder="Location" onChange={handleInputChange} autoFocus/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="***********" onChange={handleInputChange} autoFocus/>
                        </Form.Group>

                        <Button variant="primary" onClick={handleSubmit} type="submit">
                        Register
                    </Button>
                      
                    </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    
                    </Modal.Footer>
                </Modal> 

                <Footer/>
                
        </div>  
    );

        
}

export default Index;
