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
const getUser = localStorage.getItem("data");

const Addcar = () => {
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
                    <div><Link to="/dashboard/logout">Logout</Link></div>
                </div>
                <div className='left-div p-4'>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Brand</Form.Label>
                        <Form.Select /* value={brand} onChange={handleInputChange} */>
                        <option>Brand</option>
                            {/* {brand && response.map((bra) => (
                                <option value={bra.brandname} key={bra._id}>{bra.brandname}</option>
                            ))} */}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>model</Form.Label>
                        <Form.Select>
                        <option>model</option>
                        <option>model</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>year</Form.Label>
                        <Form.Select>
                        <option>year</option>
                        <option>year</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>varient</Form.Label>
                        <Form.Select>
                        <option>varient</option>
                        <option>varient</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Kilometer</Form.Label>
                        <Form.Select>
                        <option>kilimeter</option>
                        <option>kilimeter</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>state</Form.Label>
                        <Form.Select>
                        <option>kilimeter</option>
                        <option>kilimeter</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>User ID</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>condition</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Uploads</Form.Label>
                        <Form.Control type="file" placeholder="Enter email" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
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
