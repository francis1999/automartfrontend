import React from 'react';
import Nav from './Nav/Nav';
import { useDispatch,useSelector } from 'react-redux';
import passport from "../images/passport.jpeg";
import bell from "../images/bell.svg"
import envelope from "../images/envelope.svg";
import logow from "../images/logow.png";
import { Link } from 'react-router-dom';
import {Form,Button} from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { removeUserSession } from '../Session/userSession';
const getUser = localStorage.getItem("data");


const Addcar = () => {
    const navigate = useNavigate();
    const getToken = localStorage.getItem("token");

    const sendCar = {
        description: "",
        brand: "",
        model: "",
        year: "",
        kms: "",
        state: "",
        user_id: "",
        condition: "",
        price: "",
        carimage: []
      
    };
    const [response, setResponse] = useState(sendCar);
    const [images, setImages]=useState([]);
    const[imagesURLs, setImageURLs]=useState([]);
    const [kilometers, setKilometers]=useState([])
    const [states, setStates]=useState([])
    const [years, setYears]=useState([])
    const [models, setModels]=useState([])
    const [brands, setBrands]=useState([])

    /* useEffect(()=>{
        if(images.length<1)return;
        const newImageURLs=[];
        images.forEach(image=>newImageURLs.push(URL.createObjectURL(image)))
        setImageURLs(newImageURLs);
    },[images]); */

    

    const onImageChange=(e)=>{
        setImages({carimage:e.target.files});
        /* setImages([e.target.files]); */
        console.log(images)
        console.log([e.target.files])
    }
/* 
    function onImageChange(e){
        e.persist();
        setImages([...e.target.files]);
    } */


    const handleInputChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target
        setResponse({ ...response, [name]: value })
    }
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getToken}`
    };
/****************Add Car Code **************/
/* 
 description: "",
        brand: "",
        model: "",
        year: "",
        kms: "",
        state: "",
        user_id: "",
        condition: "",
        price: "",
        carimage: []
*/
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        /* formData.append('carimage[]',images.carimage) */

        /* for (let i = 0; i < images.length; i++) {
            formData.append('carimage[]')
         } */
        /* for (let i = 0; i < files.length; i++) {
            galleryData.append('images[]', file[i])
         } */

        /*  console.log(images)
         response.carimage=images; */
         /* formData.append('carimage[]',images.carimage[0]) */
        /*  formData.append('carimage[]',images.carimage[1]) */
         /* formData.append('carimage[]',images.carimage[2]) */
         formData.append('carimage[]',images.carimage)
        
        formData.append('brand',response.brand)
        formData.append('model',response.model)
        formData.append('year',response.year)
        formData.append('kms',response.kms)
        formData.append('state',response.state)
        formData.append('user_id',response.user_id)
        formData.append('condition',response.condition)
        formData.append('price',response.price)

        axios.post(`car/addcar`,response, { 
            headers: { 'Content-Type': 'multipart/form-data' },
        }).then((response,error) => {
            //setUser(response.data)
            if (response.data.message = "You have successfully Posted Car") {
                console.log(response)
                new Swal("Upload Successful");
                /* window.location.reload(); */
            }else{
                alert("");
            }
        }).catch((err) => {
             if(err.response.message === "Empty Input Fields!" || err.response.status === 500) {
                new Swal("some of the input Field is Empty");
                
            }else if(err.response.message === "Password is too short" || err.response.status === 417){
                alert("Your Password is too short");
            }else if(err.response.message === "Invalid Email Name" || err.response.status === 400){
                alert("Please Enter a Valid Email");
            }
        });
    }

    /****************Add Car Code End **************/





/**************** Logout Code Start**************/
    const handleLogout = async (props) => {
    await axios.post(`user/Logout`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${getToken}`
        },
    }).then(function (response) {
        console.log(response);
        if (response.data.message == "Logout") {
            new Swal("You Have Successfully Logged Out!!!");
            removeUserSession("data", "token");
            navigate('/');

        } else {
            alert("Error Logout");
        }
    })

};
/**************** Logout Code End**************/
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
                    {/* <div className='ml'>{getdata}</div> */}
                </div>
            </div>
            <div className='d-flex justify-content-between'>
                <div className='right-div'>
                    <div><Link to="/dashboard/home">DASHBOARD</Link></div>
                    <div><Link to="/dashboard/addcar">Add Car</Link></div>
                    <div><Link to="/dashboard/allcars">View All Cars</Link></div>
                    <div><Link to="/dashboard/logout" onClick={handleLogout}>Logout</Link></div>
                </div>

                {/* 
                 description: "",
        brand: "",
        model: "",
        year: "",
        kms: "",
        state: "",
        user_id: "",
        condition: "",
        price: "",
        carimage: [] */}
                <div className='left-div p-4'>
                <Form encType="multipart/form-data">
                    <Form.Group className="mb-3">
                        <Form.Label>Brand</Form.Label>
                        <Form.Select name="brand" onChange={handleInputChange}>
                        <option>---Select Brand---</option>
                        <option>Mazda</option>
                        <option>Peugoet</option>
                       
                        
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Model</Form.Label>
                        <Form.Select name="model" onChange={handleInputChange}>
                        <option>---Select Model---</option>
                        <option>Brand 1</option>
                        <option>Brand 2</option>
                        <option>Brand 23</option>
                       
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>year</Form.Label>
                        <Form.Select name="year" onChange={handleInputChange}>
                        <option>---Select Year---</option>
                        <option>2001</option>
                        <option>2002</option>
                        <option>2003</option>
                        <option>2004</option>
                        <option>2005</option>
                        
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Kilometer</Form.Label>
                        <Form.Select name="kms" onChange={handleInputChange}>
                            <option>---Select Kilometer---</option>
                            <option>10KM</option>
                            <option>20km</option>
                            <option>30km</option>
                           
                      {/*   <option>---Select Kilometer---</option>
                        <option>50km</option>
                        <option>30km</option> */}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>state</Form.Label>
                        <Form.Select name="state" onChange={handleInputChange}>
                        <option>---Select State---</option>
                        <option>Lagos</option>
                        <option>Osun</option>
                        
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>User ID</Form.Label>
                        <Form.Control type="text" name="user_id" placeholder="User ID" onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>condition</Form.Label>
                        <Form.Control type="text" name="condition" placeholder="Car Condition" onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" name="price" placeholder="Enter Price" onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" name="description" placeholder="Enter Description" onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Uploads</Form.Label>
                        <Form.Control type="file" name="carimage" onChange={onImageChange} multiple/>
                        {/* {imagesURLs.map(imageSrc=><img src={imageSrc}/>)} */}
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Add
                    </Button>
                </Form>
                </div>

            {/*  <Nav/> */}
                
            </div>
        </div>
    );
}

export default Addcar;
