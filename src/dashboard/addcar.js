import React from 'react';
import passport from "../images/passport.jpeg";
import bell from "../images/bell.svg"
import envelope from "../images/envelope.svg";
import logow from "../images/logow.png";
import { Link } from 'react-router-dom';
import {Form,Button} from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { removeUserSession } from '../Session/userSession';
import { getUser } from '../Session/userSession';
import { multipleFilesUpload } from './data/api';
const getToken = localStorage.getItem("token");


const Addcar = () => {
const [multipleFiles, setMultipleFiles]=useState('')
const user=getUser() 
const userid=user._id;
const navigate = useNavigate();


const sendCar = {
    description: "",
    brand: "",
    model: "",
    year: "",
    kms: "",
    state: "",
    user_id:user._id,
    condition: "",
    price: "",
    image: ""
};
const [cars, setCars]=useState(sendCar)
const multipleFilesChange=(e)=>{
    e.preventDefault();
    setMultipleFiles(e.target.files)
}
const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target
    setCars({ ...cars, [name]: value })
}

const uploadMultipleFiles= async(e)=>{
    e.preventDefault();
    const formData=new FormData();
    for(let i=0; i<multipleFiles.length; i++){
        formData.append('image',multipleFiles[i])
    }
    formData.append('brand',cars.brand)
    formData.append('model',cars.model)
    formData.append('year',cars.year)
    formData.append('kms',cars.kms)
    formData.append('user_id',cars.user_id)
    formData.append('state',cars.state)
    formData.append('description',cars.description)
    formData.append('condition',cars.condition)
    formData.append('price',cars.price)
   await multipleFilesUpload(formData);
}

/****************Add Car Code End **************/

/**************** Logout Code Start**************/
    const handleLogout = async () => {
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
                     <div className='ml text-white'>{user.firstname}-{user.lastname}</div>
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
                    <div><Link to="/dashboard/logout" onClick={handleLogout}>Logout</Link></div>
                </div>

                <div className='left-div p-4'>

                    <div className='w-100 bg-success p-2 text-dark bg-opacity-25 mb-4 fs-4'>Post New Car</div>
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

                    <Form.Group className="mb-3 d-none" controlId="formBasicEmail">
                        <Form.Label>User ID</Form.Label>
                        <Form.Control type="text" value={userid} name="user_id" placeholder="User ID" onChange={handleInputChange} />
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
                        <Form.Control type="file" name="image" onChange={multipleFilesChange} multiple/>
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={uploadMultipleFiles}>
                        Add
                    </Button>
                </Form>
                </div>
                
            </div>
        </div>
    );
}

export default Addcar;
